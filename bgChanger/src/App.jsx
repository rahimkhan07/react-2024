import { useState } from 'react'
import './App.css'

function App() {

 const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >Red</button>
            <button
            onClick={() =>setColor("green")}
            className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
            style={{backgroundColor:"Green"}}
            >Green</button>
            <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
            style={{backgroundColor:"Yellow"}}
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
