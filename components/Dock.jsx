import { GoHome } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";

export default function Dock() {
  return (
    <div className="dock md:hidden">
      <Link href="/">
        <button className="flex flex-col items-center gap-y-0.5">
          <GoHome />
          <span className="dock-label">Home</span>
        </button>
      </Link>
      <Link href="#">
        <button className="flex flex-col items-center gap-y-0.5">
          <HiOutlineBriefcase />
          <span className="dock-label">Portfolio</span>
        </button>
      </Link>
      <Link href="#">
        <button className="flex flex-col items-center gap-y-0.5">
          <FaRegUser />
          <span className="dock-label">About Me</span>
        </button>
      </Link>
      <Link href="#">
        <button className="flex flex-col items-center gap-y-0.5">
          <FaRegStar />
          <span className="dock-label">Testimonials</span>
        </button>
      </Link>
    </div>
  );
}
