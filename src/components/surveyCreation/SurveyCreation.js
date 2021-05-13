import { ReactComponent as LongText } from './icons/long-text.svg';
import { ReactComponent as ShortText } from './icons/short-text.svg';
import { ReactComponent as Rating } from './icons/rating.svg';
import { ReactComponent as Radio } from './icons/radio.svg';
import { ReactComponent as Checkbox } from './icons/checkbox.svg';
import SurveyForm from './SurveyForm';


const SurveyCreation = () => {

	return (
		<div className='grid w-screen h-screen pt-16 grid-cols-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative'>

			<div className='fixed h-full w-1/5 col-span-1 p-8 flex flex-col gap-4 border-gradient-t-pink-orange border-r-2'>
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
			<SurveyForm />
		</div>
	);
};
export default SurveyCreation;
