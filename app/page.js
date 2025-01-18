"use client"
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"
import Image from "next/image";
import { MdDownload } from "react-icons/md"
import FadeIn from "@/components/FadeIN";
export default function Home() {
  return (
    <section className="max_padd_container py-16 h-screen lg:py-32 ">
      <div className="flex gap-8 flex-col pt-8 xl:flex-row xl:pt-8">
        {/* left  */}
        <motion.div
          variants={FadeIn("left", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"

          className="flex flex-1 flex-col lg:pt-8 text-center xl:text-start">
          <div className="mb-2 pb-2">
            <motion.span
              className="uppercase bold-20 px-2 py-1 rounded-md "
              animate={
                {
                  backgroundColor: [
                    '#ffda79',
                    '#ffabe7',
                    '#d2bcf3',
                    '#edf3d8',
                    '#ffda79'
                  ],
                  transition: { duration: 10, repeat: Infinity, ease: 'backInOut' }
                }
              }
            >HELLO! THIS IS SURAJ Kumar.</motion.span>
          </div>
          <h2 className="h2 ">Creative <span className="text-secondary"> Web </span>Developer</h2>
          <h4 className="bold-24 !font-extrabold">A
            <span className="pl-2 ">
              <Typewriter
                words={[
                  "Full Stack Developer", "Programmer"
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>

          </h4>
          <p className="pt-4 ">Welcome to my portfolio ! I am a dynamic JavaScript developer specializing in React and Next.js, crafting immersive web experiences from frontend to backend. With a full-stack proficiency, I merge creativity with technical expertise to bring ideas to life. From elegant UI designs to robust server-side implementations, I thrive on building scalable solutions that exceed expectations. With a keen eye for detail and a passion for innovation, I constantly push boundaries to deliver exceptional digital products. Explore my portfolio to witness the fusion of craftsmanship and cutting-edge technology, reflecting my commitment to excellence in every project. </p>
          <div className="flexCenter xl:flexStart gap-x-2 pt-8">
            <button className="btn_dark_rounded  hover:bg-secondary hover:text-black"> Hire Me</button>
            <button className="group">
              <div className="relative border border-tertiary overflow-hidden rounded-full flexStart after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-tertiary after:transition-all after:duration-500 group-hover:after:w-full hover:after:bg-secondary">
                <span className="medium-16 px-5 z-10 transition-all duration-500 ">Download CV</span>
                <span className="flexCenter h-12 w-12 bg-tertiary rounded-full text-white ring-1 ring-tertiary z-10 "><MdDownload /></span>
              </div>
            </button>
          </div>
        </motion.div>
        {/* right */}

        <motion.div
          variants={FadeIn("right", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flexCenter relative lg:top-4">

          <Image
            src={'/bgg.png'}
            alt="bgimg"
            height={600}
            width={510}
            className="h-[288px] lg:h-[466px] w-auto" />
        </motion.div>
      </div>
    </section>
  );
}
