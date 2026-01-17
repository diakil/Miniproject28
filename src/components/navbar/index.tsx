import Image from "next/image";
const NavBar =() => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex logo">
        <Image
          className="dark:invert"
          src="https://i.pinimg.com/1200x/35/ab/58/35ab583eef4e16e182a27c71bde215aa.jpg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>
      <div className="flex felx-row text-black items-center">
      <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-5 transition duration-150 ease-in-out">Home</div>
      <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-5 transition duration-150 ease-in-out">Products</div>
      <div className="cursor-pointer hover:bg-black hover:text-white h-full content-center px-5 transition duration-150 ease-in-out">Profile</div>
    </div>
    <div className="flex icon"></div>
    </div>
  );
};
export default NavBar;