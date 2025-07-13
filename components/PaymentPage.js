"use client"
import React from "react"
import Script from "next/script"
import { fetchpayments, initiate } from "@/actions/useractions"
import { useState } from "react"
import { fetchuser } from "@/actions/useractions"
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"


const PaymentPage = ({ username }) => {
  const { data: session, update } = useSession()
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: ""
  });
  const [currentuser, setCurrentuser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [router, session]);

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast('✅ Payment Done!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    router.push(`/${username}`)
  }, [])




  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setCurrentuser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }
  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": currentuser.razorpayid,
      "amount": amount,
      "currency": "INR",
      "name": "GetMeACoffee",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId,
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    if (typeof window !== "undefined" && window.Razorpay) {
      var rzp1 = new window.Razorpay(options)
      rzp1.open()
    } else {
      alert("Razorpay SDK failed to load. Please try again.")
    }
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme="light"
        transition={Bounce}
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full ">
        <img
          className="w-full"
          src={currentuser.coverpic}
          alt=""
        />
        <div className="flex relative justify-center items-center">
          <div className="absolute -top-14 ">
            <img
              className=" rounded-2xl w-20 md:w-30 h-20 md:h-30 border border-gray-500 shadow-black shadow-lg "
              src={currentuser.profilepic}
              alt=""
            />
          </div>
          <div className="info mt-19 flex justify-center items-center flex-col  gap-3">
            <div className="font-bold text-3xl">@{username}</div>
            <div className="text-sm">
              Lets Help {username} get a coffee!
            </div>
            <div className="text-slate-400">
              {payments.length} payments .  ₹{payments.reduce((a, b)=> a + b.amount, 0 )} raised
            </div>
          </div>
        </div>
        <div className="payment flex px-20 gap-5 w-full py-5 mt-10 md:flex-row flex-col">
          <div className="supporters w-full md:w-1/2 bg-[#422393] p-4 rounded-lg">
            <h2 className="textsm md:text-2xl font-bold my-3">Top Supporters</h2>
            <ul className="mx-5 text-lg">
              {payments && payments.length > 0 ? payments.map((p, i) => (
                <li key={i} className="flex justify-center items-start my-3 md:gap-2 text-sm md:text-lg">
                  <img width={33} src="/avatar.gif" alt="user avatar" />
                  <div>
                  {p.name} donated <span className="font-bold text-sm md:text-lg">₹{p.amount}</span> with a message "{p.message}"
                  </div>
                </li>
              )) : <li>No supporters yet.</li>}
            </ul>
          </div>
          <div className="makePayment w-full md:w-1/2 bg-[#422393] p-4 rounded-lg">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col ">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                type="text"
                className="w-full rounded-lg p-3 bg-[#361b7e] outline outline-[#651bc5]"
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full rounded-lg p-3 bg-[#361b7e] outline outline-[#651bc5]"
                placeholder="Your Message"
              />
              <div className="flex justify-between items-center gap-5">


                <input
                  onChange={handleChange}
                  value={paymentform.amount}
                  name="amount"
                  type="text"
                  className="w-full rounded-lg p-3 bg-[#361b7e] outline outline-[#651bc5]"
                  placeholder="Enter Amount"
                />
                <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className="text-white cursor-pointer bg-gradient-to-br from-purple-800 to-blue-800 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:from-purple-300 " disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}>
                  Pay
                </button>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 mt-2">
              <button className="bg-[#361b7e] cursor-pointer p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
              <button className="bg-[#361b7e] cursor-pointer p-3 rounded-lg" onClick={() => pay(2000)}>Pay ₹20</button>
              <button className="bg-[#361b7e] cursor-pointer p-3 rounded-lg" onClick={() => pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
