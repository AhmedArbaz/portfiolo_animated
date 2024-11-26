import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 lg:font-extrabold text-6xl">
            Hero, I am Ahmed
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quae
            culpa expedita hic nulla alias quam veritatis odit doloremque
            distinctio, itaque dicta beatae.
          </p>
          <div>
            <button className="px-6 rounded-full mr-4 py-3 bg-white hover:bg-slate-200 text-black">Hire me</button>
            <button className="px-6 rounded-full py-3 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#242424] w-[400px] h-[400px] relative">
            <Image
              className="mix-blend-screen absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              src="/images/avatar.jpg"
              alt="avatar"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
