import React, { useEffect, useState } from "react";
import {
  useBlockUser,
  useGetUsers,
  useUnblockUser,
} from "../../services/admin/useUsers";
import { useQueryClient } from "@tanstack/react-query"; // queryClient bilan ishlash uchun

const TableSampleClients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const { data, isLoading } = useGetUsers(currentPage, 10);
  const blockUserMutation = useBlockUser();
  const unblockUserMutation = useUnblockUser();

  const paginationSetting = data?.pagination;
  const totalPages = paginationSetting?.totalPages;
  const totalDocuments = paginationSetting?.totalDocuments;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * limit;
  const queryClient = useQueryClient(); // queryClient ni olish
  const reloadUsers = () => {
    queryClient.invalidateQueries(["users-get", currentPage]);
  };

  useEffect(() => {
    setLimit(paginationSetting?.limit);
    reloadUsers();
  }, [currentPage]);

  // Blocked user
  const handleToggleBlockUser = (userId, isBlocked) => {
    if (isBlocked) {
      unblockUserMutation.mutate(userId);
    } else {
      blockUserMutation.mutate(userId);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data?.data?.filter((item) =>
    item.jobSeeker?.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-3 sm:p-5">
      <div className="mx-auto px-2 lg:px-2">
        <h3 className="text-white dark:text-gray-800 mb-3 text-2xl font-bold">
          Users
        </h3>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                  />
                </div>
              </form>
            </div>
            
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length
                  ? filteredData.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.jobSeeker?.fullName}
                        </th>
                        <td className="px-4 py-3">
                          {" "}
                          {item?.jobSeeker?.gender}
                        </td>
                        <td className="px-4 py-3">{item?.phoneNumber}</td>
                        <td className="px-4 py-3 flex items-center justify-end">
                          <button
                            onClick={() =>
                              handleToggleBlockUser(item._id, item.blocked)
                            }
                            id={item.id}
                            data-dropdown-toggle="apple-imac-27-dropdown"
                            className={`${
                              item?.blocked
                                ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 me-2 mb-2 "
                                : "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 me-2 mb-2 "
                            }`}
                            type="button"
                          >
                            {item?.blocked ? "Unblocked" : "Blocked"}
                          </button>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm flex gap-1 font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                {startIndex + 1}-{Math.min(startIndex + limit, totalDocuments)}
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                {totalDocuments}
              </span>
            </span>
            <div className="pagination">
              <p></p>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    onClick={() => handleClick(currentPage - 1)}
                    className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === 1 && "cursor-not-allowed opacity-50"
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {[...Array(totalPages).keys()].map((pageNumber) => (
                  <li key={pageNumber + 1}>
                    <a
                      href="#"
                      onClick={() => handleClick(pageNumber + 1)}
                      className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
                        currentPage === pageNumber + 1
                          ? "text-primary-600 bg-primary-50 border border-primary-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      {pageNumber + 1}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={() => handleClick(currentPage + 1)}
                    className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === totalPages &&
                      "cursor-not-allowed opacity-50"
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default TableSampleClients;
