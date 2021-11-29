import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

export default function Sidenav(){

    return (
        <div className="bg-gray-900 w-2/12 fixed h-screen text-white text-lg flex flex-col justify-between">
            <div className="divide-y divide-gray-600">
                <p className="mt-5 mb-10 pablo text-8xl flex flex-row justify-center">
                    <div className="lt">&lt;</div>
                        PG
                    <div className="gt">&gt;</div>
                </p>
                <ul>
                    <li className="2xl:px-20 xl:px-16 sm:px-4 mt-5 h-14 flex flex-wrap content-center hover:bg-green-600 cursor-pointer">
                        <Link to="/">&lt;HOME&gt;</Link>
                    </li>
                    <li className="2xl:px-20 xl:px-16 sm:px-4 h-14 flex flex-wrap content-center hover:bg-green-600 cursor-pointer">
                        <Link to="/about">&lt;ABOUT&gt;</Link>
                    </li>
                    <li className="2xl:px-20 xl:px-16 sm:px-4 h-14 flex flex-wrap content-center hover:bg-green-600 cursor-pointer">
                        <Link to="./projects">&lt;PROJECTS&gt;</Link>
                    </li>
                    <li className="2xl:px-20 xl:px-16 sm:px-4 h-14 flex flex-wrap content-center hover:bg-green-600 cursor-pointer">
                        <Link to="skills">&lt;SKILLS&gt;</Link>
                    </li>
                    <li className="2xl:px-20 xl:px-16 sm:px-4 h-14 flex flex-wrap content-center hover:bg-green-600 cursor-pointer">
                        <Link to="contact">&lt;CONTACT&gt;</Link>
                    </li>
                </ul>
            </div>
            <div className="2xl:h-52 2xl:mb-20 flex justify-center mb-12 md:h-32 md:mb-6">
                <ul className="flex flex-col justify-between">
                    <li className="hover:text-green-600">
                        <a href="https://www.linkedin.com/in/pablo-garcia-jujuy/" target="_blank" rel="noreferrer">
                            <BsLinkedin className="icon"/>
                        </a>
                    </li>
                    <li className="hover:text-green-600">
                        <a href="https://github.com/pablogarcia77/" target="_blank" rel="noreferrer">
                            <BsGithub className="icon" />
                        </a>
                    </li>
                    <li className="hover:text-green-600">
                        <a href="https://www.facebook.com/pablo.garcia.pr/" target="_blank" rel="noreferrer">
                            <BsFacebook className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}