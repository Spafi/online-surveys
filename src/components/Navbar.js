const Navbar = () => {
	return (
		<div className='h-16 bg-gradient-to-r from-m-pink-default to-m-orange-default absolute w-full z-50 shadow-xl flex justify-between px-8 text-white text-xl capitalize'>
			<div className='items-center flex'>
				<div>
					<svg
						id='Diamond'
						className='h-14 fill-current'
						enable-background='new 0 0 491.203 491.203'
						viewBox='0 0 491.203 491.203'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g>
							<path d='m326.309 128.277-39.769-120h-82.175l-39.532 120z' />
							<path d='m88 8.277-88 120h133.248l39.53-120z' />
							<path d='m491.203 128.277-88-120h-85.058l39.769 120z' />
							<path d='m365.07 158.277-73.522 263.709 199.54-263.709z' />
							<path d='m245.602 482.926 87.52-324.078h-176.253z' />
							<path d='m.154 158.277 198.415 262.267-72.436-262.267z' />
						</g>
					</svg>
				</div>
				<div className='pl-4 text-4xl font-bold'>Next Surveys</div>
			</div>
			<div className='items-center flex gap-6 font-bold text-xl'>
				<div>Surveys</div>
				<div>Inca Ceva</div>
				<div>About Us</div>
			</div>
		</div>
	);
};

export default Navbar;
