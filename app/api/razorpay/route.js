import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/user";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    const razorpay_order_id = body.get("razorpay_order_id");
    const razorpay_payment_id = body.get("razorpay_payment_id");
    const razorpay_signature = body.get("razorpay_signature");


    //Check if razorPayOrderId is on the server
    let p = await Payment.findOne({ oid: razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" })
    }

    //fetch the secret of the user who is getting payment
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //Verify the Payment
    let xx = validatePaymentVerification({ order_id: razorpay_order_id, payment_id: razorpay_payment_id }, razorpay_signature, secret)

    if (xx) {
        // Update the Payment
        const updatedPayment = await Payment.findOneAndUpdate({ oid: razorpay_order_id }, { done: true }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }

    else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" })
    }
}