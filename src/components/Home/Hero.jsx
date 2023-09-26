import agbaby1 from "../images/agbaby1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="md:h-[100vh] h-[80vh]  bg-contain md:bg-center sm:bg-contain items-end "
      id="home"
      style={{
        backgroundImage: `url(${agbaby1})`,
        backgroundSize: "contain",
      }}
    >
      <div className=" items-end  flex md:h-[100vh] h-[80vh] bg-black/50 flex-col justify-center md:p-10 text-white  ">
        <div className="flex flex-col items-start">
          <div className="md:text-7xl text-5xl flex gap-2 font-bold">
            <span className="text-[#CCCCCC] ">I'm</span>
            Lushasha Mixologist
          </div>
          <div className="md:text-3xl text-xl text-center font-bold">
            Mixologist breathing life into your cocktail
          </div>
          <Link
            to="/portfolio"
            className="text-white bg-black hover:scale-105 transition duration-500 ease-in-out  px-4 py-2  text-xl mt-4  text-white cursor-pointer  transition ease-in-out duration-500   "
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
