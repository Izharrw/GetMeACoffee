import React from "react";

const page = () => {
  return (
    <>
    <section className="p-6">
      <div className="flex flex-col text-white justify-center items-center pt-10 gap-10">
        <h1 className="font-bold text-5xl font-sans">Contact Us</h1>
        <span className="mt-10 font-bold ">We`&apos;`d love to hear it from You!</span>
        <span>
          If you have any questions, feedback, or need support, feel free to
          reach out to us:
        </span>
        <p className="flex flex-col justify-center items-center">
          <span>Email: support@getmeachai.com</span>
          <span>Phone: +1-800-123-4567</span>
          <span>Address: 123 Creator Lane, Innovation City, CA 90210</span>
        </p>
        <span>Follow us on social media for the latest updates and news:</span>
        <p className="flex flex-col justify-center items-center">
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
        </p>
      </div>
      <div className="bg-white h-1 opacity-10 mx-5 my-10"></div>
      </section>
    </>
  );
};

export default page;

export const metadata = {
  title: "Contact - GetMeACoffee"
}