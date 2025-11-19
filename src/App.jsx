import { useState, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [message, setMessage] = useState('Feature Branch - Major Changes')
  const [isActive, setIsActive] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    console.log('Feature branch component initialized')
    document.title = 'Feature Branch App'
    setIsActive(true)
  }, [])

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 5)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 5)
  }, [])

  return (
    <div className="app-container">
    <h1>Feature Branch - Conflicting Changes</h1>
    <h2>This will conflict with main branch</h2>
    <h3>Version 2.0 - Feature Update</h3>
    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    <p>Current Count: {count}</p>
    <p>Message: {message}</p>
    <p>Theme: {theme}</p>
    <div className="button-group">
      <button onClick={handleIncrement} className="btn-primary">Add 5: {count}</button>
      <button onClick={handleDecrement} className="btn-secondary">Subtract 5: {count}</button>
      <button onClick={() => setMessage('Updated from Feature')} className="btn-info">Update Message</button>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
    </div>
    </div>
  )
}

export default App
