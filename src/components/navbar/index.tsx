import Image from "next/image";

import { redirect } from "next/navigation";
const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-white">
      <div className="flex logo">
        <Image
          src="https://www.shutterstock.com/image-vector/natural-coffee-aroma-logo-beans-600nw-2650987891.jpg"
          alt="Next.js logo"
          width={80}
          height={20}
          priority
        />
      </div>
      <div className="flex flex-row  text-black items-center">
        <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out">
          Home
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out">
          Products
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out">
          Profile
        </div>
        <div
          onClick={() => redirect("/news")}
          className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out"
        >
          <a href="/news">News</a>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out">
          <a href="/news/users">Users</a>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-7 transition duration-150 ease-in-out">
          <a href="/promo">Promo</a>
        </div>
      </div>
      <div className="flex icon">
        <span className="hover:underline font-bold">
          <a href="/user/register">Register</a>
        </span>
      </div>
    </div>
  );
};
export default NavBar;
