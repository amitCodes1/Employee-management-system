import React from "react";
import {
  ClipboardList,
  Clock3,
  CircleCheckBig,
  CircleX
} from "lucide-react";


const TaskNumber = ({ data }) => {

  const cards = [
    {
      title: "New Tasks",
      value: data.taskNumber.newTask,
      icon: <ClipboardList size={30} />,
      color: "bg-blue-600"
    },
    {
      title: "Active Tasks",
      value: data.taskNumber.active,
      icon: <Clock3 size={30} />,
      color: "bg-yellow-500"
    },
    {
      title: "Completed",
      value: data.taskNumber.completed,
      icon: <CircleCheckBig size={30} />,
      color: "bg-green-600"
    },
    {
      title: "Failed",
      value: data.taskNumber.failed,
      icon: <CircleX size={30} />,
      color: "bg-red-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">

      {cards.map((card, index) => (

        <div
          key={index}
          className={`${card.color} rounded-2xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-bold">
                {card.value}
              </h2>

              <p className="mt-2 text-lg font-medium">
                {card.title}
              </p>

            </div>

            <div className="rounded-full bg-white/20 p-3">
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default TaskNumber;