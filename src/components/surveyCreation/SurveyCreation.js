import { ReactComponent as LongText } from './icons/long-text.svg';
import { ReactComponent as ShortText } from './icons/short-text.svg';
import { ReactComponent as Rating } from './icons/rating.svg';
import { ReactComponent as Radio } from './icons/radio.svg';
import { ReactComponent as Checkbox } from './icons/checkbox.svg';
const SurveyCreation = () => {
	return (
		<div className='grid w-screen h-screen pt-16 grid-cols-6'>
			<div className='col-span-1 p-8 flex flex-col gap-4'>
				<div className=' h-12 border-2 border-m-gray-lighter cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
					<ShortText className='h-12 pr-4' />
					<p>Short Answer</p>
				</div>
				<div className=' h-12 border-2 border-m-gray-lighter cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
					<LongText className='h-12 pr-4' />
					<p>Long Answer</p>
				</div>
				<div className=' h-12 border-2 border-m-gray-lighter cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
					<Rating className='h-12 pr-4' />
					<p>Rating</p>
				</div>
				<div className=' h-12 border-2 border-m-gray-lighter cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
					<Checkbox className='h-6 w-12' />
					<p>Multiple Choice</p>
				</div>
				<div className=' h-12 border-2 border-m-gray-lighter cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
					<Radio className='h-8 w-12 pr-4 pl-3' />
					<p>Single Choice</p>
				</div>
			</div>
			<div className='border-4 col-span-4 p-12 justify-center'>
				<div>1</div>
				<div>2</div>
			</div>
		</div>
	);
};
export default SurveyCreation;
