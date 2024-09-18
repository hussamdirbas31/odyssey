'use client';

import { useState } from 'react';
import { Toggle } from '@geist-ui/core';
import Link from 'next/link';
import Search from './Search';
import Button from '../Button/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, link: "Markets", soon: true },
    { id: 2, link: "Spot", soon: false },
    { id: 3, link: "Launchpad", soon: false },
  ];

  return (
    <nav className="sticky top-0 bg-black px-12  py-2 flex justify-between space-x-12  z-40 items-center w-full">
      <div className="flex items-center space-x-10 flex-1">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#01CEDB] to-[#BE55F4] inline-block text-transparent bg-clip-text">
          ODYSSEY
        </h1>
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.id} className="text-white">
              {link.link}
              {link.soon && (
                <sup className="ml-1 bg-gradient-to-r from-[#01CEDB] to-[#BE55F4] rounded-2xl px-1">
                  SOON
                </sup>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex flex-1 relative right-40 items-center justify-center space-x-4">
        <div className="flex items-center text-[#EDEDED] space-x-2">
          <h2>DEGEN MODE</h2>
          <div className="flex items-center relative bottom-1">
            <Toggle checked={false} />
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-center space-x-4">
        <Search />

        <div className="flex md:hidden items-center justify-center space-x-4 flex-1">
        
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <li key={link.id} className="text-white">
                <Link href={`/${link.link.toLowerCase()}`}>
                  {link.link}
                </Link>
                {link.soon && (
                  <sup className="ml-1 bg-gradient-to-r from-[#01CEDB] to-[#BE55F4] rounded-2xl px-1">
                    SOON
                  </sup>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-2 py-2">
            <Button className="bg-neutral-950 text-white rounded-md p-2">LOG IN</Button>
            <Button className="border rounded text-white">SIGN UP</Button>
            <div className="flex items-center text-[#EDEDED] space-x-2">
              <h2>DEGEN MODE</h2>
              <div className="flex items-center relative bottom-1">
                <Toggle checked={false} />
              </div>
            </div>
          </div>
        </div>
      )}

        <Button className="bg-neutral-950 text-white rounded-md hidden md:flex p-2">LOG IN</Button>
        
        <Button className="border rounded text-white">SIGN UP</Button>
      </div>
    </nav>
  );
};

export default Navbar;