import Navbar from "../components/Navbar";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { FaDropbox } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="bg-[#101010] h-screen overflow-hidden">
      <div className="mx-44">
        <Navbar />
      </div>
      <div className="mx-44 relative text-white border-gray-800 border rounded-xl p-7 mt-10 overflow-hidden">
        <div className="text-center font-poppins">
          <h1 className="text-5xl font-bold text-gray-300 py-4">
            Secure Your World.
          </h1>
          <div id="radial-bg" className="z-0 left-40"></div>
          <div id="radial-bg-2" className="z-0 right-40"></div>
          <div className="font-medium">
            <p className="text-gray-300">All your password.</p>
            <p className="text-gray-300/70">Always safe.</p>
            <p className="text-gray-300/60">Always accesible.</p>
          </div>
        </div>
        <div className="w-full pb-12 pt-14 flex items-center justify-center gap-2 text-7xl relative z-2">
          <span className="bg-[#0d0d0f] rotate-z-150 h-24 w-24 flex items-center justify-center rounded-xl border-gray-800 border">
            <FaXTwitter />
          </span>
          <span className="bg-[#0d0d0f] rotate-z-10 h-24 w-24 flex items-center justify-center rounded-xl border-[#363657] border">
            <FaGithub />
          </span>
          <span className="bg-[#1F1C4BFF] rotate-z-350 h-24 w-24 flex items-center justify-center rounded-xl border-[#524abc] border">
            <FaDiscord />
          </span>
          <span className="bg-[#323234] rotate-z-15 h-24 w-24 flex items-center justify-center rounded-xl border-[#83839e] border">
            <FaApple />
          </span>
          <span className="bg-[#552e11] rotate-z-170 text-[#f6cea9] h-24 w-24 flex items-center justify-center rounded-xl border-[#d77a68] border">
            <SiBinance />
          </span>
          <span className="bg-[#1F1C4BFF] rotate-z-40 h-24 w-24 flex items-center justify-center rounded-xl border-[#6881d8] border">
            <FaDropbox />
          </span>
        </div>
        <div className="w-fit h-fit bg-[#2a2738] rounded-xl flex items-center justify-center my-4 relative z-2 ml-auto mr-auto overflow-hidden group hover:cursor-pointer">
          <div
            id="radial-bg-3"
            className="z-0 top-1 group-hover:top-[-10px]"
          ></div>
          <button className="bg-transparent text-gray-300 font-semibold px-4 py-3 rounded-xl border-gray-700 border group-hover:border-gray-500 group-hover:border group-hover:transition-all group-hover:duration-200">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
