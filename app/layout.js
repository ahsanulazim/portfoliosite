import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Dock from "@/components/Dock";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loremipsum",
  description: "Portfolio Website Practice Project",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="hover:bg-transparent hover:text-main focus-within:bg-transparent focus-within:text-main"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:bg-transparent hover:text-main focus-within:bg-transparent focus-within:text-main"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="hover:bg-transparent hover:text-main focus-within:bg-transparent focus-within:text-main"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="hover:bg-transparent hover:text-main focus-within:bg-transparent focus-within:text-main"
        >
          Testimonials
        </Link>
      </li>
    </>
  );

  return (
    <html lang="en">
      <body className={` ${robotoSans.variable} antialiased`}>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <Navbar navLinks={navLinks} />
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-72 p-4">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        <Dock />
      </body>
    </html>
  );
}
