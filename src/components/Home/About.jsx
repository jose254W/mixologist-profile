import React from "react";
import { Link } from "react-router-dom";
const About = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div id="about" className="flex md:flex-row my-2 md:my-0 flex-col">
      <div className="md:w-[50%] my-8 md:m-0 w-[80%] mx-auto h-[80vh]  flex flex-col  justify-center items-center">
        <div
          className="md:m-8 m-2 md:p-12  p-4 bg-white   "
          style={{
            border: "3px solid black",
          }}
        >
          <div className="flex text-[#CCCCCC] gap-1 font-bold text-7xl">
            <p className="text-black">About</p>
            Me
          </div>
          <p className="bg-black h-1 w-24"></p>
          <p className="my-4">
            I'm a passionate mixologist with a flair for crafting unique and
            memorable cocktails. With years of experience behind the bar, I
            thrive on creating innovative drink experiences that tantalize the
            senses. From classic concoctions to bespoke creations, I'm dedicated
            to perfecting the art of mixology one cocktail at a time. Cheers to
            the art of libations!
          </p>
        </div>
      </div>
      <div className="md:w-[50%] w-[90%] mx-auto bg-[#333333] text-white text-3xl   flex flex-col justify-center items-center">
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("brands")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px]
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
            }}
          >
            brands
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("studio")}
            className="flex uppercase justify-center items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px]
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
              borderLeft: "3px solid white",
            }}
          >
            outdoor
          </Link>
        </div>
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("nature")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
          >
            indoor
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("events")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderLeft: "3px solid white",
            }}
          >
            events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
