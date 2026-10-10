// App.jsx - Color Clock widget
import { useState, useEffect } from 'react'
// format turns a Date into a readable string
import { format } from 'date-fns'
import './App.css'

function App() {
  // Store current time in state so React re-renders when it changes
  const [now, setNow] = useState(new Date())

  // Update the time every second; clean up timer on unmount
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="clock">
      <p className="clock-date">{format(now, 'EEEE, MMMM do, yyyy')}</p>
      <p className="clock-time">{format(now, 'hh:mm:ss a')}</p>
    </div>
  )
}

export default App
