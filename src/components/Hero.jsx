import React from 'react'
import imgHome from "../assets/Images/imgHome.jpg";
export default function Hero() {
  return (
    <>
      <div   className="grid md:grid-cols-2 gap-10 mt-1 items-center">
        <div>
          <h1 className=" flex flex-col items-start justify-center 
              text-white text-left px-4 bg-black/1 rounded-3xl"
          >
            <span className="text-[#AB475C] text-6xl font-bold">
              Ramdani Assia
            </span>

            <span className="text-4xl text-[#F8E7ED] mt-7  animate-[fadeInUp_1s_ease-out]">
              Web & Desktop Application Developer passionate about UI/UX design and Back-End development.            </span>
          </h1>
        </div>

        <div className="flex justify-center">
          <img
            src={imgHome}
            alt="image home"
            className="rounded-3xl w-full max-w-60 shadow-xl"
          />
        </div>

      </div>


      <div className="mt-12 max-w-2xl mx-auto text-white text-lg text-center leading-relaxed animate-slideRight">
        I design and develop modern, high-performance, and secure applications.
        My goal is simple: to transform ideas into reliable, efficient, and elegant digital solutions.
      
      </div>

    </>
  )
}
