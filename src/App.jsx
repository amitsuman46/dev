import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Feature Branch Active')

  useEffect(() => {
    console.log('Feature component mounted')
  }, [])

  return (
    <>
    <h1>Hello World from Feature Branch</h1>
    <h2>Hello World from Main Branch</h2>
    <p>This is a feature update</p>
    <p>Message: {message}</p>
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    <button onClick={() => setMessage('Updated from Feature')}>Update Message</button>
    </>
  )
}

export default App
