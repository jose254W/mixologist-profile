import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="  bg-[#333333]  ">
      <div className="flex  md:flex-row flex-col">
        <div className="md:w-[50%] w-[90%] mx-auto bg-white flex flex-col md:p-12 p-4 items-center md:items-end">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/supa.mp4" type="video/mp4" />
            {/* Add more source elements for different video formats */}
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="md:w-[50%] w-[90%] mx-auto  flex flex-col  md:p-12 p-4 items-start ">
          <div className="flex gap-2 text-white mb-4 font-bold text-5xl">
            Contacts
          </div>
          <a
            href="tel:+254 796 408 129"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <BsPhone className="text-7xl text-[#CCCCCC]" />
              <div className="flex  flex-col">
                <h1 className="text-white text-xl">+254 796 408 129</h1>
                <h1 className="text-[#CCCCCC] uppercase">Business days only</h1>
              </div>
            </div>
          </a>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />
          <a
            href="mailto:craigelushasha9822@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <AiOutlineMail className="text-7xl text-[#CCCCCC]" />
              <div className="flex  flex-col">
                <h1 className="text-white text-xl">
                  craigelushasha9822@gmail.com{" "}
                </h1>
                <h1 className="text-[#CCCCCC] uppercase">
                  UP TO 72 HOURS RESPOND
                </h1>
              </div>
            </div>
          </a>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />

          <a
            href="https://www.instagram.com/lushasha_mixologist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <BsInstagram className="text-7xl text-[#CCCCCC]" />
              <div className="flex  flex-col">
                <h1 className="text-white text-xl">@lushasha_mixologist</h1>
                <h1 className="text-[#CCCCCC] uppercase">
                  UP TO 72 HOURS RESPOND
                </h1>
              </div>
            </div>
          </a>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
