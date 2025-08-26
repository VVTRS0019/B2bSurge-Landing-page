import Link from 'next/link'
import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Logo from "../../public/TransparentLogo.png"
import Image from 'next/image';

export default function Footer() {
  return (

    <footer className="bg-zinc-900 text-white py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quick Links */}
        <div>
          <h1 className="mdHeading mb-4">Quick Links</h1>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-cyan-500 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/privacyPolicy" className="hover:text-cyan-500 transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/termsofservice" className="hover:text-cyan-500 transition-colors duration-200">
                Terms Of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="mdHeading mb-4">Contact Info</h1>
          <p className="mb-2"><AiOutlinePhone className='inline-block text-cyan-500' /> +91 2066664346</p>
          <p className=""> <AiOutlineMail className="inline-block text-cyan-500" /> support@techriigour.com</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-4">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              className="w-16 h-16 object-cover sm:mx-auto"
              priority
            />
            <p className="text-md font-semibold mt-2">A Product by Techriigour</p>
          </div>

          <div>
            <h1 className="mdHeading mb-3">Follow Us</h1>
            <div className="flex justify-center items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                title="Instagram"
                className=" bg-cyan-500 text-zinc-900 p-2 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              >
                <AiOutlineInstagram className="w-6 h-6" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook"
                title="Facebook"
                className=" bg-cyan-500 text-zinc-900 p-2 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              >
                <AiOutlineFacebook className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                title="LinkedIn"
                className="bg-cyan-500 text-zinc-900 p-2 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              >
                <AiOutlineLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom small copyright */}
      <div className="border-t border-zinc-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
