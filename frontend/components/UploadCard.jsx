import React from 'react';

export default function UploadCard({ title, img, desc, link }) {
	return (
		<div className='card mb-3'>
			<div className='row g-0'>
				<div className='col-md-4'>
					<img
						src={img}
						className='img-fluid rounded-start '
						alt='Prescription Image'
					/>
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>{title}</h5>
						<p className='card-text'>{desc}</p>
						{/* <p class='card-text'>
							<small class='text-body-secondary'>
								Last updated 3 mins ago
							</small>
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}
