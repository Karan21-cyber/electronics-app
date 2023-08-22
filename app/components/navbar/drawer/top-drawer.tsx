import React from "react";
import { FiClock } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

function Drawer() {
  return (
    <div className="drawer-comonent flex flex-col items-center py-4 gap-3 text-[13px]">
      <div className="open-date-information w-[231px] flex gap-3">
        <FiClock size={22} />{" "}
        <div className="date-information font-semibold flex flex-col gap-[6px] ">
          <h3 className="opening-title text-xs font-normal ">We are open:</h3>
          <div className="week-opening flex flex-col gap-2">
            <h2>
              <span className="day-style text-light-gray">Mon-Thu: </span>9:00
              AM - 5:30 PM
            </h2>
            <h2>
              <span className="day-style text-light-gray">Fri: </span>9:00 AM -
              6:00 PM
            </h2>
            <h2>
              <span className="day-style text-light-gray">Sat: </span>11:00 AM -
              5:00 PM
            </h2>
          </div>
        </div>{" "}
      </div>
      <div className="address-information w-[231px] flex gap-3 font-normal">
        <MdOutlineLocationOn size={25} />{" "}
        <div className="date-information">
          <h1>Address : 1234 Street Address, City Address , 1234</h1>
        </div>{" "}
      </div>

      <div className="contact-information w-[231px] font-normal">
        <h1>
          Phones: <span className="text-sky-blue ">(00) 1234 5789</span>
        </h1>
        <h1>
          E-mail: <span className="text-sky-blue ">shop@gmail.com</span>
        </h1>
      </div>
    </div>
  );
}

export default Drawer;
