import React from 'react'

const page = () => {
  return (
    <>
      <div className="px-4 py-8">
        <div className="text-white max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Terms & Conditions</h1>
          <div className="text-white flex flex-col space-y-4">
            <div>
              <span className="font-bold">Effective Date:</span>2025
            </div>
            <p>
                Welcome to Get Me A Chai. By using our website, you agree to comply with and be bound by the following terms and conditions:
            </p>
            <p>
                <span className="text-2xl font-bold">User Responsibilities:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>Provide accurate and complete information during registration.</li>
                <li>Use the platform in accordance with all applicable laws and regulations.</li>
            </ul>
            <p>
                <span className="text-2xl font-bold">Prohibited Activities:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>Fraudulent activities or impersonation.</li>
                <li>Posting harmful or illegal content.</li>
            </ul>
            <p>
                <span className="font-bold">Intellectual Property:</span> All content on this site is the property of Get Me A Chai or its content suppliers and protected by intellectual property laws.
            </p>
            <p>
                <span className="font-bold">Disclaimer:</span> We do not guarantee the success of any crowdfunding campaign. Contributions are made at your own risk.
            </p>
            <p>
                <span className="font-bold">Changes to Terms:</span> We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.
            </p>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default page

export const metadata = {
  title: "Terms - GetMeACoffee"
}