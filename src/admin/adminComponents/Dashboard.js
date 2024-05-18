import axios from "../../api/api";
import React, { useEffect, useState } from "react";
import { useGetCompanies, useGetEmployers, useGetJobSeekers, useGetJobs, useGetQuickJobs, useGetUsers } from "../../services/admin/useUsers";
// import ChartTwo from "../../components/charts/ChartTwo";

function Dashboard() {
  const [mainCount, setMainCount] = useState({});
  const [testCount, setTestCount] = useState({});
  console.log(mainCount);
  console.log(testCount);
  useEffect(() => {
    const getApi = async () => {
      await axios
        .get("/visitors/getcountmain")
        .then((res) => setMainCount(res.data))
        .catch((error) => console.log(error));

      await axios
        .get("/visitors/gettestcount")
        .then((res) => setTestCount(res.data))
        .catch((error) => console.log(error));
    };
    getApi();
  }, []);

  const users = useGetUsers();
  const jobseeker = useGetJobSeekers();
  const employer = useGetEmployers()
  const jobs = useGetJobs()
  const quickjobs = useGetQuickJobs()
  const company = useGetCompanies()

  return (
    <div className="p-4 lg:ml-64">
      <div className="rounded-lg dark:border-gray-700 mt-16">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="fill-primary dark:fill-white"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                    fill=""
                  ></path>
                  <path
                    d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                    fill=""
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {users.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                  Foydalanuvchilar
                </span>
              </div>
            </div>
          </div>
          {/* jobseeker */}
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="fill-primary dark:fill-white stroke-primary dark:stroke-white"
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {jobseeker.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                  Ish izlovchilar
                </span>
              </div>
            </div>
          </div>
          {/* employer */}
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="stroke-primary dark:stroke-white"
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
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {employer.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                  Ish beruvchilar
                </span>
              </div>
            </div>
          </div>

          {/* jobs */}
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="stroke-primary dark:stroke-white"
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
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {jobs.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                  Ishlar  
                </span>
              </div>
            </div>
          </div>

          {/* companies */}
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="stroke-primary dark:stroke-white"
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
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {company.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                  Korxonalar  
                </span>
              </div>
            </div>
          </div>

          {/* quickjobs */}
          <div className="flex items-center justify-start p-4 rounded-xl bg-gray-50  dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div class="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg
                  className="stroke-primary dark:stroke-white"
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
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 class="text-title-md font-bold text-black dark:text-white">
                  {quickjobs.data?.totalCount} ta
                </h4>
                <span class="text-sm font-medium text-black dark:text-white">
                   Tezkor ishlar  
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <ChartTwo/> */}
      </div>
    </div>
  );
}

export default Dashboard;
