import { useState } from 'react'
import './App.css'
import Button from './button'
import Form from './form'
import bgMobile from '../public/images/bg-intro-mobile.png'
import bgDesktop from '../public/images/bg-intro-desktop.png'

function App() {

  return (
    <div className="App">
      <header>
        {/* Hidden h1 for screen readers */}
        <h2>Learn to code by watching others</h2>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable. 
        </p>
     </header>
     <main>
     <Button />
     <Form />
     </main>
    </div>
  )
}

export default App
