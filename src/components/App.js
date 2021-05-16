import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
  useEffect(()=>{
    
  },[count]);

  return (
    <div className="ball">
      <h1 className="count" onClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}


export default App;
