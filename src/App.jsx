import React from 'react'
import './App.css'
import Homepage from './pages/homepage'
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
      
    </>
  )
}

export default App
