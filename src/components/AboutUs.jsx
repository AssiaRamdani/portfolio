import React from 'react'

import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.webp";
export default function AboutUs() {
    return (
        <>
            <h1 id="about" className="text-[#AB475C] text-2xl md:text-4xl font-extrabold text-left mb-10 ml-12">
                About Us
            </h1>
            <div className="flex flex-col md:flex-row my-20">
                <div className="w-full md:w-3/4 flex flex-col px-6 md:px-10">

                    <h2 className=" text-left">
                        I hold a Master’s degree in Software Engineering and specialize in the design and development of web and desktop applications.
                        Over the years, I have developed a strong foundation in programming, software architecture, and modern development practices.
                        I am particularly interested in building efficient, scalable, and secure applications that solve real-world problems.
                        My work reflects a balance between technical precision and user-centered design, ensuring both functionality and usability.
                    </h2>
                     <h2 className=" text-left  mt-4">

                        I have experience working with various technologies and frameworks, allowing me to adapt to different project requirements.
                        From front-end development to back-end logic and database management.
                        I pay close attention to clean code principles, maintainability, and performance optimization in every project I work on.
                        Security is also a key aspect of my approach, as I aim to build reliable and robust systems.
                    </h2>
                </div>
                <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-0">
                    <img
                        src={img1}
                        alt="Gauche"
                        className="w-40 md:w-55 rounded-full shadow-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row my-20">
                <div className="w-full md:w-1/6 flex justify-center mb-6 md:mb-0">
                    <img
                        src={img2}
                        alt="Gauche"
                        className="w-32 md:w-40 rounded-full shadow-lg"
                    />

                </div>
                <div className="w-full md:w-5/6 flex flex-col px-6 md:px-10">
                   
                   
                     <h2 className=" text-left">
                        My goal is to contribute to innovative and impactful projects where I can apply my knowledge and continue to grow professionally.
                        I am always open to new opportunities, challenges, and collaborations that allow me to expand my experience and make a meaningful contribution.
                        Through dedication, creativity, and persistence, I aim to build solutions that are both technically sound and user-friendly.
                    </h2>
                </div>
                
            </div>
           


        </>
    )
}
