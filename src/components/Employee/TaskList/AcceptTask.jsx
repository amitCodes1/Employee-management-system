import React from "react";

const AcceptTask = ({ data, completeTask, failTask }) => {
  return (
    <div className="w-full rounded-2xl bg-yellow-500 p-6 shadow-xl hover:shadow-2xl transition duration-300">

      <div className="flex items-center justify-between flex-wrap gap-2">

        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {data.category}
        </span>

        <span className="text-sm text-white">
          {data.date}
        </span>

      </div>

      <h2 className="mt-5 text-2xl font-bold break-words">
        {data.title}
      </h2>

      <p className="mt-3 leading-7 break-words">
        {data.description}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">

        <button
          onClick={completeTask}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Mark as Completed
        </button>

        <button
          onClick={failTask}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Mark as Failed
        </button>

      </div>

    </div>
  );
};

export default AcceptTask;