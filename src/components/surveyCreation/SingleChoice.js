import { ReactComponent as Trash } from './icons/trash.svg';
import { ReactComponent as Add } from './icons/add.svg';
const SingleChoice = ({ content }) => {
	return (
		<form className='border-2 w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50 grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<input
					type='text'
					placeholder='Question'
					className='text-xl outline-none border-2 rounded-xl mb-4 w-full p-1'
				/>
				<div className='pl-2 flex flex-col gap-2'>
					<div>
						<input type='radio' name='radio' value='' className='' />
						<label for='radio' className='px-2'>
							Option 1
						</label>
					</div>
					<div>
						<input type='radio' name='radio' value='' className='' />
						<label for='radio2' className='px-2'>
							Option 2
						</label>
					</div>
				</div>
				<div className='flex items-center mt-2 cursor-pointer border-2 w-min p-1 px-2 rounded-xl'>
					<Add className='w-5 h-5 border-2 border-transparent' />
					<p>Add</p>
				</div>
			</div>
			<div className='flex justify-end'>
				<Trash className='w-6 h-6 mt-2' />
			</div>
		</form>
	);
};

export default SingleChoice;
