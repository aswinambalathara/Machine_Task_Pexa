import React, { useEffect, useState } from "react";
import axios from "axios";

function PaginatedTable() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(5); //number of rows per page

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
        );
        setUsers(response.data.data); //updating users
        setTotalPages(response.data.total_pages); //updating total pages
      } catch (error) {
        alert("something went wrong");
        console.log("Error:", error);
      }
    };

    fetchUsers(); //fetching data
  }, [page, perPage]); //re-render when page or rows per page change

  return (
    <div className="w-full min-h-screen p-5 bg-linear-to-br from-sky-500 to-indigo-500 flex flex-col justify-center gap-10">
      <h1 className="text-center font-bold text-4xl text-white uppercase">
        Paginated Users Table
      </h1>

      <div className="table-container bg-slate-300 rounded-xl min-h-96 p-5 relative">
        <div className="flex items-center justify-end">
          <div className="drop-row-select flex flex-col gap-2">
            <label htmlFor="rows-select" className="font-semibold ">
              Rows per page
            </label>
            <select
              name="rows-select"
              id="rows-select"
              className="bg-zinc-600 p-1 rounded text-white"
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              {[5, 10, 20].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="w-full mt-5 text-center mb-10">
          <thead className="bg-cyan-500/30 ">
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="h-auto">
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`h-auto ${
                    (index + 1) % 2 === 0 ? "bg-cyan-500" : "bg-cyan-600"
                  }`}
                >
                  <td>{user.id}</td>
                  <td>
                    <img
                      className="rounded-full mx-auto"
                      src={user.avatar}
                      alt="Avatar"
                      width="50"
                    />
                  </td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination flex gap-2 bg-zinc-200 absolute right-5 bottom-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="cursor-pointer bg-zinc-400 p-1 rounded"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setPage(index + 1)}
              className={`${
                page === index + 1 ? "font-bold" : "font-normal"
              } cursor-pointer p-1 rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="cursor-pointer bg-zinc-400 p-1 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginatedTable;
