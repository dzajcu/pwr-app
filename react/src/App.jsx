import { Register } from './components/LogRegForm/Register'
import { Login } from './components/LogRegForm/Login'
import { Header } from './components/Header/Header'
import { MainPage } from './components/MainPage'
import React, { useState, useEffect } from 'react'

function App() {
	return (
		<div className='App'>
			{/* {currentForm === "login" ? <Login onFormSwitch={toogleForm}/> : <Register onFormSwitch={toogleForm}/>} */}
			{/* <Header/> */}
			<MainPage />
		</div>
	)
}

export default App
