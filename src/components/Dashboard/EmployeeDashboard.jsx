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
      <div className="min-h-screen bg-[#111827] flex items-center justify-center text-white text-3xl">
        Loading employee data...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#111827] p-8 text-white">

      <Header
        data={employeeData}
        changeUser={changeUser}
      />

      <TaskNumber
        data={employeeData}
      />

      <OwnerTaskList
        data={employeeData}
        setData={setEmployeeData}
      />

    </div>
  );
};


export default EmployeeDashboard;