import React from "react";

const AcceptTask = ({ data, completeTask, failTask }) => {
  return (
    <div className="min-w-[340px] rounded-2xl bg-[#f59e0b] p-6 shadow-xl transition duration-300 hover:-translate-y-2">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
          {data.category}
        </span>

        <span className="text-sm">
          {data.date}
        </span>

      </div>

      <h2 className="mt-6 text-2xl font-bold">
        {data.title}
      </h2>

      <p className="mt-3 leading-6">
        {data.description}
      </p>

      <div className="mt-8 flex gap-3">

        <button
          onClick={completeTask}
          className="flex-1 rounded-lg bg-green-600 py-3 font-semibold transition hover:bg-green-700"
        >
          Complete
        </button>

        <button
          onClick={failTask}
          className="flex-1 rounded-lg bg-red-600 py-3 font-semibold transition hover:bg-red-700"
        >
          Failed
        </button>

      </div>

    </div>
  );
};

export default AcceptTask;