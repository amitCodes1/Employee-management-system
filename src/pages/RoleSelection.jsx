import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserRound } from "lucide-react";


const RoleSelection = () => {

  const navigate = useNavigate();


  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-gray-950
      via-gray-900
      to-blue-950
      px-5
    ">


      <div className="w-full max-w-4xl">


        <h1 className="
          text-5xl
          font-bold
          text-white
          text-center
          mb-3
        ">

          Employee Management System

        </h1>


        <p className="
          text-gray-400
          text-center
          mb-12
          text-lg
        ">

          Choose your login portal

        </p>



        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">


          {/* Admin Card */}

          <div className="
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            rounded-3xl
            p-8
            hover:scale-105
            transition
            duration-300
          ">


            <div className="
              w-16
              h-16
              flex
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
              mb-6
            ">

              <ShieldCheck 
                size={35}
                className="text-white"
              />

            </div>



            <h2 className="
              text-3xl
              font-bold
              text-white
              mb-3
            ">

              Admin Portal

            </h2>


            <p className="
              text-gray-300
              mb-8
            ">

              Manage employees, create tasks and monitor performance.

            </p>



            <button

              onClick={()=>navigate("/admin-login")}

              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "

            >

              Login as Admin

            </button>



          </div>





          {/* Employee Card */}


          <div className="
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            rounded-3xl
            p-8
            hover:scale-105
            transition
            duration-300
          ">


            <div className="
              w-16
              h-16
              flex
              items-center
              justify-center
              rounded-2xl
              bg-green-600
              mb-6
            ">

              <UserRound
                size={35}
                className="text-white"
              />

            </div>



            <h2 className="
              text-3xl
              font-bold
              text-white
              mb-3
            ">

              Employee Portal

            </h2>



            <p className="
              text-gray-300
              mb-8
            ">

              View assigned tasks and update your work progress.

            </p>




            <button

              onClick={()=>navigate("/employee-login")}

              className="
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "

            >

              Login as Employee

            </button>



          </div>



        </div>


      </div>


    </div>

  );

};


export default RoleSelection;