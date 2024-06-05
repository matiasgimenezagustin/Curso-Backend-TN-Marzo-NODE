import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import HomeScreen from './screens/Home/HomeScreen'

const RouterApp = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/'  element={<LoginScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
    </Routes>
  )
}

export default RouterApp