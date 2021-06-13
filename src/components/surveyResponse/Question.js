import { useState } from 'react';
import QuestionBody from './QuestionBody';
import UUIDv4 from '../Utils';
const Question = ({ id, type, title, options, updateQuestionResponses }) => {
	const [responses, setResponses] = useState([{ questionId: id, value: '' }]);

	const handleInputChange = (e, questionId, from = null) => {
		let input;
		switch (typeof e) {
			case 'number':
				from === 0 ? (input = e - 1) : (input = e);
				break;
			default:
				input = e.target.value;
		}
		for (let response of responses) {
			if (response.questionId === questionId) response.value = input;
		}
		updateQuestionResponses(id, responses);
	};

	const handleCheckboxChange = (questionId, optionId) => {
		console.log(questionId);
		console.log(optionId);
		let selectedResponse = { questionId: id, value: optionId };
		// TODO: Handle checkbox change
	};

	return (
		<div className='bg-white w-3/4 max-w-2xl self-center rounded-xl p-4 shadow-md grid grid-cols-12 gap-4'>
			<div className='col-span-11'>
				<p className='text-xl rounded-xl mb-4 w-full p-1'>{title}</p>
				<QuestionBody
					type={type}
					options={options}
					responses={responses}
					setResponses={setResponses}
					questionId={id}
					handleInputChange={handleInputChange}
					handleCheckboxChange={handleCheckboxChange}
				/>
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
