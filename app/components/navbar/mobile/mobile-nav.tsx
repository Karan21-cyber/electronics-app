"use client";
import React,{useState} from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Drawer from "@mui/material/Drawer";
import SideNavbar from "../drawer/side-drawer";
import { Category } from "@/app/dto/dto";

function MobileNav({categories}:{categories:Category[]}) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <nav className="navbar-container  px-3 py-[13px] flex justify-between items-center bg-sky-blue gap-2 text-white">
        <IoMenu size={20} onClick={() => setOpen(true)} />
        <div className="search-container z-[1] w-[75%] text-[11px] font-normal flex gap-2 items-center bg-white rounded-3xl p-2">
          <FiSearch size={14} className="search-icon text-light-gray" />
          <input
            type="text"
            placeholder="search here..."
            className="outline-none w-full text-light-gray "
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="cart-container relative">
            <FiShoppingCart
              size={20}
              className="cart-icon transform scale-x-[-1]"
            />
            <p className="number -top-3 -right-1 absolute w-[17px] h-[17px] pt-[1px] text-center text-[10px] font-bold rounded-[50%] text-sky-blue bg-white">
              12
            </p>
          </div>
          <div className="avtar Icon p-1 border-2 rounded-[50%]">
            <IoMdPerson size={12} />
          </div>
        </div>
      </nav>
      <Drawer
        open={open}
        onClose={handleClose}
      >
        <SideNavbar handleClose={handleClose} categories={categories}/>
      </Drawer>
    </div>
  );
}

export default MobileNav;
