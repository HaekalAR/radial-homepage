import { MdOutlineDoDisturbOn } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 content-stretch py-4 font-geist text-gray-300 h-[15vh]">
      <div className="bg-[#101010] flex-1 text-gray-300 font-semibold px-4 py-3 rounded-xl relative overflow-hidden">
        <div id="radial-bg-4" className="top-[-30px] left-[-35px]"></div>
        <MdOutlineDoDisturbOn className="text-5xl" />
      </div>
      <div className="bg-[#101010] grid place-content-center">
        <ul className="flex items-center gap-6 font-semibold">
          <li className="hover:cursor-pointer hover:text-white transition-all duration-200">
            Features
          </li>
          <li className="hover:cursor-pointer hover:text-white transition-all duration-200">
            FAQ
          </li>
          <li className="hover:cursor-pointer hover:text-white transition-all duration-200">
            Blog
          </li>
          <li className="hover:cursor-pointer hover:text-white transition-all duration-200">
            Contact
          </li>
        </ul>
      </div>
      <div className="grid place-content-end">
        <div className="w-fit h-fit bg-[#101010] rounded-xl my-4 relative z-2 overflow-hidden group hover:cursor-pointer">
          <div
            id="radial-bg-3"
            className="left-[-43px] group-hover:top-[-10px] top-1"
          ></div>
          <button className="bg-[#19191b] text-gray-300 font-semibold px-4 py-3 rounded-xl border-slate-800 border group-hover:border-gray-600 group-hover:border group-hover:transition-all group-hover:duration-200">
            Get early access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
