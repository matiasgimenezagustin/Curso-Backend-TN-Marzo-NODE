import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import HomeScreen from './screens/Home/HomeScreen'
import { verificarToken } from './fetching/auth.fetching'

const RouterApp = () => {
	const navigate = useNavigate()
	useEffect(() => {
		verificarToken()
			.then(resultado => {
				if (resultado.status == 200) {
					navigate('/home')
				}
				else {
					navigate('/login')
				}
			})
	}
	, []
	)




	return (
		<Routes>
			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
			<Route path='/' element={<LoginScreen />} />
			<Route path='/home' element={<HomeScreen />} />
		</Routes>
	)
}

export default RouterApp