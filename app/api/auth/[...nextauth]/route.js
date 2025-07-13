import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/db/connectDb';
import User from '@/models/user';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } },
      profile(profile) {
        let email = profile.email;
        if (!email && Array.isArray(profile.emails)) {
          email = profile.emails.find(e => e.primary && e.verified)?.email || profile.emails[0]?.email;
        }
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: email,
          image: profile.avatar_url,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: { params: { scope: "openid email profile" } },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email }) {
      await connectDB();
      const userEmail = user?.email || profile?.email || email;
      if (!userEmail) throw new Error("Email is required to create a user.");

      const existingUser = await User.findOne({ email: userEmail });
      if (!existingUser) {
        await User.create({
          email: userEmail,
          username: userEmail.split("@")[0],
        });
      }

      return true;
    },

    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser?.username || session.user.name;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
