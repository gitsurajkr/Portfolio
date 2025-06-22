"use client"
import cpp from "@/public/Icon/Cpp.svg"
import React from 'react';
import docker from "@/public/Icon/docker.svg"
import nextjs from "@/public/Icon/nextjs.svg"
import nodejs from "@/public/Icon/nodejs.svg"
import Postgress from "@/public/Icon/postgresql.svg"
import python from "@/public/Icon/python.svg"
import react from "@/public/Icon/react.svg"
import Typescript from "@/public/Icon/typescript.svg"
import prisma from "@/public/Icon/prisma.svg"
import cloudflare from "@/public/Icon/cloudflare.svg"
import kafka from "@/public/Icon/kafka.svg"
import tensorflow from "@/public/Icon/tensorflow.svg"
import webrtc from "@/public/Icon/webrtc.svg"
import github from "@/public/Icon/github.svg";
import turbo_Repo  from "@/public/Icon/turbo.png";
import Image from "next/image";



export const icons = {
    cpp, docker, nextjs, nodejs, Postgress, python, react, Typescript, prisma, cloudflare, kafka, tensorflow, webrtc, github, turbo_Repo 
}


export function Project() {
    const projects = [
        { 
            name: "Zapier Integration", 
            description: "Built custom Zapier integrations for workflow automation", 
            url: "https://github.com/gitsurajkr/zapier" 
        },
        { 
            name: "PR Review Automation", 
            description: "Tool to automate code review processes for PRs", 
            url: "https://github.com/gitsurajkr/PR-Review-system" 
        },
        { 
            name: "Technical Blog Platform", 
            description: "Collection of technical articles on modern web development", 
            url: "https://github.com/gitsurajkr/medium-blogs" 
        }
    ];

    return (
        <div className="px-8 pt-8 max-w-3xl">
            <h2 className="text-lg font-bold uppercase mb-4 inline-block border-b-2 border-red-400 text-red-500 pb-1 tracking-widest ">Projects</h2>

            <div className="flex flex-col gap-4">
                {projects.map((project, idx) => (
                    <div 
                        key={idx} 
                        className="flex flex-col group cursor-pointer hover:bg-gray-50 p-3 rounded-md border border-gray-100" 
                        onClick={() => window.open(project.url, "_blank")}
                    >
                        <div className="flex items-center mb-2">
                            <div className="w-1 h-6 bg-orange-500 mr-3" />
                            <span className="text-base font-medium flex-grow">{project.name}</span>
                            
                            <Image 
                                src={github.src} 
                                alt="GitHub" 
                                loading="lazy"
                                width={5}
                                height={5}
                                className="opacity-0 group-hover:opacity-100 transition-opacity" 
                            />
                        </div>
                        <p className="text-sm text-gray-600 pl-4">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function WorkingCurrently() {
    return (
        <div className="px-8 pt-8 max-w-3xl">
            <h2 className="text-lg font-bold uppercase mb-4 inline-block border-b-2 border-violet-400 text-violet-500 pb-1 tracking-widest ">Currently Learning</h2>

            <div className="flex flex-col gap-4">
                {["DevOps", "Blockchain", "Machine Learning"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                        <div className="w-1 h-6 bg-violet-400 mr-3" />
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Skills() {
    // Skills with icons
    const iconSkills = Object.entries(icons).map(([name, Icon]) => (
        <div key={name} className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-2">
              <Image 
                src={Icon.src} 
                alt={name} 
                loading="lazy" 
                width={45} 
                height={45}
                className="object-contain"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-medium text-center capitalize">{name}</span>
          </div>
    ));

    // Skills without icons
    const textSkills = [ "WebSockets", "CI/CD Pipeline", "Redis", "Pub/Sub", "Queues"].map((skill) => (
        <div key={skill} className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-3 h-full">
            <span className="text-sm text-center font-medium">{skill}</span>
        </div>
    ));

    return (
        <div className="px-8 pt-8 max-w-3xl pb-16">
            <h2 className="text-lg font-bold uppercase mb-4 inline-block border-b-2 border-violet-400 text-violet-500 pb-1 tracking-widest">Skills</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
                {iconSkills}
                {textSkills}
            </div>
        </div>
    );
}


