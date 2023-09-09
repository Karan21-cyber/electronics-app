import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

interface IMobileHeader {
  showDate: boolean;
  setShowDate: () => void;
}

function DesktopHeader({ showDate, setShowDate }: IMobileHeader) {
  return (
    <header className="header-section w-full bg-black text-white font-semibold text-[11px] lg:px-[5%]  py-3 flex justify-between items-center">
      <h1
        className="header-dropdown  flex items-center gap-1 cursor-pointer"
        onClick={setShowDate}
      >
        <span className="week-days text-light-gray">Mon-Thu:</span> 9:00 AM -
        5:30 PM {""} <IoIosArrowDown />
      </h1>

      <h1 className="contact-container text-light-gray">
        Visit our showroom in 1234 Street Adress City Address, 1234{" "}
        <Link
          className="header-contact-link underline pl-1 text-white"
          href={"#"}
        >
          Contact
        </Link>
      </h1>
      <div className="social-information flex gap-[14px] items-center">
        <h1 className="header-phone-number cursor-pointer">
          Call Us: (00) 1234 5678
        </h1>
        <div className="social-icons flex gap-2 items-center">
          <AiFillFacebook size={20} className="cursor-pointer" />
          <AiFillInstagram size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
