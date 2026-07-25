import React, { useState } from "react";
import Header from "./Header";
import TaskNumber from "./TaskNumber";
import OwnerTaskList from "./TaskList/OwnerTaskList";

const EmployeeDashboard = ({ data, changeUser }) => {

  const [employeeData, setEmployeeData] = useState(data);

  return (
    <div className="min-h-screen bg-[#111827] p-8 text-white">

      <Header
        data={employeeData}
        changeUser={changeUser}
      />

      <TaskNumber data={employeeData} />

      <OwnerTaskList
        data={employeeData}
        setData={setEmployeeData}
      />

    </div>
  );
};

export default EmployeeDashboard;