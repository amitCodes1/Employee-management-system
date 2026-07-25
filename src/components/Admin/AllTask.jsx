import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const [employees] = useContext(AuthContext);
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.firstName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees, search]);

  return (
    <div className="mt-8 rounded-xl bg-[#232323] p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Employee Task Report
        </h2>

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 rounded-lg border border-gray-600 bg-[#1a1a1a] px-4 py-2 text-white outline-none focus:border-emerald-500"
        />

      </div>

      <div className="overflow-x-auto rounded-lg">

        <table className="w-full">

          <thead>

            <tr className="bg-emerald-600 text-left">

              <th className="px-5 py-3">Employee</th>
              <th className="px-5 py-3">New</th>
              <th className="px-5 py-3">Active</th>
              <th className="px-5 py-3">Completed</th>
              <th className="px-5 py-3">Failed</th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((employee) => (

              <tr
                key={employee.id}
                className="border-b border-gray-700 hover:bg-[#2d2d2d] transition"
              >

                <td className="px-5 py-4">
                  {employee.firstName}
                </td>

                <td className="px-5 py-4 text-blue-400">
                  {employee.taskNumber.newTask}
                </td>

                <td className="px-5 py-4 text-yellow-400">
                  {employee.taskNumber.active}
                </td>

                <td className="px-5 py-4 text-green-400">
                  {employee.taskNumber.completed}
                </td>

                <td className="px-5 py-4 text-red-400">
                  {employee.taskNumber.failed}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AllTask;