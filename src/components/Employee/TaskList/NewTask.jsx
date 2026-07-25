import React from "react";

const NewTask = ({ data, acceptTask }) => {
  return (
    <div className="min-w-[340px] rounded-2xl bg-[#2563eb] p-6 shadow-xl transition duration-300 hover:-translate-y-2">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
          {data.category}
        </span>

        <span className="text-sm text-gray-200">
          {data.date}
        </span>

      </div>

      <h2 className="mt-6 text-2xl font-bold">
        {data.title}
      </h2>

      <p className="mt-3 text-gray-100 leading-6">
        {data.description}
      </p>

      <button
        onClick={acceptTask}
        className="mt-8 w-full rounded-lg bg-white py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
      >
        Accept Task
      </button>

    </div>
  );
};

export default NewTask;