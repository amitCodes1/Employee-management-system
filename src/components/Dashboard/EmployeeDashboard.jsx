import React, { useState, useEffect } from "react";

import Header from "../Employee/Header";
import TaskNumber from "../Employee/TaskNumber";
import OwnerTaskList from "../Employee/TaskList/OwnerTaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  const [employeeData, setEmployeeData] = useState(data);

  useEffect(() => {
    setEmployeeData(data);
  }, [data]);

  if (!employeeData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
          Loading Employee Data...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <Header
          data={employeeData}
          changeUser={changeUser}
        />

        <div className="mt-8">
          <TaskNumber data={employeeData} />
        </div>

        <div className="mt-8">
          <OwnerTaskList
            data={employeeData}
            setData={setEmployeeData}
          />
        </div>

      </div>

    </div>
  );
};

export default EmployeeDashboard;