import React, { useState, useEffect } from "react"
import ecole1 from "../assets/Images/ecole/a (1).png"
import ecole2 from "../assets/Images/ecole/a (2).png"
import ecole3 from "../assets/Images/ecole/a (3).png"
import ecole4 from "../assets/Images/ecole/a (4).png"
import ecole5 from "../assets/Images/ecole/a (5).png"

import fleurs1 from "../assets/Images/fleurs/a (1).png"
import fleurs2 from "../assets/Images/fleurs/a (2).png"

import parking1 from "../assets/Images/parking/a (1).png"
import parking2 from "../assets/Images/parking/a (2).png"
import parking3 from "../assets/Images/parking/a (3).png"
import parking4 from "../assets/Images/parking/a (4).png"
import parking5 from "../assets/Images/parking/a (5).png"
import parking6 from "../assets/Images/parking/a (6).png"
import parking7 from "../assets/Images/parking/a (7).png"

import pfe1 from "../assets/Images/pfe/a (1).png"
import pfe2 from "../assets/Images/pfe/a (2).png"
import pfe3 from "../assets/Images/pfe/a (3).png"
import pfe4 from "../assets/Images/pfe/a (4).png"
import pfe5 from "../assets/Images/pfe/a (5).png"
import pfe6 from "../assets/Images/pfe/a (6).png"
import pfe7 from "../assets/Images/pfe/a (7).png"
import pfe8 from "../assets/Images/pfe/a (8).png"
import pfe9 from "../assets/Images/pfe/a (9).png"

import soutenance1 from "../assets/Images/soutenances/a (1).jpg"
import soutenance2 from "../assets/Images/soutenances/a (2).jpg"
import soutenance3 from "../assets/Images/soutenances/a (3).jpg"
import soutenance11 from "../assets/Images/soutenances/a (11).jpg"
import soutenance13 from "../assets/Images/soutenances/a (13).jpg"
import soutenance15 from "../assets/Images/soutenances/a (15).jpg"
import soutenance6 from "../assets/Images/soutenances/a (6).jpg"
import soutenance7 from "../assets/Images/soutenances/a (7).jpg"

import taika1 from "../assets/Images/taika/a (1).png"
import taika2 from "../assets/Images/taika/a (2).png"
import taika3 from "../assets/Images/taika/a (3).png"
import taika4 from "../assets/Images/taika/a (4).png"
import taika5 from "../assets/Images/taika/a (5).png"
import taika6 from "../assets/Images/taika/a (6).png"
import taika7 from "../assets/Images/taika/a (7).png"

function AutoSlider({ images }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 500) // change chaque 3 secondes

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="w-full flex justify-center">
            <img
                src={images[index]}
                className="w-full max-w-4xl h-[400px] object-contain rounded-xl bg-white p-2 shadow-lg transition-all duration-500"
            />
        </div>
    )
}
export default function Projets() {

    const projects = [
        {
            title: "E-commerce App",
            description: "An e-commerce website for managing purchases and sales, built using React, Node.js, Express, and PHP.",
            images: [taika1,
                taika2,
                taika3,
                taika4,
                taika5,
                taika6,
                taika7]
        },
        {
            title: "Desktop application Ecole",
            description: "A desktop application for the management and administration of a private school.Developed using Java.",
            images: [ecole1, ecole2, ecole3, ecole4, ecole5]
        },
        {
            title: "Web site Candia",
            description: "A web application for managing employee complaints at Tchin Lait Candia, built using React, Node.js, and modern web technologies.",
            images: [pfe1, pfe2, pfe3, pfe4, pfe5, pfe6, pfe8, pfe7, pfe9]
        },
        {
            title: "Desktop application Parking",
            description: "A desktop application for the management and administration of a parking system, developed using Java.",
            images: [parking1, parking2, parking3, parking4, parking5, parking6, parking7]
        },
        {
            title: "Graduation website of Bejaia University",
            description: "It is a web application that generates the thesis defense schedule for the University of Béjaïa, developed using HTML5 CSS JS PHP.",
            images: [soutenance1,
                soutenance2,
                soutenance3,
                soutenance11,
                soutenance13,
                soutenance15,
                soutenance6,
                soutenance7]
        },
        {
            title: "Website flowers",
            description: "It is a website that manages the online sales of flower bouquets, developed using node react espress js.",
            images: [fleurs1, fleurs2]
        }
    ]

    return (
        <div id="projects" className="px-6 md:px-12 py-12">

            <h1 className="text-[#AB475C] text-2xl md:text-4xl font-extrabold mb-10">
                My Projects
            </h1>

            <div className="flex flex-col gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#E08D9F] p-6 rounded-2xl shadow-lg">

                        {/* Titre */}
                        <h2 className="text-white text-xl font-bold mb-2">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4">
                            {project.description}
                        </p>

                
                        <AutoSlider images={project.images} />
                    </div>
                ))}
            </div>

        </div>
    )
}