"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";

const Navbar = () => {
  const [navbarPosition, setNavbarPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavbarPosition(true);
      } else {
        setNavbarPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 left-0 w-full z-50 shadow-xl transition-transform duration-500 ease-in-out ${
        navbarPosition
          ? "fixed translate-y-0 navbar-slidein"
          : "absolute translate-y-0 navbar-slidein"
      }`}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-secondary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rentiful Logo"
                width={24}
                height={24}
                className="w-6 h-6 fill-amber-500"
              />
              <div className="text-2xl text-white font-bold">
                RENT
                <span className="text-secondary-500 pl-0.5">IFUL</span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 font-[600] hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="secondary">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
