import UploadCard from './UploadCard';

export default function UploadGrid({ data }) {
	return (
		<div className='container row row-cols-2 mt-4'>
			{data.map(item => (
				<div className='col' key={item._id}>
					<UploadCard
						title={item.title}
						img={item.imagePath}
						desc={item.description}
						link={'#'}
					/>
				</div>
			))}
		</div>
	);
}
