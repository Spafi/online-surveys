import { ReactComponent as Trash } from './icons/trash.svg';
const Rating = () => {
	return (
		<div className='border-2 w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50 grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<input
					type='text'
					placeholder='Question'
					className='text-xl outline-none border-2 rounded-xl mb-4 w-full p-1'
				/>
				<div className='pl-2 outline-none'>
					<select
						name='rating-from'
						id='rating-from'
						className='p-2 mr-8 rounded-xl'
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
			</div>
			<div className='flex justify-end'>
				<Trash className='w-6 h-6 mt-2' />
			</div>
		</div>
	);
};

export default Rating;
