"use client";

import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Banner from "../common/Banner";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface IHeaderProps {}

const Header: React.FC = () => {
  const { toggleSidebar, isSidebarOpened } = useContext(AppContext);

  return (
    <>
      <Banner />
      <header className="bg-white py-4 px-6 flex justify-between items-center sticky top-0 z-10 h-16" id="header">
        <div className="flex justify-between items-center">
          {isSidebarOpened && (
            <h1 className="text-white text-2xl font-bold mr-4" id="title">
              Dashboard
            </h1>
          )}
          <button className="text-black focus:outline-none focus:text-gray" onClick={toggleSidebar}>
            {isSidebarOpened ? (
              <XMarkIcon className="h-6 w-6 text-black focus:text-gray" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black focus:text-gray" />
            )}
          </button>
        </div>
        <div>
          {/* <button className="text-black focus:outline-none focus:text-gray" onClick={toggleSidebar}>
            {isSidebarOpened ? (
              <XMarkIcon className="h-6 w-6 text-black focus:text-gray" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black focus:text-gray" />
            )}
          </button> */}
          <div className="flex items-center justify-between">
            <UserCircleIcon />
            <div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
