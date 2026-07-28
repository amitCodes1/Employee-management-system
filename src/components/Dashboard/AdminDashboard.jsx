import React, { useContext } from "react";
import Header from "../Admin/Header";
import CreateTask from "../Admin/CreateTask";
import AllTask from "../Admin/AllTask";
import EmployeeList from "../Admin/EmployeeList";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ setLoggedUser }) => {
  const [employees] = useContext(AuthContext);

  const totalEmployees = employees.length;

  const totalNew = employees.reduce(
    (total, employee) => total + employee.taskNumber.newTask,
    0
  );

  const totalActive = employees.reduce(
    (total, employee) => total + employee.taskNumber.active,
    0
  );

  const totalCompleted = employees.reduce(
    (total, employee) => total + employee.taskNumber.completed,
    0
  );

  const totalFailed = employees.reduce(
    (total, employee) => total + employee.taskNumber.failed,
    0
  );

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <Header setLoggedUser={setLoggedUser} />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

          <div className="rounded-xl bg-indigo-600 p-5">
            <h2 className="text-3xl font-bold">{totalEmployees}</h2>
            <p className="mt-2">Employees</p>
          </div>

          <div className="rounded-xl bg-blue-600 p-5">
            <h2 className="text-3xl font-bold">{totalNew}</h2>
            <p className="mt-2">New Tasks</p>
          </div>

          <div className="rounded-xl bg-yellow-500 p-5">
            <h2 className="text-3xl font-bold">{totalActive}</h2>
            <p className="mt-2">Active</p>
          </div>

          <div className="rounded-xl bg-green-600 p-5">
            <h2 className="text-3xl font-bold">{totalCompleted}</h2>
            <p className="mt-2">Completed</p>
          </div>

          <div className="rounded-xl bg-red-600 p-5">
            <h2 className="text-3xl font-bold">{totalFailed}</h2>
            <p className="mt-2">Failed</p>
          </div>

        </div>

        <CreateTask />

        <AllTask />

        <EmployeeList />

      </div>
    </div>
  );
};

export default AdminDashboard;