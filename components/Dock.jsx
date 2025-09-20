import { GoHome } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Dock() {
  return (
    <div className="dock md:hidden">
      <Link href="/">
        <button className="flex flex-col items-center gap-y-0.5">
          <GoHome />
          <span className="dock-label">Home</span>
        </button>
      </Link>
      <Link href="#portfolio">
        <button className="flex flex-col items-center gap-y-0.5">
          <HiOutlineBriefcase />
          <span className="dock-label">Portfolio</span>
        </button>
      </Link>
      <Link href="#about">
        <button className="flex flex-col items-center gap-y-0.5">
          <AiOutlineUser />
          <span className="dock-label">About Me</span>
        </button>
      </Link>
      <Link href="#testimonial">
        <button className="flex flex-col items-center gap-y-0.5">
          <AiOutlineStar />
          <span className="dock-label">Testimonials</span>
        </button>
      </Link>
      <Link href="#contact">
        <button className="flex flex-col items-center gap-y-0.5">
          <FaRegEnvelope />
          <span className="dock-label">Contact</span>
        </button>
      </Link>
    </div>
  );
}
