import React from "react";


const TaskNumber=({data})=>{


return(

<div className="grid grid-cols-4 gap-5 mt-8">


<div className="bg-blue-600 p-5 rounded">

<h1 className="text-3xl">

{data.taskNumber.newTask}

</h1>

<p>New Task</p>

</div>



<div className="bg-yellow-500 p-5 rounded">

<h1 className="text-3xl">

{data.taskNumber.active}

</h1>

<p>Active</p>

</div>




<div className="bg-green-600 p-5 rounded">

<h1 className="text-3xl">

{data.taskNumber.completed}

</h1>

<p>Completed</p>

</div>



<div className="bg-red-600 p-5 rounded">

<h1 className="text-3xl">

{data.taskNumber.failed}

</h1>

<p>Failed</p>

</div>



</div>

)

}


export default TaskNumber;