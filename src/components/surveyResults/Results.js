import { Redirect } from 'react-router';
import { isAuthenticated } from '../Utils';

const Results = () => {
	if (!isAuthenticated()) return <Redirect to='/' />;
	return (
		<div className='bg-purple-100 grid w-screen h-screen pt-16 grid-cols-6 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative'>
      
    </div>
	);
};

export default Results;
