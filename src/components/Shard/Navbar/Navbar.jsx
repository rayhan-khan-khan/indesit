import navImg from "../../../assets/icons/navbar.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { MdPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 items-center justify-between">
        <img src={navImg} alt="This is my navbar camera img" />
        <div className="flex text-gray-600 items-center ">
          <FaLocationDot className="text-blue-800" />
          <p className="flex items-center font-semibold">
            Ваш город: <span className="hover:text-blue-600 ml-2"> Алматы</span>
            <MdOutlineKeyboardArrowDown className="hover:text-blue-600"></MdOutlineKeyboardArrowDown>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <LuAlarmClock className="text-blue-800"></LuAlarmClock>
          <div>
            <p className="text-gray-700 font-serif">Время работы:</p>
            <p className="font-bold text-gray-500 mt-1">
              с 9:30 до 18:00 Пн-Пт
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-2xl text-blue-700" />
          <div>
            <p className="text-slate-500 font-sans">+7(863) 203 60 48</p>
            <p className="text-slate-500 font-sans mt-1">+7(863) 203 70 33</p>
          </div>
        </div>
        <button
          className="py-3 text-white font-semibold bg-[#0391D3] px-8 rounded-full"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  );
};

export default Navbar;
