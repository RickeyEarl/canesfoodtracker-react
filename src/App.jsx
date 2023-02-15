import { useState } from 'react'
import DateSummary from './components/dateSummary.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-neutral App">
      <Header />
      <DateSummary/>
    </div>
  )
}

export default App
