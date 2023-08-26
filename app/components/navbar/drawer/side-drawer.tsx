import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { Category } from "@/app/dto/dto";

interface Inavbar{
  handleClose:()=> void;
  categories:Category[];
}

function SideNavbar({handleClose,categories} : Inavbar) {
  return (
    <section className="side-navbar w-[300px] sm:w-[400px] px-4 py-3 h-screen border">
      <header className="side-navbar-header-secrion flex justify-between items-center border-b py-2">
        {" "}
        <div className="p-3">
          <Image
            src={"/home/bluelogo.png"}
            width={25}
            height={25}
            alt="logo"
            className="object-contain"
          />
        </div>
        <IoClose size={20} onClick={handleClose} />
      </header>
      <nav className="side-navbar-links py-3">
        <ul className="category-links flex flex-col gap-5 text-xs font-normal ">
          {categories?.map((category, index) => (
            <li
              key={index}
              className="link-name flex justify-between px-5 items-center capitalize"
            >
              <Link href={"#"}>{category}</Link>
              <BiChevronRight size={16} />
            </li>
          ))}
          <li className="our-deal link-name border-2 w-[165px] text-center border-sky-blue rounded-3xl ml-1 px-2  py-1 lg:px-4 lg:py-[6px]">
            <Link href={"#"}>Our Deals</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SideNavbar;
