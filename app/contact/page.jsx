"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //add your Logic Here
    console.log("Form Submitted:", formData);
    // clear the fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className=" max_padd_container py-12 xl:py-24 h-screen bg-primary text-tertiary ">
      <div className="pt-12">
        {/* title */}
        <div>
          <div className=" pb-6 xl:pb-10 text-center">
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
                Contact Me
              </motion.span>
            </div>
            <h4 className="medium-24 my-4 max-xl:text-center ">Get in touch</h4>
            <p className=" text-center max-w-3xl mx-auto">
            Have a project in mind or a question about my work? 
            I’d love to connect! Whether it’s about backend development, 
            AI/ML, or Web3 technologies, feel free to reach out. Let’s collaborate and bring innovative ideas to life!
            </p>
          </div>
        </div>
        {/* contact form */}
        <div className=" max-w-md mx-auto ">
          <form onSubmit={handleSubmit}>
            <div className="mb-2 ">
              <label htmlFor="name" className="block text-gray-800 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[4vh] px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-800 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[4vh] px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-gray-800 ">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-black"
                required
              ></textarea>
            </div>
            <div className="flexCenter ">
              <button className="group" type="submit">
                <div className="relative border border-tertiary overflow-hidden rounded-full flexStart after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-tertiary after:transition-all after:duration-500 group-hover:after:w-full hover:after:bg-secondary">
                  <span className="medium-16 px-5 z-10 transition-all duration-500 ">
                    Send Message
                  </span>
                  <span className="flexCenter h-12 w-12 bg-tertiary rounded-full text-white ring-1 ring-tertiary z-10 ">
                    <IoIosSend className="bold-22 z-10" />
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
