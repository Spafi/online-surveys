import Login from './login/Login';
const Main = () => {
	return (
		<div className=' w-full'>
		
			<div className='p-64 grid grid-cols-2 h-screen'>
				<div className='font-montserrat text-white z-10 relative'>
					<svg
						id='Splash'
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 668.5 621.86'
						className='absolute -z-10 -top-36 -left-36 mr-12'
					>
						<defs>
							<linearGradient
								id='linear-gradient'
								x1='184.3'
								y1='544.11'
								x2='840.98'
								y2='544.11'
								gradientTransform='matrix(-0.99, -0.1, -0.1, 0.99, 1079.35, 56.57)'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0.32' stop-color='#ff416c' />
								<stop offset='0.66' stop-color='#ff464e' />
								<stop offset='1' stop-color='#ff4b2b' />
							</linearGradient>
							<linearGradient
								id='linear-gradient-2'
								x1='183.8'
								y1='544.11'
								x2='841.48'
								y2='544.11'
								gradientTransform='matrix(-0.99, -0.1, -0.1, 0.99, 1079.35, 56.57)'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0' stop-color='#f94b81' />
								<stop offset='0.38' stop-color='#fb4b63' />
								<stop offset='1' stop-color='#ff4b2b' />
							</linearGradient>
						</defs>
						<title>splash</title>
						<path
							class='cls-1'
							d='M344.58,314.88c28-19.33,152.82-105.33,304.91-71.71,38.66,8.54,115.2,25.46,162.33,94.08,58.92,85.77,45.87,214.5-17.05,274.18-40.35,38.29-67.12,15.82-127.84,56.1-93.68,62.14-73.31,144.39-142.74,177.54-79.7,38-196.33-27.43-257.72-92.34-15.34-16.22-94.62-100.05-83.17-216.26C195,418,292.6,350.71,344.58,314.88Z'
							transform='translate(-181.67 -234.95)'
						/>
					</svg>
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
