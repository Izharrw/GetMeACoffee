import React from "react";

const page = () => {
  return (
    <>
      <div className="px-4 py-8">
        <div className="text-white max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
          <div className="text-white flex flex-col space-y-4">
            <div>
              <span className="font-bold">Effective Date:</span>2025
            </div>
            <p>
                At Get Me A Chai, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
            <p>
                <span className="text-2xl font-bold">Information We Collect:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>Personal Information: Name, email address, phone number, etc.</li>
                <li>Payment Information: Processed securely through Razorpay.</li>
                <li>Usage Data: Information on how you use our site.</li>
            </ul>
            <p>
                <span className="text-2xl font-bold">How We Use Your Information:</span>
            </p>
            <ul className="list-disc pl-5">
                <li>To provide and maintain our service.</li>
                <li>To notify you about changes to our service.</li>
                <li>To provide customer support.</li>
                <li>To gather analysis or valuable information so that we can improve our service.</li>
            </ul>
            <p>
                <span className="font-bold">Data Security:</span> We use industry-standard encryption to protect your personal data and payment information.
            </p>
            <p>
                <span className="font-bold">Your Rights:</span> You have the right to access, update, and delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@getmeacoffee.com" className="text-blue-500 hover:underline">support@getmeacoffee.com</a>.
            </p>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
export const metadata = {
  title: "Privacy Policy - GetMeACoffee"
}