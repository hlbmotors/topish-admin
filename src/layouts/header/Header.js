import React, { useState } from "react";
import { Burger, RuFlag, UzbFlag } from "../../components/icon";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const style = {
    active:
      "block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0",
    inactive:
      "block py-2 px-3 lg:p-0 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700",
  };

  return (
    <nav className="bg-white z-9 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Topish
          </span>
        </a>
        <div className="flex items-center gap-3 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse ">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <UzbFlag />
            O'zbekcha
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <UzbFlag />
                    O'zbekcha
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <RuFlag />
                    Русский
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden items-center lg:flex gap-3">
            <button
              type="button"
              class="text-blue-700  border border-blue-700  font-medium rounded-lg text-sm px-3 py-1  ms-2"
            >
              Ro'yxatdan o'tish
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-3 py-1  ms-2"
            >
              Kirish
            </button>
          </div>

          <button
            class="flex lg:hidden ms-2 cursor-pointer"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <Burger />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Bosh sahifa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Biz haqimizda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Bo'sh ish o'rinlari
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Kompaniyalar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="drawer-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Topish
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <ul className="flex flex-col gap-3 font-medium p-4 lg:p-0 mt-4   rtl:space-x-reverse lg:flex-row lg:mt-0 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inactive}`
              }
              aria-current="page"
            >
              Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inactive}`
              }
            >
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inactive}`
              }
            >
              Bo'sh ish o'rinlari
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/companies"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inactive}`
              }
            >
              Kompaniyalar
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center lg:hidden gap-3 mt-4">
          <button
            type="button"
            class="text-blue-700  border border-blue-700  font-medium rounded-lg text-sm px-3 py-1  ms-2"
          >
            Ro'yxatdan o'tish
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 font-medium rounded-lg text-sm px-3 py-1  ms-2"
          >
            Kirish
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
