import React from "react";
import heroBg from "../../../assets/img/hero-bg.svg";
import heroVector from "../../../assets/img/hero-vector.png";
import heroPerson from "../../../assets/img/hero-person.png";
export const HeroBanner = () => {
  return (
    <div className="" style={{ backgroundImage:`url(${heroBg})`, backgroundRepeat:"no-repeat", backgroundPosition: "right top"}}>
      <div className="max-w-screen-xl py-10 overflow-hidden  flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full flex justify-between items-center">
          <div className="w-8/12 max-w-125">
            <h1 className="text-5xl font-semibold leading-[110%] tracking-[0%] text-left">
              <span className="text-hero-title">5000</span> dan ortiq ish
              o'rinlarini kashf eting
            </h1>
            <img
              className="w-full max-h-115 py-8"
              src={heroVector}
              alt="name"
            />
           
            <div className="bg-white absolute w-full max-w-180 p-0 rounded-lg shadow-md flex items-center space-x-2">
              <div className="flex items-center  rounded-md px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>

                <input
                  type="text"
                  placeholder="Ish nomi yoki kalit so'z"
                  className="outline-none focus:outline-none border-none  ml-2 w-full text-gray-700"
                />
              </div>
              <div className="flex items-center rounded-md gap-2 px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full max-w-45 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md"
              >
                Izlash
              </button>
            </div>
          </div>
          <img className="w-4/12 max-w-125" src={heroPerson} alt="name" />
        </div>
      </div>

      {/* <img className="absolute top-12 right-0 z-[-1]" src={heroBg} alt="name" /> */}
    </div>
  );
};
