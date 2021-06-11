import Login from './login/Login';
const Main = () => {
	return (
		<div className='bg-purple-100 w-full'>
			<div className='p-64 grid grid-cols-2 h-screen '>
				<div className='font-montserrat text-gray-600 z-10 relative '>
					<p className='font-bold text-7xl pb-24 pt-12'>Next Surveys</p>
					<p className='text-4xl'>
						Make online surveys, <br />
						Get the <span className='font-bold'>Next</span> opinions
					</p>
				</div>
				<div>
					<Login />
				</div>
			</div>
		</div>
	);
};

export default Main;
