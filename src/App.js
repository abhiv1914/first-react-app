import { useRef, useState } from "react";

function App(){
  return( 
  <>
    <h1>My Todo</h1>
    <MyTodo/>
  </>
  );
}

function MyTodo(){
  let[todo, setTodo] =useState({task: ""});

  return(
    <>
      <input 
      className="form-control" 
      type="text"  
      placeholder="Enter task"
      value={todo.task}
      />

      <input type="button" value="Add Todo" />
    </>
  );
}
export default App;