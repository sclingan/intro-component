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
        <h1 className='sr-hidden'>Intro Component</h1>
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
