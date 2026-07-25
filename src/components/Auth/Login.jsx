import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getLocalStorage } from "../../utils/localStorage";


const Login = ({ role, setLoggedUser }) => {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const { employees, admin } = getLocalStorage();





  const handleLogin = (e) => {

    e.preventDefault();


    let user = null;



    // ADMIN LOGIN

    if(role === "admin"){


      user = admin.find((item)=>{

        return (
          item.email === email &&
          item.password === password
        );

      });



      if(user){


        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(user)
        );


        setLoggedUser(user);


        navigate("/admin");


      }
      else{


        alert("Wrong Admin Email or Password");


      }


    }





    // EMPLOYEE LOGIN


    if(role === "employee"){



      user = employees.find((item)=>{


        return (

          item.email === email &&
          item.password === password

        );


      });





      if(user){


        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(user)
        );



        setLoggedUser(user);



        navigate("/employee");



      }
      else{


        alert("Wrong Employee Email or Password");


      }



    }



  };






  return (


    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-5">



      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">



        <h1 className="text-3xl font-bold text-center text-gray-800">

          {
            role === "admin"
            ?
            "Admin Login"
            :
            "Employee Login"
          }

        </h1>



        <p className="text-center text-gray-500 mt-2">

          Employee Management System

        </p>





        <form 
        onSubmit={handleLogin}
        className="mt-6"
        >




          <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="
          w-full
          border
          rounded-lg
          p-3
          mb-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
          "

          />





          <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="
          w-full
          border
          rounded-lg
          p-3
          mb-5
          outline-none
          focus:ring-2
          focus:ring-blue-500
          "

          />





          <button

          className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-lg
          font-semibold
          hover:bg-blue-700
          transition
          "

          >

            Login

          </button>



        </form>








        {/* ADMIN DEMO LOGIN */}


        {
          role === "admin" && (


            <div className="mt-6 bg-gray-100 rounded-xl p-4">


              <h2 className="font-bold text-lg mb-2">

                Demo Admin Account

              </h2>



              <p>

                Email:
                <span className="font-semibold">
                 admin@gmail.com
                </span>

              </p>



              <p>

                Password:
                <span className="font-semibold">
                 admin123
                </span>

              </p>



            </div>


          )

        }









        {/* EMPLOYEE DEMO LOGIN */}


        {
          role === "employee" && (



            <div className="mt-6 bg-gray-100 rounded-xl p-4">


              <h2 className="font-bold text-lg mb-3">

                Demo Employee Accounts

              </h2>




              <div className="space-y-3">



              {
                employees.map((employee)=>(


                  <div

                  key={employee.id}

                  className="
                  bg-white
                  rounded-lg
                  p-3
                  shadow
                  text-sm
                  "


                  >



                    <p>

                    Name:
                    <b> {employee.firstName}</b>

                    </p>



                    <p>

                    Email:
                    <b> {employee.email}</b>

                    </p>



                    <p>

                    Password:
                    <b> {employee.password}</b>

                    </p>



                  </div>


                ))
              }



              </div>



            </div>



          )

        }




      </div>



    </div>


  );


};


export default Login;