import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Conflicting Changes Made')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    console.log('Component mounted with conflict changes')
    setIsActive(true)
  }, [])

  return (
    <>
    <h1>This is a Conflicting Version</h1>
    <h2>Modified in Feature Branch</h2>
    <p>This will cause merge conflicts</p>
    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    <p>Message: {message}</p>
    <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
    <button onClick={() => setMessage('Changed in Feature Branch')}>Update Message</button>
    </>
  )
}

export default App
