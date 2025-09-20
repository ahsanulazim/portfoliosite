import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer({ navLinks }) {
    return (
        <div className="bg-shade">
            <div className="max-w-[1920px] mx-auto  px-4 lg:px-14">
                <footer className="navbar py-8 lg:py-14 px-0">
                    <div className="navbar-start">
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
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:bg-transparent hover:text-main focus-within:bg-transparent focus-within:text-main"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-5">
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaXTwitter /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                    </div>
                </footer>
                <div className="divider"></div>
                <footer className="footer sm:footer-horizontal justify-center justify-items-center gap-y-5 sm:justify-between items-center pb-24 md:pb-14 lg:pb-28 lg:pt-10">
                    <aside className="grid-flow-col items-center">
                        <h6>Made with 💖 By Ahsanul Azim Plabon</h6>
                    </aside>
                    <nav className="grid grid-flow-col gap-4">
                        <Link href="#" className="link link-hover">Privacy Policy</Link>
                        <Link href="#" className="link link-hover">Terms of Service</Link>
                    </nav>
                </footer>
            </div>
        </div>
    )
}
