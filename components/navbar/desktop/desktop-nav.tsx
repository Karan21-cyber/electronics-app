"use client";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Category } from "@/dto/data-type";

function DesktopNav({ categories }: { categories: Category[] }) {
  const router = useRouter();

  return (
    <nav className="navbar-container md:px-3 lg:px-[5%] py-3 flex justify-between items-center border-b">
      <div className="lg:px-5 lg:py-[13px]">
        <Image
          src={"/home/bluelogo.png"}
          width={25}
          height={25}
          alt="logo"
          className="object-contain cursor-pointer"
          onClick={() => router.push(`/`)}
        />
      </div>
      <ul className="category-links flex md:text-[11px] lg:text-sm font-semibold text-center items-center">
        {categories.map((category: Category, index: number) => (
          <li
            key={index}
            className="link-name hover:text-white hover:bg-sky-blue hover:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 capitalize"
          >
            <Link href={`/products/${category}`}>{category}</Link>
          </li>
        ))}
        <li className="our-deal link-name border-2 border-sky-blue rounded-3xl ml-1 px-2 py-1 lg:px-4 lg:py-[6px]">
          <Link href={"#"}>Our Deals</Link>
        </li>
      </ul>

      <div className="flex items-center gap-2 lg:gap-6 ">
        <FiSearch size={17} className="search-icon cursor-pointer" />
        <div className="cart-container relative cursor-pointer">
          <FiShoppingCart
            size={20}
            className="cart-icon transform scale-x-[-1] "
          />
          <p className="number -top-3 -right-1 absolute w-[17px] h-[17px] pt-[1px] text-center text-[10px] font-bold rounded-[50%] bg-sky-blue text-white">
            12
          </p>
        </div>
        <Image
          src={"/home/profile.png"}
          width={36}
          height={36}
          alt="profile"
          className="object-contain rounded-[50%] cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default DesktopNav;
