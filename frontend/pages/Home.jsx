import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

import UploadGrid from '../components/UploadGrid';

export default function Home() {
	const [uploads, setUploads] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) window.location.href = '/login';

		return;
	});

	useEffect(() => {
		async function getData() {
			const response = await fetch('http://localhost:3000/upload/', {
				method: 'GET',
				headers: {
					'x-access-token': localStorage.getItem('token'),
				},
			});
			const data = await response.json();
			setUploads(data.data);
			console.log(data);
		}
		getData();
	}, []);

	return (
		<>
			<Navbar />
			<UploadGrid data={uploads} />
		</>
	);
}
