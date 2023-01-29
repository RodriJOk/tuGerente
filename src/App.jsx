import { useState } from 'react'
import Dropdown from './components/Dropdown'
import Header from './components/Header'
import Albums from './components/Albums'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dropdown></Dropdown>
      <Albums></Albums>
    </div>
  )
}

export default App
