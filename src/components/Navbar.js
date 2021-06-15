import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from './Utils';

import { Redirect } from 'react-router';

const Navbar = () => {
	const handleLogout = () => {
		logout();
	};
	let location = useLocation();
	return (
		<div className='h-16 bg-gradient-to-r from-m-pink to-m-orange absolute w-full z-50 shadow-md flex justify-between px-8 text-white text-xl capitalize rounded-b-md'>
			<Link to='/' className='items-center flex'>
				<div>
					<svg
						id='Diamond'
						className='h-12 fill-current'
						enableBackground='new 0 0 491.203 491.203'
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
				<div className='pl-4 text-3xl font-bold'>Next Surveys</div>
			</Link>
			<div className='items-center flex gap-6 text-xl'>
				<div>
					{location.pathname !== '/create' && isAuthenticated() && (
						<Link
							to='/create'
							className='border-b border-transparent hover:border-white'
						>
							Create
						</Link>
					)}
				</div>
				<div>
					{location.pathname !== '/user' && isAuthenticated() && (
						<Link
							to='/user'
							className='border-b border-transparent hover:border-white'
						>
							My Surveys
						</Link>
					)}
				</div>
				{isAuthenticated() && (
					<Link
						to='/'
						className='border-b border-transparent hover:border-white cursor-pointer'
						onClick={handleLogout}
					>
						Logout
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
