import React, { useContext } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../../context/AuthProvider";

const OwnerTaskList = ({ data, setData }) => {
  const [employees, setEmployees] = useContext(AuthContext);

  if (!data || !data.tasks) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-xl bg-slate-800 py-12">
        <h2 className="text-xl text-gray-400">
          No Tasks Available
        </h2>
      </div>
    );
  }

  const updateTask = (index, status) => {
    const updatedTasks = data.tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status,
        };
      }

      return task;
    });

    const updatedEmployee = {
      ...data,
      tasks: updatedTasks,
    };

    setData(updatedEmployee);

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === data.id) {
        return updatedEmployee;
      }

      return employee;
    });

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "emsemployees",
      JSON.stringify(updatedEmployees)
    );
  };

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

      {data.tasks.map((task, index) => {

        if (task.status === "new") {
          return (
            <NewTask
              key={index}
              data={task}
              acceptTask={() => updateTask(index, "active")}
            />
          );
        }

        if (task.status === "active") {
          return (
            <AcceptTask
              key={index}
              data={task}
              completeTask={() => updateTask(index, "completed")}
              failTask={() => updateTask(index, "failed")}
            />
          );
        }

        if (task.status === "completed") {
          return (
            <CompleteTask
              key={index}
              data={task}
            />
          );
        }

        if (task.status === "failed") {
          return (
            <FailedTask
              key={index}
              data={task}
            />
          );
        }

        return null;
      })}

    </div>
  );
};

export default OwnerTaskList;