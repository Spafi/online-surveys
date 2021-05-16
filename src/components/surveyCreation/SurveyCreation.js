import { useState } from 'react';
import { ReactComponent as LongText } from './icons/long-text.svg';
import { ReactComponent as ShortText } from './icons/short-text.svg';
import { ReactComponent as Rating } from './icons/rating.svg';
import { ReactComponent as Radio } from './icons/radio.svg';
import { ReactComponent as Checkbox } from './icons/checkbox.svg';

import Question from './Question';
import UUIDv4 from '../Utils';

const SurveyCreation = (props) => {
	// eslint-disable-next-line
	const [title, setTitle] = useState('');
	// eslint-disable-next-line
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState([]);

	const updateQuestionOptions = (questionId, options) => {
		for (let question of questions)
			if (question.id === questionId) question.options = options;
	};

	const updateQuestionSelect = (questionId, select) => {
		for (let question of questions)
			if (question.id === questionId) question.select = select;
	};
	const onChangeTitle = (e) => {
		const title = e.target.value;
		setTitle(title);
	};
	const onChangeDescription = (e) => {
		const description = e.target.value;
		setDescription(description);
	};

	const handleQuestionTitleChange = (e, questionId) => {
		const questionTitle = e.target.value;
		for (let question of questions)
			if (question.id === questionId) question.title = questionTitle;
	};

	const removeQuestion = (questionId) => {
		const newQuestions = questions.filter(
			(question) => question.id !== questionId
		);
		setQuestions(newQuestions);
	};

	const duplicateQuestion = (questionId) => {};

	const handleSave = () => {
		let surveyContent = { title, description, questions };
		console.log(surveyContent);
	};

	return (
		<div className='bg-purple-100 grid w-screen h-screen pt-16 grid-cols-6 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative'>
			{/* Left Buttons */}
			<div className='fixed h-screen w-1/6 col-span-1 p-8 flex flex-col justify-between border-gradient-t-pink-orange border-r-2'>
				<div className='flex flex-col gap-4'>
					<div
						onClick={() =>
							setQuestions([
								...questions,
								{
									id: UUIDv4(),
									type: 'shortAnswer',
								},
							])
						}
						className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1'
					>
						<ShortText className='h-12 pr-4' />
						<p>Short Answer</p>
					</div>

					<div
						onClick={() =>
							setQuestions([
								...questions,
								{
									id: UUIDv4(),
									type: 'longAnswer',
								},
							])
						}
						className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'
					>
						<LongText className='h-12 pr-4' />
						<p>Long Answer</p>
					</div>

					<div
						onClick={() =>
							setQuestions([
								...questions,
								{
									id: UUIDv4(),
									type: 'rating',
								},
							])
						}
						className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'
					>
						<Rating className='h-12 pr-4' />
						<p>Rating</p>
					</div>

					<div
						onClick={() =>
							setQuestions([
								...questions,
								{
									id: UUIDv4(),
									type: 'multipleChoice',
								},
							])
						}
						className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'
					>
						<Checkbox className='h-6 w-12' />
						<p>Multiple Choice</p>
					</div>

					<div
						onClick={() =>
							setQuestions([
								...questions,
								{
									id: UUIDv4(),
									type: 'singleChoice',
								},
							])
						}
						className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'
					>
						<Radio className='h-8 w-12 pr-4 pl-3' />
						<p>Single Choice</p>
					</div>
				</div>
				{questions.length > 0 && (
					<div className='pl-8 pb-20 flex justify-between w-full'>
						<button
							onClick={handleSave}
							className='bg-m-orange text-white font-bold text-xl h-8 px-4 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1'
						>
							Save
						</button>
						<button className='bg-m-red text-white font-bold text-xl h-8 px-4 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1'>
							Send
						</button>
					</div>
				)}
			</div>
			{/* END Left Buttons */}

			{/* Survey Display */}
			<div
				id='surveyForm'
				className='col-span-4 col-start-2 p-12 flex flex-col gap-4 '
			>
				<div className='bg-white w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50'>
					<input
						onChange={onChangeTitle}
						type='text'
						placeholder='Survey Title'
						className='text-3xl border w-full text-center mb-4 rounded-xl outline-none py-2 focus-within:border-m-pink'
					/>
					<input
						onChange={onChangeDescription}
						type='text'
						placeholder='Add description'
						className='text-lg border rounded-xl px-4 outline-none w-full focus-within:border-m-pink'
					/>
				</div>
				{questions.map((question) => (
					<Question
						id={question.id}
						key={question.id}
						type={question.type}
						onRemove={removeQuestion}
						onDuplicate={duplicateQuestion}
						onChangeQuestionTitle={handleQuestionTitleChange}
						updateQuestionOptions={updateQuestionOptions}
						updateQuestionSelect={updateQuestionSelect}
					/>
				))}
			</div>
			{/* END Survey Display */}
		</div>
	);
};
export default SurveyCreation;
