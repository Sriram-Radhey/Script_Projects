import React, { useState } from "react"
import '../src/todolist.css'
function ToDoList(){

    const [tasks,setTasks]=useState([]);
    const [newTask,setnewTask]=useState("");

    function inputHandler(event){
        setnewTask(event.target.value);
       
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t => [...t,newTask]);
            setnewTask("");
        }
       
    }

    function delTask(index){
        const uTask=tasks.filter((_,i)=>i!== index);
        setTasks(uTask);
    }

    function mUp(index){
        if(index>0){
            const uTask=[...tasks];
            [uTask[index],uTask[index-1]]=[uTask[index-1],uTask[index]];
            setTasks(uTask);
        }
    }

    function mDown(index){
        if(index<tasks.length-1){
            const uTask=[...tasks];
            [uTask[index],uTask[index+1]]=[uTask[index+1],uTask[index]];
            setTasks(uTask);
        }
    }

    return(<div className="todolist">
             <h1>TO-DO-LIST</h1>
             <div>
                <input type="text" value={newTask} placeholder="Enter a Task..." onChange={inputHandler}></input>
                <button className="btn" onClick={addTask}>Add</button>
             </div>
             <ol>
                {tasks.map((task,index)=>
                     <li key={index}>
                        <span className="text">{task}</span>
                        <div className="libtn">
                        <button className="dltbtn" onClick={()=>delTask(index)}> Delete</button>
                        <button className="mupbtn" onClick={()=>mUp(index)}>👆🏻</button>
                        <button className="dbtn" onClick={()=>mDown(index)}>👇🏻</button>
                        </div>
                     </li> 
                     
                )}
             </ol>
    </div>)
}

export default ToDoList