import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubprovider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/user'
import Payment from '@/models/payment'
import connectDB from '@/db/connectDb'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubprovider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } },
      profile(profile) {
        let email = profile.email;
        // Try to get the primary, verified email if available
        if (!email && Array.isArray(profile.emails)) {
          email = profile.emails.find(e => e.primary && e.verified)?.email || profile.emails[0]?.email;
        }
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: email,
          image: profile.avatar_url,
        };
      }
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server:{host: process.env.EMAIL_SERVER_HOST,
    //   port: process.env.EMAIL_SERVER_PORT,
    //   auth: {
    //     user: process.env.EMAIL_SERVER_USER,
    //     pass: process.env.EMAIL_SERVER_PASSWORD,}},
    //   from: process.env.EMAIL_FROM,
    // }),
  ],

  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
      console.log("user:", user);
      console.log("profile:", profile);
      console.log("email:", email);
      if (account.provider == "github") {
        await mongoose.connect("mongodb+srv://izharwarsi2233:12izhar12@izhar.fjbtjes.mongodb.net/?retryWrites=true&w=majority&appName=Izhar")
        const userEmail = user?.email || profile?.email || email;
        if (!userEmail) {
          throw new Error("Email is required to create a user.");
        }
        const currentUser = await User.findOne({ email: userEmail });
        if (!currentUser) {
          await User.create({
            email: userEmail,
            username: userEmail.split("@")[0],
          });
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username
      return session
    },
  }
})

export { authoptions as GET, authoptions as POST }