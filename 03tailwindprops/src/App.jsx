import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username : "Akki",
    age: 24,
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 p-3 rounded-xl">
      Hello world!
    </h1>
    <Card username="Welcome" btnText="click me"/> 
    <Card username="Akki"/>
    </>
  )
}

export default App
