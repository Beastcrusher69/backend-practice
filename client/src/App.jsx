import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({});

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setState(data);
      }
    )
  },[state])

  console.log("state>> ",state);

  return (
    <div>
      <p>uwudxneuuebu</p>
      hi
     {state}
    </div>
  )
}

export default App
