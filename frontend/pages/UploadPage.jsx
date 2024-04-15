import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState('');
	const navigate = useNavigate();

	async function handleSubmit(e) {
		const data = new FormData();
		data.append('file', file);
		data.append('title', title);
		data.append('description', desc);

		const response = await fetch('http://localhost:3000/upload', {
			method: 'POST',
			body: data,
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		});

		const res = await response.json();
		navigate('/');
		window.location.href = '/';
	}

	return (
		<>
			<Navbar />
			<form className='container mt-4' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label
						htmlFor='exampleFormControlInput1'
						className='form-label'
					>
						Title
					</label>
					<input
						name='title'
						type='text'
						className='form-control'
						id='exampleFormControlInput1'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleFormControlTextarea1'
						className='form-label'
					>
						Description
					</label>
					<textarea
						name='description'
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
						value={desc}
						onChange={e => setDesc(e.target.value)}
					></textarea>
				</div>
				<div className='mb-3'>
					<label htmlFor='formFile' className='form-label'>
						Default file input example
					</label>
					<input
						name='file'
						className='form-control'
						type='file'
						id='formFile'
						accept='image/jpg image/jpeg image/png'
						onChange={e => setFile(e.target.files[0])}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
}
