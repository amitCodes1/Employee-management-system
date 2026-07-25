import React from "react";


const Header=({data,changeUser})=>{


const logout=()=>{


sessionStorage.removeItem("loggedInUser");


changeUser(null);


window.location.href="/";


};



return(


<div className="flex justify-between items-center">


<div>

<h2 className="text-gray-400 text-xl">

Hello,

</h2>


<h1 className="text-3xl font-bold">

{data.firstName} 👋

</h1>


</div>



<button

onClick={logout}

className="bg-red-600 px-5 py-2 rounded"

>

Logout

</button>



</div>


)

}


export default Header;