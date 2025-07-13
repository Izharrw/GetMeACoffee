import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[50vh] gap-4 px-2">
      <div className="font-bold md:text-5xl text-3xl flex justify-center items-center md:gap-1 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent ">Get Me a Coffee <span><Image className="md:w-20 w-14 max-w-full h-auto" src="/coffee.gif"  alt="" /></span></div>
      <p className="text-center text-smmd:text-lg">
        A platform to support your favorite creators by buying them coffee. 
        <br />
        <span className="text-purple-400">Get Me a Coffee</span> is a simple and easy way to show your appreciation for the work of your favorite creators.
      </p>
      <div className="flex justify-center gap-4">
        <Link href={"/login"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Start Here</button></Link>
        <Link href="/about"><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Read More</button></Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto md:mb-32 mb-16 w-full">
      <h1 className="md:text-3xl text-xl font-bold text-center my-10">
        Your support is just a coffee away!
      </h1>
      <div className="flex md:gap-5 gap-10 space-y-7 justify-around md:flex-row flex-col">
        <div className="item flex flex-col space-y-1 justify-center items-center">
          <Image className="bg-slate-400 rounded-full p-2 " width={60} src="/lightning.gif" alt="" />
          <p className="font-bold">Fund Your Ideas</p>
          <p className="text-center">Design your innovative ideas</p>
        </div>
        <div className="item flex flex-col space-y-1 justify-center items-center">
          <Image className="bg-slate-400 rounded-full" width={60} sizes="20px" src="/coin.gif" alt="" />  
          <p className="font-bold">Fund Your Passion</p>
          <p className="text-center">Fund Your Friends</p>
        </div>
        <div className="item flex flex-col space-y-1 justify-center items-center">
          <Image className="bg-slate-400 rounded-full p-2 " width={60} src="/group.gif" alt="" />
          <p className="font-bold">Fund Your Team</p>
          <p className="text-center">Fund Your Community</p>
        </div>

      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white max-w-screen-xl px-10 pb-16 md:pb-32 w-full md:mx-auto">
      <h1 className="text-md font-bold text-center my-10">
        WHY CHOOSE <span className="text-purple-400">Get Me a Coffee</span>?
      </h1>
      <div className="flex flex-col space-y-4 justify-center items-center md:w-1/2 mx-auto ">
        <h2 className="text-center font-bold text-2xl md:text-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent ">
          Support Creativity and Innovation
        </h2>
        <p className="text-center text-sm md:text-lg">
          At Get Me A Chai, we empower developers, creators, and influencers by connecting them with supporters to fund their projects. No technical skills required – our intuitive platform makes it easy to receive support and bring your visions to life.
        </p>
      </div>
      <div className="flex justify-center items-center gap-24 mt-10 flex-col md:flex-row">
        <div className="flex flex-col space-y-5 justify-center items-center w-full md:w-1/4 border border-gray-700 p-8 rounded-lg bg-neutral-900/50">
          <div className="p-2 rounded-lg h-12 w-12 justify-center items-center flex" style={{ background: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
            <Image className="invert" src="/tag.svg" alt="" />
          </div>
          <h3 className="text-gray-400 text-lg">Easy Customization</h3>
          <p className="text-center text-gray-400 mb-7">
            Customize your profile and showcase your projects effortlessly. 
            Our platform is designed for everyone, regardless of technical expertise.
          </p>
        </div>
        <div className="flex flex-col space-y-5 justify-center items-center w-full md:w-1/4 border border-gray-700 p-8 rounded-lg bg-neutral-900/50">
          <div className="p-2 rounded-lg h-12 w-12 justify-center items-center flex" style={{ background: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
            <Image className="invert" src="/thunderbolt.svg" alt="" />
          </div>
          <h3 className="text-gray-400 text-lg">High Performance</h3>
          <p className="text-center text-gray-400 mb-7">
            Our platform is optimized for fast performance, ensuring your supporters can access your campaign quickly and easily.
          </p>
        </div>
        <div className="flex flex-col space-y-5 justify-center items-center w-full md:w-1/4 border border-gray-700 p-8 rounded-lg bg-neutral-900/50">
          <div className="p-2 rounded-lg h-12 w-12 justify-center items-center flex" style={{ background: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
            <Image className="invert" src="/pencil.svg" alt="" />
          </div>
          <h3 className="text-gray-400 text-lg">Comprehensive Features</h3>
          <p className="text-center text-gray-400 mb-7">
            Our platform offers everything you need to run a successful campaign, from analytics to support tools. And bring your visions to life.
          </p>
        </div>
      </div>
      
    </div>
    </>
  );
}
