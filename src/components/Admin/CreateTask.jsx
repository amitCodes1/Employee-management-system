import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [employees, setEmployees] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      status: "new"
    };

    const updatedEmployees = employees.map((employee) => {

      if (employee.firstName.toLowerCase() === assignTo.toLowerCase()) {

        const updatedTasks = [...employee.tasks, newTask];

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumber: {
            newTask: updatedTasks.filter(task => task.status === "new").length,
            active: updatedTasks.filter(task => task.status === "active").length,
            completed: updatedTasks.filter(task => task.status === "completed").length,
            failed: updatedTasks.filter(task => task.status === "failed").length
          }
        };

      }

      return employee;

    });

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "emsEmployees",
      JSON.stringify(updatedEmployees)
    );

    setTitle("");
    setDescription("");
    setDate("");
    setCategory("");
    setAssignTo("");

    alert("Task Assigned Successfully");

  };

  return (
    <div className="mt-8 rounded-xl bg-[#232323] p-6">

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-2 gap-8"
      >

        <div>

          <label className="mb-2 block">
            Task Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-5 w-full rounded border border-gray-600 bg-transparent p-3 outline-none"
            required
          />

          <label className="mb-2 block">
            Assign To
          </label>

          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="mb-5 w-full rounded border border-gray-600 bg-transparent p-3 outline-none"
            required
          />

          <label className="mb-2 block">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mb-5 w-full rounded border border-gray-600 bg-transparent p-3 outline-none"
            required
          />

          <label className="mb-2 block">
            Category
          </label>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border border-gray-600 bg-transparent p-3 outline-none"
            required
          />

        </div>

        <div>

          <label className="mb-2 block">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-52 w-full rounded border border-gray-600 bg-transparent p-3 outline-none"
            required
          />

          <button
            className="mt-6 w-full rounded-lg bg-emerald-600 py-3 text-lg font-semibold transition hover:bg-emerald-700"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
};

export default CreateTask;