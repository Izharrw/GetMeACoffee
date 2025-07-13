import React from 'react'

const page = () => {
  return (
    <>
      <div className="px-4 py-8">
        <div className="text-white max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Cancellation/Refund Policies</h1>
          <div className="text-white flex flex-col space-y-4">
            <div>
              <span className="font-bold">Effective Date:</span>2025
            </div>
            <p>
                At Get Me A Chai, we strive to ensure the satisfaction of all our users. Please read our cancellation and refund policies below:
            </p>
            <p>
                <span className="text-2xl font-bold">For Contributors:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>Contributions made to crowdfunding campaigns are generally non-refundable.</li>
                <li>In the event of a fraudulent campaign, please contact us immediately at <a href='mailto:support@getmeacoffee.com' className='text-blue-500 hover:underline'>support@getmeacoffee.com</a>for assistance.</li>
            </ul>
            <p>
                <span className="text-2xl font-bold">For Campaign Creators:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>If you need to cancel your campaign, please contact our support team as soon as possible. </li>
                <li>Funds already distributed to you may not be refundable.</li>
            </ul>
            <p>
                <span className="text-2xl font-bold">Exceptions:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>In cases where a campaign does not meet its funding goal, contributions may be refunded.</li>
            </ul>
            
            <p>If you have any questions or need further assistance, please reach out to us at <a href="mailto:support@getmeacoffee.com" className='text-blue-500 hover:underline'>support@getmeacoffee.com</a></p>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default page

export const metadata = {
  title: "Refund - GetMeACoffee"
}