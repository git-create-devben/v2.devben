"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiTailwindcss, SiTypescript, SiRedux, SiNestjs, SiReactos } from 'react-icons/si';
import Devben from "@/public/devben.jpg";
import CareMoreImage from "@/public/caremore.png";
import Link from 'next/link';

const V2 = () => {
    // Real experience data from resume
    const experience = [
        {
            role: "Front End Developer",
            company: "Arravo",
            duration: "2024-Present"
        },
        {
            role: "Front End Engineer",
            company: "USA Afrika",
            duration: "2022-2024"
        },
        {
            role: "Front End Engineer",
            company: "HealthGO ICT",
            duration: "2021-2022"
        }
    ];

    const projects = [
        {
            name: "CareMore",
            tech: ["React", "Convex", "TypeScript", "Shadcn"],
            desc: "E-commerce platform for premium skincare products",
            link: "https://github.com/git-create-devben/caremore"
        },
        {
            name: "LocaAI",
            tech: ["Next.js", "Firebase", "Gemini API", "Google Cloud"],
            desc: "AI-powered local service finder with real-time data",
            link: "https://github.com/git-create-devben/loca"
        }

    ];

    return (
        <main>
            <div className='bg-[#000000] text-white py-3 px-3 '>
            <div className="md:hidden flex flex-col item-center justify-center text-center col-span-3 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600">
                            <div className="counterapi m-h-2xl" aria-readonly></div>

                            <h1 className='md:text-7xl text-6xl font-extra-bold'>DEV⚡BEN </h1>
                            <p className='text-md font-bold mt-3'>Front-end developer 💡 building the future of the web 🌐 one pixel at a time 🖥️.</p>
                        </div>
                <div className="grid md:grid-cols-3 grid-cols-2 md:grid-rows-3 gap-2 md:p-5 py-3 bg-[#000000] min-h-screen text-white">
                    {/* Top Row */}
                    
                    <motion.div 
                        className='col-span-2 row-span-1 grid md:grid-cols-3 grid-cols-1 gap-2'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="col-span-2 flex flex-col gap-4 p-4 rounded-lg border-[1px] border-gray-600 bg-[#1D8D0BC]">
                            <h1 className='font-bold text-3xl text-left'>About DevBen</h1>
                            <p className='text-sm italic font-sans'>
                                Front-End Developer with 4+ years experience crafting user-centric interfaces.
                                Proven track record in React, Next.js, and Vue ecosystems. Passionate about
                                performance optimization and real-time features. Based in Lagos.
                            </p>
                            <p><b>Note:</b> If you&apos;re HR my real live project with a companies is listed in my resume. <Link href="https://docs.google.com/document/d/1WidIvQFaoEk4hObhewfCrJE5Nvjm-poMyW-VytxuPfQ/edit?usp=sharing" className="text-green-400 text-sm hover:underline">DevBen.resume</Link> </p>
                        </div>
                        <div className="col-span-1 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600 flex flex-col items-center justify-center">
                            <Image
                                src={Devben}
                                alt="DevBen Avatar"
                                className="w-32 h-32 rounded-full mb-4 border-2 border-green-500"
                            />
                            <h3 className="font-bold mb-2">📍 Island, Lagos</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/git-create-devben" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/benlad/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left Column - Projects */}
                    <motion.div 
                        className="col-span-2 md:col-span-1 md:row-span-2  bg-[#1D8D0BC] px-4 py-2 rounded-lg flex flex-col items-center border-[1px] border-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className='text-xs p-1 bg-green-800 text-white rounded-lg '> <i className='italic text-xs'>A new AI project coming soon 😆</i></p>
                        <h2 className="text-2xl font-bold mb-4 mt-5">Recent Project</h2>
                        <div className="bg-black/30 p-4 rounded-lg mb-4">
                            <div className=" bg-gray-800 rounded mb-3 flex items-center justify-center ">
                                <Image src={CareMoreImage} alt='Project Overview' width={400} height={100}  />
                            </div>
                            <h3 className="font-bold text-green-400">{projects[0].name}</h3>
                            <p className="text-sm mb-3">{projects[0].desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {projects[0].tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-black/20 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm mt-3 block hover:underline">
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>

                    {/* Middle Section */}
                    <motion.div 
                        className='col-span-2 row-span-1 grid md:grid-cols-4 gap-2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:col-span-1  bg-[#1D8D0BC] px-4 py-2 rounded-lg border-[1px] border-gray-600 flex flex-col">
                            <h3 className="font-bold text-left mb-2">Core Stack</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center">
                                    <FaReact className="text-4xl mb-1 text-blue-500" />
                                    <span className="text-xs">React</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <SiNextdotjs className="text-4xl mb-1 text-black" />
                                    <span className="text-xs">Next.js</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaVuejs className="text-4xl mb-1 text-green-500" />
                                    <span className="text-xs">Vue</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <SiNuxtdotjs className="text-4xl mb-1 text-green-500" />
                                    <span className="text-xs">Nuxt.js</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <SiTailwindcss className="text-4xl mb-1 text-blue-400" />
                                    <span className="text-xs">Tailwind</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <SiTypescript className="text-4xl mb-1 text-blue-500" />
                                    <span className="text-xs">TypeScript</span>
                                </div>
                            </div>
                            <p className='text-xs p-1 bg-green-800 text-white rounded-lg mt-4'> <i className='italic text-xs'>React Native will be added to the core stack soon </i></p>
                        </div>
                        <div className=" hidden md:flex flex-col item-center justify-center text-center col-span-3 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600">
                            <div className="counterapi m-h-2xl" aria-readonly></div>

                            <h1 className='text-7xl font-extra-bold'>DEV⚡BEN </h1>
                            <p className='text-md font-bold mt-3'>Front-end developer 💡 building the future of the web 🌐 one pixel at a time 🖥️.</p>
                        </div>
                    </motion.div>

                    {/* Right Column - Experience */}
                    <motion.div 
                        className="col-span-2 md:col-span-1 md:row-span-2 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-green-500">
                                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-1" />
                                    <h4 className="font-bold">{exp.role}</h4>
                                    <p className="text-sm text-gray-300">{exp.company}</p>
                                    <p className="text-xs text-gray-400">{exp.duration}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom Row Sections */}
                    <motion.div 
                        className="col-span-2 md:col-span-1 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600 hover:bg-[#1D8D0BC]/90 transition"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-bold mb-3">🚀 My playlist</h3>
                        <iframe className="rounded-lg" src="https://open.spotify.com/embed/playlist/0dU1oOc0oluqMPIKOflnUy?utm_source=generator&amp;theme=0" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </motion.div>

                    <motion.div 
                        className="col-span-2 md:col-span-1 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-bold mb-3">📚 Currently Exploring</h3>
                        <div className="flex flex-col text-left gap-4 ">
                            <div className="flex items-center space-x-2">
                                <SiRedux className="text-2xl text-purple-500" />
                                <span>Advanced State Management</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <SiNestjs className="text-2xl text-purple-500" />
                                <span>Nest Js </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <SiReactos className="text-2xl text-purple-500" />
                                <span>Intermediate React Native </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="col-span-1 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-bold mb-3">💡 Development Mantra</h3>
                        <p className="text-sm">&quot;Optimize relentlessly - every millisecond and pixel matters in user experience&quot;</p>
                    </motion.div>

                    <motion.div 
                        className="col-span-1 row-span-1 bg-[#1D8D0BC] p-6 rounded-lg border-[1px] border-gray-600 flex items-center justify-center group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="mailto:benlad636@gmail.com" className="px-6 py-3 bg-green-600 rounded-full hover:bg-green-700 transition transform hover:scale-105">
                            Let&apos;s Collaborate!
                        </a>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default V2;