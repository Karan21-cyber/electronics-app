import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { IoIosArrowDown } from "react-icons/io";

interface IMobileHeader {
  showDate: boolean;
  setShowDate: () => void;
}
function MobileHeader({ showDate, setShowDate }: IMobileHeader) {
  const router = useRouter();
  return (
    <>
      <div className="absolute -bottom-4 rounded-[50%] bg-sky-blue px-5 py-[13px]">
        <Image
          src={"/home/logo.png"}
          width={18}
          height={20}
          alt="logo"
          className="object-contain cursor-pointer"
          onClick={() => router.push(`/`)}
        />
      </div>
      <header className="header-section w-full bg-black text-white font-semibold text-[11px] pl-[70px]  py-3 flex justify-between items-center">
        <h1
          className="header-dropdown  flex items-center gap-1 cursor-pointer"
          onClick={setShowDate}
        >
          <span className="week-days text-light-gray">Mon-Thu:</span> 9:00 AM -
          5:30 PM {""} <IoIosArrowDown />
        </h1>

        <Link className="header-contact-link underline" href={"#"}>
          Contact
        </Link>
      </header>
    </>
  );
}

export default MobileHeader;
