import Button from "./Button"
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick=() => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  useEffect(() =>{
    console.log("call api");
  }, []);
 
  useEffect(()=>{
   if(keyword !== "" && keyword.length > 4){
    console.log("search for", keyword);
   }
  }, [keyword, counter]);

  return (
   <div>
     <input value={keyword} onChange={onChange} type="text" placeholder="search here.. "/>
     <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
   </div>
  );
}

export default App;
