import { useState, useEffect } from 'react';
import QuestionBody from './QuestionBody';
import UUIDv4 from '../Utils';
import { ReactComponent as Trash } from './icons/trash.svg';
const Question = ({ id, type, onRemove, onChangeQuestionTitle }) => {
	const [options, setOptions] = useState([{ id: UUIDv4(), value: '' }]);

	const removeOption = (optionId) => {
		if (options.length > 1) {
			let newOptions = options.filter((option) => option.id !== optionId);
			setOptions(newOptions);
		}
	};

	useEffect(() => {
		console.log(options);
	}, [options]);

	const handleInputChange = (e, inputId) => {
		const input = e.target.value;
		for (let option of options) {
			if (option.id === inputId) option.value = input;
		}
	};

	return (
		<div className='bg-white w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50 grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<input
					onChange={(e) => onChangeQuestionTitle(e, id)}
					type='text'
					placeholder='Question'
					className='text-xl outline-none border rounded-xl mb-4 w-full p-1 focus-within:border-m-pink'
				/>
				<QuestionBody
					type={type}
					options={options}
					setOptions={setOptions}
					handleInputChange={handleInputChange}
					removeOption={removeOption}
				/>
			</div>
			<div className='flex justify-end cursor-pointer'>
				<Trash className='w-6 h-6 mt-2' onClick={() => onRemove(id)} />
			</div>
		</div>
	);
};

export default Question;
