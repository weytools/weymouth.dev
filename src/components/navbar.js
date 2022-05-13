// components
import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
// styles




const Navbar = () => {
    return (
        <nav className="bg-gray-900 bg-opacity-60 backdrop-blur text-white font-inter w-full fixed shadow-md" >
            <ul className="max-w-screen-lg mx-auto px-10 flex  space-x-6 items-center ">
                <li className="justify-self-start shrink-0">
                    <a href="/"><img className="h-8" src="images/w2.png" /></a>
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