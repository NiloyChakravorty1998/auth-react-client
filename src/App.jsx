import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'

const App = () => {
  return (
    <div className='app h-screen flex flex-col'>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App