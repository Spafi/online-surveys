import { useState } from 'react';
import QuestionBody from './QuestionBody';
import UUIDv4 from '../Utils';
const Question = ({ id, type, title, options }) => {
	return (
		<div className='bg-white w-3/4 max-w-2xl self-center rounded-xl p-4 shadow-md grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<p className='text-xl rounded-xl mb-4 w-full p-1'>{title}</p>
				<QuestionBody type={type} options={options} questionId={id}/>
			</div>
			<div className='flex flex-col gap-2 justify-between items-end'>
				<div className='flex items-center '>
					<p className='text-xs text-red-600'>Required location</p>
				</div>
			
			</div>
		</div>
	);
};

export default Question;
