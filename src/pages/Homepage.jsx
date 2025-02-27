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
          <div id="radial-bg" className="z-0 top-[200px] left-40"></div>
          <div id="radial-bg-2" className="z-0 top-[200px] right-40"></div>
          <div className="font-medium">
            <p className="text-gray-300">All your password.</p>
            <p className="text-gray-300/70">Always safe.</p>
            <p className="text-gray-300/60">Always accesible.</p>
          </div>
        </div>
        <div className="w-full pb-12 pt-14 flex items-center justify-center gap-2 text-7xl relative z-2">
          <span className="bg-[#0d0d0f] rotate-z-150 h-24 w-24 flex items-center justify-center rounded-xl border-gray-800 border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#32325072] hover:translate-y-[-25px] hover:rotate-z-180 transition-all duration-300">
            <FaXTwitter />
          </span>
          <span className="bg-[#0d0d0f] rotate-z-10 h-24 w-24 flex items-center justify-center rounded-xl border-[#363657] border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#43436AB1] hover:translate-y-[-25px] hover:rotate-z-0 transition-all duration-300">
            <FaGithub />
          </span>
          <span className="bg-[#2a265e] rotate-z-350 h-24 w-24 flex items-center justify-center rounded-xl border-[#524abc] border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#5656DA77] hover:translate-y-[-25px] hover:rotate-z-360 transition-all duration-300">
            <FaDiscord />
          </span>
          <span className="bg-[#323234] rotate-z-15 h-24 w-24 flex items-center justify-center rounded-xl border-[#83839e] border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#395455FF] hover:translate-y-[-25px] hover:rotate-z-0 transition-all duration-300">
            <FaApple />
          </span>
          <span className="bg-[#552e11] rotate-z-170 text-[#f6cea9] h-24 w-24 flex items-center justify-center rounded-xl border-[#d77a68] border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#5C564389] hover:translate-y-[-25px] hover:rotate-z-180 transition-all duration-300">
            <SiBinance />
          </span>
          <span className="bg-[#1F1C4BFF] rotate-z-40 h-24 w-24 flex items-center justify-center rounded-xl border-[#6881d8] border hover:cursor-pointer hover:shadow-[2px_2px_10px_2px_#2A2A57FF] hover:translate-y-[-25px] hover:rotate-z-0 transition-all duration-300">
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
