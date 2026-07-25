import React, { useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeList = () => {

  const [employees] = useContext(AuthContext);

  return (

    <div className="mt-10">

      <h2 className="mb-5 text-2xl font-bold text-white">
        Employees
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}

      </div>

    </div>

  );
};

export default EmployeeList;