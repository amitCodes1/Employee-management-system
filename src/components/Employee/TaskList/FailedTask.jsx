import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="w-full rounded-2xl bg-red-600 p-6 shadow-xl hover:shadow-2xl transition duration-300">

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

      <p className="mt-3 leading-7 text-white/90 break-words">
        {data.description}
      </p>

      <button
        disabled
        className="mt-8 w-full rounded-xl bg-red-800 py-3 text-white font-semibold cursor-not-allowed"
      >
        ❌ Task Failed
      </button>

    </div>
  );
};

export default FailedTask;