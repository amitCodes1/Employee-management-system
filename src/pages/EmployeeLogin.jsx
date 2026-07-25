import Login from "../components/Auth/Login";


const EmployeeLogin = ({setLoggedUser}) => {


return (

<Login

role="employee"

setLoggedUser={setLoggedUser}

/>

);


};


export default EmployeeLogin;