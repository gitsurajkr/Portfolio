"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { workData } from "@/constrant/data";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
//icons
import { MdOutlineZoomOutMap } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const Work = () => {
  const [activeTab, setActivetab] = useState(0);

  return (
    <section className="max_padd_container py-12 xl:py-24 h-screen">
      <div className="pt-12 ">
        {/* title */}
        <div>
          <div className="pb-10 text-center ">
            <div className="inline-block my-2 ">
              <motion.span
                className="uppercase bold-20 px-2 py-1 rounded-md "
                animate={{
                  backgroundColor: [
                    "#ffda79",
                    "#ffabe7",
                    "#d2bcf3",
                    "#edf3d8",
                    "#ffda79",
                  ],
                  transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                MY Work
              </motion.span>
            </div>
            <h4 className="medium-24 my-4 max-xl:text-center">
              My Professional Portraits
            </h4>
            <p className="text-center max-w-3xl mx-auto">
            I’m currently developing a GitHub PR automation tool and an e-commerce platform. Both projects are in progress, and I can’t wait to share them once they’re live. Stay tuned for updates!  
            <br />
            Feel free to connect if you are interested in discussing these projects or exploring potential collaborations. I am always open to new opportunities and excited to contribute to innovative solutions. Let’s create something amazing together!
            </p>

          </div>
        </div>
        {/* tabs */}
        <div className="flexCenter gap-x-5 mb-8">
          {workData.map((category, index) => (
            <button
              key={index}
              className={`${
                index === activeTab &&
                "after:!w-[100%] after:!bg-secondary after:transition-all after:duration-300 "
              } capitalize medium-16 relative after:absolute after:h-[3px] after:w-6 after:bg-tertiary after:left-0 after:-bottom-2 after:rounded-sm cursor-pointer`}
              onClick={() => setActivetab(index)}
            >
              {category.title}
            </button>
          ))}
        </div>
        {/* Projects */}
        <div className=" max-w-[90%]">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-[266px] sm:mt-16 "
          >
            {workData[activeTab].projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <div key={idx} className="flexCenter ">
                    <div className="relative overflow-hidden rounded-lg group">
                      <div className="min-w-full">
                        <Image
                          src={project.url}
                          alt={project.title}
                          height={250}
                          width={350}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-l from-[#edf3d8] to-[#ffabe7] opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                      <span className="uppercase medium-18 absolute top-1 left-4 text-2xl group-hover:top-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        Project {idx + 1}
                      </span>
                      <span className=" regular-16 text-gray-30 absolute top-16 left-4 text-2xl group-hover:top-12 transition-all duration-300 opacity-0 group-hover:opacity-100  ">
                        {project.title}
                      </span>
                      {/* info */}
                      <div className="flexCenter gap-x-4 absolute bottom-[10%] left-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20 p-1 "
                        >
                          <MdOutlineZoomOutMap />
                        </Link>
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20 p-1 "
                        >
                          <BiSolidLike /> <p>112</p>
                        </Link>
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20 p-1 "
                        >
                          <FaEye /> <p>222</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
