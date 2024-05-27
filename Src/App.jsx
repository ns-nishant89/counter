import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter] = useState(15)

//let counter =16 
 const addValue = () =>{
  console.log("click",counter);
  //counter = counter+1
  setcounter(counter+1)
 }
 const removeValue=()=>{
  setcounter(counter-1)
 }

  return (
    <>
     <h1>chai aur react </h1>
     <h2>counter value:{counter}</h2>

     <button
     onClick={addValue}
     > Add value {counter}</button>
     <br/>
     <button
     onClick={removeValue}
     > Remove value {counter}</button>
    </>
  )
}

export default App
