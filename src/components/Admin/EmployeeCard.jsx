import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="rounded-2xl bg-[#1f2937] p-5 shadow-lg transition hover:-translate-y-1">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold">
          {employee.firstName.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            {employee.firstName}
          </h2>

          <p className="text-sm text-gray-400">
            {employee.email}
          </p>
        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-lg bg-blue-600 p-3">
          <h3 className="text-2xl font-bold">
            {employee.taskNumber.newTask}
          </h3>
          <p>New</p>
        </div>

        <div className="rounded-lg bg-yellow-500 p-3">
          <h3 className="text-2xl font-bold">
            {employee.taskNumber.active}
          </h3>
          <p>Active</p>
        </div>

        <div className="rounded-lg bg-green-600 p-3">
          <h3 className="text-2xl font-bold">
            {employee.taskNumber.completed}
          </h3>
          <p>Completed</p>
        </div>

        <div className="rounded-lg bg-red-600 p-3">
          <h3 className="text-2xl font-bold">
            {employee.taskNumber.failed}
          </h3>
          <p>Failed</p>
        </div>

      </div>

    </div>
  );
};

export default EmployeeCard;