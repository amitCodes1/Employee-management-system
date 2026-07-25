const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@gmail.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Create Login Page",
        description: "Design login page using React and Tailwind CSS",
        date: "2026-07-25",
        category: "Development",
        status: "new",
      },
    ],
  },

  {
    id: 2,
    firstName: "Amit",
    email: "amit@gmail.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Dashboard UI",
        description: "Create employee dashboard design",
        date: "2026-07-26",
        category: "Design",
        status: "new",
      },
    ],
  },

  {
    id: 3,
    firstName: "Vikas",
    email: "vikas@gmail.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "API Integration",
        description: "Connect frontend with backend API",
        date: "2026-07-27",
        category: "Backend",
        status: "new",
      },
    ],
  },

  {
    id: 4,
    firstName: "Sandeep",
    email: "sandeep@gmail.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Fix Responsive Issue",
        description: "Improve mobile responsive layout",
        date: "2026-07-28",
        category: "Frontend",
        status: "new",
      },
    ],
  },

  {
    id: 5,
    firstName: "Rohit",
    email: "rohit@gmail.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Testing Application",
        description: "Test all features and fix bugs",
        date: "2026-07-29",
        category: "Testing",
        status: "new",
      },
    ],
  },
];


const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123",
  },
];


export const setLocalStorage = () => {

  if (!localStorage.getItem("emsemployees")) {
    localStorage.setItem(
      "emsemployees",
      JSON.stringify(employees)
    );
  }


  if (!localStorage.getItem("emsadmin")) {
    localStorage.setItem(
      "emsadmin",
      JSON.stringify(admin)
    );
  }

};


export const getLocalStorage = () => {

  const employees =
    JSON.parse(localStorage.getItem("emsemployees")) || [];


  const admin =
    JSON.parse(localStorage.getItem("emsadmin")) || [];


  return {
    employees,
    admin,
  };

};