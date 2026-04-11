import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#AB475C] text-[#FFFDFD] py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + description */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">AssiaRamdani</h2>
            <p className="text-sm text-[#f5d7dc]">
              Creating modern and beautiful web experiences. Clean design, responsive and user friendly.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-[#f5d7dc]">
              <li className="hover:text-white cursor-pointer transition">
                <a
                  href="#home"
                  className="hover:text-white transition cursor-pointer"
                >
                  Home
                </a></li>
              <li className="hover:text-white cursor-pointer transition">

                <a
                  href="#projects"
                  className="hover:text-white transition cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <a
                  href="#about"
                  className="hover:text-white transition cursor-pointer"
                >
                  About
                </a></li>

            </ul>
          </div>

          {/* Resources */}
        

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact & Follow us </h3>
            <div className="flex gap-4 text-[#f5d7dc] text-sm">
              <a
                href="https://www.facebook.com/assia.rmd.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
             
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=assiaramdani2020@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/assia-ramdani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
               </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#d98a98] my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#f5d7dc]">
          <p>© {new Date().getFullYear()}AssiaRamdani. All rights reserved.</p>
         
        </div>

      </div>
    </footer>
  )
}
