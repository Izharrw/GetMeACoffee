import React from "react";

const page = () => {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center py-6">
        <h1 className="font-bold text-4xl font-sans">About Us</h1>
        <div className="w-full mx-auto text-center space-y-10 px-4">
          <h2 className="text-center font-bold text-lg mt-4">
            `&quot;`Fueling Creativity, One Coffee at a Time!`&quot;`
          </h2>
          <p>
            Welcome to our coffee shop, where we believe that every great idea
            starts with a great cup of coffee. Our mission is to create a cozy
            and inspiring environment for artists, writers, and dreamers alike.
            Whether you`&apos;`re here to sketch, write, or simply enjoy the aroma of
            freshly brewed coffee, we have something special for you.
          </p>
          <p>
            Our team is passionate about coffee and dedicated to providing you
            with the best experience possible. From our carefully sourced beans
            to our artisanal brewing methods, we take pride in every cup we
            serve. Join us for a cup of inspiration and let your creativity
            flow!
          </p>
          <p>
            We are committed to sustainability and support local artists by
            showcasing their work in our shop. Our walls are adorned with
            beautiful pieces that tell stories and spark conversations. We
            believe in the power of community and strive to create a space where
            everyone feels welcome and inspired.
          </p>
          <p>
            Thank you for being a part of our journey. We look forward to
            serving you and being a part of your creative process. Remember,
            every sip is a step towards your next masterpiece!
          </p>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 mx-5 my-10"></div>
      <div className="text-white container px-10 pb-32">
        <h1 className="text-3xl font-bold text-center my-10">
          Why Choose Get Me a Coffee?
        </h1>
        <div className="flex flex-col space-y-4 ">
          <span>
            <p className="text-center text-lg">
              <span className="font-bold">Get Me a Coffee</span> is a platform
              that allows you to support your favorite creators by buying them
              coffee. It is a simple and easy way to show your appreciation for
              the work of your favorite creators.
            </p>
          </span>
          <span>
            <p className="text-center text-lg">
              Our mission is to empower talented individuals by facilitating
              financial support, allowing them to focus on what they do best –
              creating. Whether you`&apos;`re a developer coding the next big app, a
              content creator making engaging videos, or an influencer sharing
              your passion, <span className="font-bold">Get Me a Coffee</span>{" "}
              is here to help you achieve your goals.
            </p>
          </span>
          <span>
            <p className="text-center text-lg">
              We believe in the power of community and the impact of collective
              support. By providing a platform for patrons to contribute, we aim
              to transform dreams into reality and foster a culture of
              creativity and innovation.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default page;

export const metadata = {
  title: "About - GetMeACoffee"
}