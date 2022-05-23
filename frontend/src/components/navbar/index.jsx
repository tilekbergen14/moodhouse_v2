import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen((open) => !open);
  };
  return (
    <nav className="z-10 navbar bg-primary text-primary-text h-20 border-b-4 border-danger">
      <div className="lg:container flex mx-auto px-2 h-full items-center justify-between">
        <a className="navbar-brand" href="/">
          MoodHouse
        </a>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 block cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={handleNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
        <div
          className={`fixed transition-all ease-in-out duration-300 top-0 left-0 hor-nav min-h-screen w-full sm:w-1/2 ${
            open ? "transform translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="items-center bg-primary w-full text-sm p-4 min-h-screen border-r-4 border-cyan">
            <div className="flex justify-between mb-4">
              <a className="navbar-brand" href="/">
                MoodHouse
              </a>
              <svg
                className="h-6 w-6 block cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={handleNavbar}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex items-center mb-4 bg-white">
              <input
                type="text"
                placeholder="Іздеу"
                className="p-2 w-full outline-none text-primary"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <form className="" action="">
              <button className="bg-blue p-2" type="submit">
                ТІРКЕЛУ
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}
