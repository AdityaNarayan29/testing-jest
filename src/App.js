import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Devices from './components/Pages/Devices/Devices';
import Users from './components/Pages/Users/Users';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Pages/Settings/Settings';
import Help from './components/Pages/Help/Help';
import Instances from './components/Pages/Instances/Instances';


const App = () => {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Login />} />
				</Routes>
				<Routes>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/devices' element={<Devices />} />
					<Route path='/users' element={<Users />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/help' element={<Help />} />
					<Route path='/instances' element={<Instances />} />
					{/* Learn children thing */}
				</Routes>
			</Router>
		</div>
	);
};

export default App;
