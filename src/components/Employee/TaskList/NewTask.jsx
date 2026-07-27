import React from "react";

const NewTask = ({ data, acceptTask }) => {
  return (
    <div className="w-full rounded-2xl bg-blue-600 p-6 shadow-xl hover:shadow-2xl transition duration-300">

      <div className="flex items-center justify-between flex-wrap gap-2">

        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {data.category}
        </span>

        <span className="text-sm text-white/80">
          {data.date}
        </span>

      </div>

      <h2 className="mt-5 text-2xl font-bold break-words">
        {data.title}
      </h2>

      <p className="mt-3 text-white/90 leading-7 break-words">
        {data.description}
      </p>

      <button
        onClick={acceptTask}
        className="mt-8 w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition"
      >
        Accept Task
      </button>

    </div>
  );
};

export default NewTask;