'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
   
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl lg:font-extrabold text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 ">Hello I am {" "} 
            </span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ahmed',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Web Designer',
        1000,
        'Graphic Designer',
        1000
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quae
            culpa expedita hic nulla alias quam veritatis odit doloremque
            distinctio, itaque dicta beatae.
          </p>
          <div>
            <button className="px-10 rounded-full w-full sm:w-fit mr-4 py-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire me</button>
            <button className="px-1 rounded-full w-full sm:w-fit py-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-900 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-6 py-3">Download CV</span>
              </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#242424] w-[350px] h-[350px] relative">
            <Image
              className="mix-blend-color-dodge absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
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
