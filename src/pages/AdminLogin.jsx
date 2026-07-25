import Login from "../components/Auth/Login";


const AdminLogin = ({setLoggedUser}) => {


return (

<Login

role="admin"

setLoggedUser={setLoggedUser}

/>

);


};


export default AdminLogin;