import React from "react";

export const Category = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-row gap-7 justify-center px-[5%] py-25">
        <a
          className="items-center bg-slate-100 rounded-md flex gap-5 max-w-[230px] p-5 w-full"
          href="/vacancies"
        >
          <div className="text-2xl [aspect-ratio:1_/_1] bg-blue-200 rounded-[5px] text-blue-800 p-3">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z" />
            </svg>
          </div>
          <div className="inter">
            <h1 className="text-[#18191c] text-[24px] font-normal">2</h1>
            <p className="text-[#767f8c] text-[15px]">Bo'sh ish o'rinlari</p>
          </div>
        </a>
        <a
          className="items-center bg-slate-100 rounded-md flex gap-5 max-w-[230px] p-5 w-full"
          href="/vacancies"
        >
          <div className="text-2xl [aspect-ratio:1_/_1] bg-blue-200 rounded-[5px] text-blue-800 p-3">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
              <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
            </svg>
          </div>
          <div className="inter">
            <h1 className="text-[#18191c] text-[24px] font-normal">2</h1>
            <p className="text-[#767f8c] text-[15px]">Tashkilotlar</p>
          </div>
        </a>
        <a
          className="items-center bg-slate-100 rounded-md flex gap-5 max-w-[230px] p-5 w-full"
          href="/vacancies"
        >
          <div className="text-2xl [aspect-ratio:1_/_1] bg-blue-200 rounded-[5px] text-blue-800 p-3">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
            </svg>
          </div>
          <div className="inter">
            <h1 className="text-[#18191c] text-[24px] font-normal">2</h1>
            <p className="text-[#767f8c] text-[15px]">Nomzodlar</p>
          </div>
        </a>

        <a
          className="items-center bg-slate-100 rounded-md flex gap-5 max-w-[230px] p-5 w-full"
          href="/vacancies"
        >
          <div className="text-2xl [aspect-ratio:1_/_1] bg-blue-200 rounded-[5px] text-blue-800 p-3">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z" />
            </svg>
          </div>
          <div className="inter">
            <h1 className="text-[#18191c] text-[24px] font-normal">2</h1>
            <p className="text-[#767f8c] text-[15px]">Barcha ish joylari</p>
          </div>
        </a>
      </div>
    </div>
  );
};
