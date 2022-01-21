import { useState } from "react";

function App(){
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event)=>{
    console.log(event.target.value);
    setTodo(event.target.value);
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if(todo === ""){return ;}
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);

  }
  
  return (
    <div>
      <h1>My To dos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange ={onChange} placeholder="enter data" value={todo}></input>
        <button>X</button>
      </form>
      <hr />
      {
        todos.map((item, index) => (
          <li key={index}>{item}</li>
        )
        )
      }
    </div>
  );
}

export default App;