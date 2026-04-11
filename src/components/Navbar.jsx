import React from 'react'

export default function Navbar() {
    return (
        <nav id="home" className="flex items-center gap-10">
            <div className="w-10 h-10 bg-[#F8E7ED] rounded-full flex items-center justify-center text-xs font-semibold text-[#AB475C]">
                AR
            </div>
            <div className="bg-[#F8E7ED] rounded-full px-5 py-2 flex gap-5 text-[#AB475C] font-medium text-xs tracking-wide">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a  href="#contact">Contact</a>
                <a href="#competences">Skills</a>
            </div>
        </nav>
    )
}
