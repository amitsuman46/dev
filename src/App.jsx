import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Hello World from Feature Branch</h1>
    <h2>Hello World from Main Branch</h2>
    <p>This is a feature update</p>
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  )
}

export default App
