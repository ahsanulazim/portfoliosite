import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered, FaEnvelope, FaRegEnvelope } from "react-icons/fa6";

export default function Navbar({ navLinks }) {
  return (
    <>
      <header className="navbar bg-white shadow-sm max-w-[1920px] mx-auto lg:px-14">
        <div className="navbar-start">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBarsStaggered />
            </label>
          </div>
          <Link href="/">
            <Image
              className="max-w-32"
              src="/Logo.svg"
              alt="LoremIpsum"
              width={186}
              height={40}
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link href="#contact" className="group">
            <button className="btn btn-outline btn-primary">
              <FaRegEnvelope className="group-hover:hidden transition duration-200" />
              <FaEnvelope className="hidden group-hover:block transition duration-200" />
              <span className="hidden xs:block">Contact Me</span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
