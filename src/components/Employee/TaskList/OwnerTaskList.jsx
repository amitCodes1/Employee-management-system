import React, { useContext } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import { AuthContext } from "../../../context/AuthProvider";

const OwnerTaskList = ({ data, setData }) => {
  const [employees, setEmployees] = useContext(AuthContext);

  // Prevent app crash
  if (!data || !data.tasks) {
    return (
      <div className="mt-10 text-center text-gray-400">
        No Tasks Available
      </div>
    );
  }

  const updateTask = (index, status) => {
    const updatedTasks = data.tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: status,
        };
      }
      return task;
    });

    const updatedUser = {
      ...data,
      tasks: updatedTasks,
    };

    setData(updatedUser);

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === data.id) {
        return updatedUser;
      }
      return employee;
    });

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "emsEmployees",
      JSON.stringify(updatedEmployees)
    );
  };

  return (
    <div className="mt-10 flex gap-5 overflow-x-auto pb-5">
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

        return null;
      })}
    </div>
  );
};

export default OwnerTaskList;