import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

      <div className="bg-blue-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold">
          {data?.taskNumber?.newTask}
        </h1>

        <p className="mt-2 text-lg font-medium">
          New Task
        </p>
      </div>

      <div className="bg-yellow-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold">
          {data?.taskNumber?.active}
        </h1>

        <p className="mt-2 text-lg font-medium">
          Active Task
        </p>
      </div>

      <div className="bg-green-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold">
          {data?.taskNumber?.completed}
        </h1>

        <p className="mt-2 text-lg font-medium">
          Completed
        </p>
      </div>

      <div className="bg-red-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold">
          {data?.taskNumber?.failed}
        </h1>

        <p className="mt-2 text-lg font-medium">
          Failed
        </p>
      </div>

    </div>
  );
};

export default TaskNumber;