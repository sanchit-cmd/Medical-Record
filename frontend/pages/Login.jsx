import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();
	// const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		const response = await fetch('http://localhost:3000/user/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		if (!data.user) {
			alert('Invalid Username or Password');
		} else {
			localStorage.setItem('token', data.user);
			navigate('/');
		}

		console.log(data);
	}

	return (
		<div className='container mt-4'>
			<form onSubmit={handleSubmit}>
				{/* <div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						className='form-control'
						id='name'
						aria-describedby='emailHelp'
						required
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div> */}
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='form-control'
						id='exampleInputPassword1'
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
        <div className='mb-3'>Don't have an account <Link to={'/register'}>Sign up</Link> now</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
}
