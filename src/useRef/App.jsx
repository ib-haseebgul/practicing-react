import { useEffect, useRef, useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const inputRef=useRef(null);

  const addtask = () => {
    if (task.trim() !== "") {
      setTasklist([...tasklist, task]);
      setTask ("");
    }
    inputRef.current.focus();
  };
  const taskToDelete =(idToDelete)=>{
    setTasklist(tasklist.filter(((_,index)=> index !== idToDelete)))

  }
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasklist))
  },[tasklist])
 
  return (
    <>
      <input ref={inputRef}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter Task"
        value={task}
      />
      <button onClick={addtask}>Add Task</button>
      <ul>
        {tasklist.map((task, index) => (
          <li key={index}>
            {task} <button onClick={()=> taskToDelete(index)}>Delete Task</button>
            </li>
        ))}
      </ul>
    </>
  );
}