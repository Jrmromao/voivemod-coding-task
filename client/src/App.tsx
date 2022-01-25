import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/styles/main.css'
import Home from './app/views/home'
import { Route, Routes } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
