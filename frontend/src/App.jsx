import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Profile from '../pages/Profile';
import UploadPage from '../pages/UploadPage';
import { useEffect } from 'react';

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/add' element={<UploadPage />} />
			</Routes>
		</>
	);
}

export default App;
