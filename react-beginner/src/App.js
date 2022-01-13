import Button from "./Button"
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello(){
  function effectFunc(){
    console.log("created :)");
    return distFunc
  }
  function distFunc(){
    console.log("destroyed");
  }

  useEffect(function(){
    console.log("Hi");
    return function(){
      console.log("bye ");
    }
  }, []);

  useEffect(()=>{
    console.log("hi!!");
    return ()=>{console.log("bye!!")}
  }, []);
  return( 
    <h1>Hello!</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(!showing); 
  }
  return(
    <div>
      {
        showing ? <Hello /> : null
      }
      <button onClick={onClick}> {showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
