import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  
  // let counter = 15

  const addValue = () => {
    if(counter < 20){
      counter += 1
      setCounter(counter)
      console.log("Clicked" , counter)
    }
  }
  const remValue = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    console.log("Clicked" , counter)
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={remValue}>remove Value {counter}</button>
    </>
  )
}

export default App
