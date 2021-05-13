import { ReactComponent as Trash } from './icons/trash.svg';
const Question = ({ content }) => {
	return (
		<div className='border-2 w-3/4 self-center rounded-xl p-4 shadow-md focus-within:bg-gray-100 grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<input
					type='text'
					placeholder='Question'
					className='text-xl outline-none border-2 rounded-xl mb-4 w-full p-1'
				/>
				<div>{content}</div>
			</div>
			<div className='flex justify-end'>
				<Trash className='w-6 h-6 mt-2' />
			</div>
		</div>
	);
};

export default Question;
