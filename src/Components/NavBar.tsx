"use client";

import Link from "next/link";
import React from "react";

type NavbarProps = {
  scrollToHome?: () => void;
  scrollToFeatures?: () => void;
  scrollToHowItWorks?: () => void;
};

const NavBar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Branding/Logo */}
        <div className="text-xl font-bold">Travel Scheduler</div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 justify-center items-center gap-2">
          <li>
            <Link
              href="/"
              className="hover:underline font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/trip-planning"
              className="hover:underline font-medium"
            >
              Trip Planning
            </Link>
          </li>
        </ul>

        {/* Right: Placeholder or additional options */}
        <div>
          <Link
            href="/contact"
            className="hover:underline font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
      
    </nav>
  );
};

export default NavBar;
