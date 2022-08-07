import { useState } from 'react'
import Header from './Header'
import Meme from './Meme'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header />
        <Meme />
      </div>
    </div>
  )
}

export default App
