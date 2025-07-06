import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(0)

//  let counter = 5;

 const addValue = () => {
  console.log("Clicked", counter);
  
  if(counter < 20){
    setCounter(counter +1);
  }else{
    alert("Value cannot extend")
  }
 }

 const removeValue = () => {
  
  if(counter > 0){
   setCounter(counter -1) 
  }else{
    alert("Value cannot remove")
  }
 }

  return (
    <>
      <h1>assalamoalikum</h1>
      <h2>count value: {counter} </h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>

      <br /> <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
