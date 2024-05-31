import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'

const RouterApp = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register'/>
        <Route path='/'  element={<LoginScreen/>}/>
    </Routes>
  )
}

export default RouterApp