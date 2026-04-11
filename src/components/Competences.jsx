import React, { useEffect, useRef, useState } from 'react'

export default function Competences() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    "HTML / CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
    "Java",
    "C++",
    "python",
    "Express.js",
    "Matereal.ui",
    "Bootstrap"
  ]

  return (
    <div id="competences" ref={sectionRef} className="px-6 md:px-12 py-12">
      
      <h1 className="text-[#AB475C] text-2xl md:text-4xl font-extrabold mb-10">
       Skills
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`bg-[#E08D9F] text-white p-4 rounded-xl shadow-md 
            transform transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}