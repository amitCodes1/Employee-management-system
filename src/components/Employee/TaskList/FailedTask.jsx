import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="min-w-[340px] rounded-2xl bg-[#dc2626] p-6 shadow-xl transition duration-300 hover:-translate-y-2">

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

      <p className="mt-3 leading-6 text-gray-100">
        {data.description}
      </p>

      <button
        disabled
        className="mt-8 w-full cursor-not-allowed rounded-lg bg-red-700 py-3 font-semibold"
      >
        ✕ Task Failed
      </button>

    </div>
  );
};

export default FailedTask;