// components
import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
// styles




const Navbar = () => {
    return (
        <nav className="bg-gray-900 bg-opacity-60 backdrop-blur text-white font-inter w-full fixed shadow-md  z-30" >
            <ul className="max-w-screen-lg mx-auto px-10 flex  space-x-6 items-center ">
                <li className="justify-self-start shrink-0 w-16">
                    <a href="/">
                        <svg className="weydev-logo" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 255 138">
                            <g>
                                <polygon className="weydev-logo bar-1 fill-nicepurp stroke-nicepurp " points="70 0 0 0 35 89.6 70 0"/>
                                <polygon className="weydev-logo bar-3 fill-nicepink stroke-nicepink " points="100 0 50 128 105 128 155 0 100 0"/>
                                <polygon className="weydev-logo bar-2 fill-niceblue stroke-niceblue " points="185 0 135 128 195 128 245 0 185 0"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li className=" h-px w-full bg-gradient-to-r from-nicepurp to-nicepink"></li>
                <li className="text-gray-200 hover:text-niceblue hover:-translate-y-1 transform transition py-2 my-2 rounded-md font-medium">
                    <a href="#projects">Projects</a>
                </li>
                <li className="text-gray-400 hover:text-white  border-2 border-transparent hover:border-niceblue transform transition  py-1 px-2 my-2 rounded-md font-medium">
                    <a href="#about">About</a>
                </li>
                <li className="text-gray-200 hover:text-niceblue hover:-translate-y-1  transform transition py-2 my-2 rounded-md font-medium">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar 