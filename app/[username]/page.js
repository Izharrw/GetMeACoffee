import React from "react";
import connectDB from "@/db/connectDb";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import User from "@/models/user";

const Username = async ({ params }) => {
  await connectDB();
  const { username } = await params;
  const user = await User.findOne({ username: username });

  if (!user) {
    notFound(); // This is enough — no need to wrap in function
  }

  return <PaymentPage username={username} />;
};

export default Username;

export async function generateMetadata({params}) {
  const { username } = await params;
  return {
    title: `${username} - GetMeACoffee`
  }
} 
