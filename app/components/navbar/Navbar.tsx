"use client";
import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="fixed w-full bg-custom-brown z-20 shadow-sm">
      <div>
        <Container>
          <header className="sticky top-0 z-30 w-full px-16 bg-custom-brown">
            <nav className=" text-uppercase flex flex-col  md:flex-row py-7 border-b-2 border-custom-gray items-center justify-between text-slate-50">
              <div className="flex justify-between w-full md:w-fit">
                <Link href="/" className=" flex items-center gap-2 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-custom-orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                  </svg>
                  Paradise
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div
                className={`w-full  md:block ${navbar ? "block" : "hidden"}`}
              >
                <ul
                  className={`flex gap-3  flex-col justify-center items-center md:flex-row`}
                >
                  <li className=" md:ml-auto">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/rooms">Rooms</Link>
                  </li>
                  {/* <li className="">
                    <Link href="/facilities">Facilities</Link>
                  </li>
                  <li className="">
                    <Link href="/about">About</Link>
                  </li> */}
                  <UserMenu currentUser={currentUser} />
                </ul>
              </div>
            </nav>
          </header>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
