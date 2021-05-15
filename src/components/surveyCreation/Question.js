import { ReactComponent as Add } from './icons/add.svg';
import { ReactComponent as Trash } from './icons/trash.svg';
const Question = ({ id, type, onRemove }) => {
	let questionBody;
	switch (type) {
		case 'shortAnswer':
			questionBody = (
				<div className='pl-2'>
					<input
						type='text'
						placeholder='Short answer text'
						className='w-full outline-none rounded-xl pl-2'
						disabled
					/>
				</div>
			);
			break;

		case 'longAnswer':
			questionBody = (
				<div className='pl-2 outline-none'>
					<input
						type='text'
						placeholder='Long answer text'
						className='w-full outline-none rounded-xl pl-2'
						disabled
					/>
				</div>
			);
			break;

		case 'rating':
			questionBody = (
				<div className='pl-2 outline-none'>
					<select
						name='rating-from'
						id='rating-from'
						className='p-2 mr-8 rounded-xl outline-none'
					>
						<option vlaue='0'>0</option>
						<option vlaue='1'>1</option>
					</select>
					<select name='rating-to' id='rating-to' className='p-2 rounded-xl'>
						<option vlaue='2'>2</option>
						<option vlaue='3'>3</option>
						<option vlaue='4'>4</option>
						<option vlaue='5'>5</option>
						<option vlaue='6'>6</option>
						<option vlaue='7'>7</option>
						<option vlaue='8'>8</option>
						<option vlaue='9'>9</option>
						<option vlaue='10'>10</option>
					</select>
				</div>
			);
			break;

		case 'multipleChoice':
			questionBody = (
				<>
					<div className='pl-2 flex flex-col gap-2'>
						<div>
							<input type='checkbox' name='checkbox' value='' className='' disabled />
							<input
								type='text'
								placeholder='Option 1'
								className='ml-2 outline-none border-b focus-within:border-m-red'
							/>
						</div>
						<div>
							<input type='checkbox' name='checkbox' value='' className='' disabled />
							<input
								type='text'
								placeholder='Option 2'
								className='ml-2 outline-none border-b focus-within:border-m-red'
							/>
						</div>
					</div>
					<div className='flex items-center mt-4 cursor-pointer border w-min p-1 px-2 rounded-xl hover:border-m-red'>
						<Add className='w-4 h-4 border-2 border-transparent mr-2' />
						<p>Add</p>
					</div>
				</>
			);
			break;

		case 'singleChoice':
			questionBody = (
				<>
					<div className='pl-2 flex flex-col gap-2'>
						<div>
							<input type='radio' name='radio' value='' className='' disabled />
							<input
								type='text'
								placeholder='Option 1'
								className='ml-2 outline-none border-b focus-within:border-m-red'
							/>
						</div>
						<div>
							<input type='radio' name='radio' value='' className='' disabled />
							<input
								type='text'
								placeholder='Option 2'
								className='ml-2 outline-none border-b focus-within:border-m-red'
							/>
						</div>
					</div>
					<div className='flex items-center mt-4 cursor-pointer border w-min p-1 px-2 rounded-xl hover:border-m-red'>
						<Add className='w-4 h-4 border-2 border-transparent mr-2' />
						<p>Add</p>
					</div>
				</>
			);
			break;

		default:
			questionBody = '';
	}

	return (
		<div
		
			className='bg-white w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50 grid grid-cols-12 gap-4'
		>
			<div className='col-span-11'>
				<input
					type='text'
					placeholder='Question'
					className='text-xl outline-none border rounded-xl mb-4 w-full p-1 focus-within:border-m-pink'
				/>
				{questionBody}
			</div>
			<div className='flex justify-end cursor-pointer'>
				<Trash className='w-6 h-6 mt-2' onClick={() => onRemove(id)} />
			</div>
		</div>
	);
};

export default Question;
