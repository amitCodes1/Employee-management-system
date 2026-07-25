import React, { useContext } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../../context/AuthProvider";

const OwnerTaskList = ({ data, setData }) => {

  const [employees, setEmployees] = useContext(AuthContext);

  const updateTask = (index, status) => {

    const updatedTasks = data.tasks.map((task, i) => {

      if (i === index) {
        return {
          ...task,
          status
        };
      }

      return task;

    });

    const taskNumber = {
      newTask: updatedTasks.filter(task => task.status === "new").length,
      active: updatedTasks.filter(task => task.status === "active").length,
      completed: updatedTasks.filter(task => task.status === "completed").length,
      failed: updatedTasks.filter(task => task.status === "failed").length,
    };

    const updatedEmployee = {
      ...data,
      tasks: updatedTasks,
      taskNumber,
    };

    setData(updatedEmployee);

    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "emsEmployees",
      JSON.stringify(updatedEmployees)
    );

  };

  return (

    <div className="mt-10">

      <h2 className="mb-5 text-2xl font-bold text-white">
        My Tasks
      </h2>

      <div
        id="taskList"
        className="flex gap-6 overflow-x-auto pb-5"
      >

        {data.tasks.length === 0 && (

          <div className="flex h-60 w-full items-center justify-center rounded-xl bg-[#222]">

            <h2 className="text-2xl text-gray-400">
              No Tasks Assigned
            </h2>

          </div>

        )}

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

    </div>

  );
};

export default OwnerTaskList;