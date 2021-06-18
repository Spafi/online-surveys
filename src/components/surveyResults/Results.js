import { Redirect } from 'react-router';
import { isAuthenticated } from '../Utils';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Question from './Question';

import { surveyUrl } from '../../BASE_URL';

const Results = ({ match }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState([]);
	const surveyId = match.params.surveyId;

	const getSurvey = async () => {
		await axios
			.get(`${surveyUrl}/${surveyId}/responses`)
			.then((response) => {
				console.log(response);
				setTitle(response.data.title);
				setDescription(response.data.description);
				setQuestions(response.data.questions);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getSurvey();
		// eslint-disable-next-line
	}, []);

	if (!isAuthenticated()) return <Redirect to='/' />;
	return (
		<div className='bg-purple-100 grid w-screen h-screen pt-16 grid-cols-6 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative'>
			{/* Left Buttons */}
			<div className='fixed h-screen w-1/6 col-span-1 p-8 flex flex-col justify-between border-gradient-t-pink-orange border-r-2 min-w-min'>
				<div className='flex flex-col gap-4'>
					{questions.map((question) => (
						<a href={`#${question.questionId}`}
							key={question.questionId}
							className='bg-white h-12 cursor-pointer shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
						>
							<div className='h-6'>{question.title}</div>
						</a>
					))}
				</div>
			</div>
			{/* END Left Buttons */}
			<div
				id='surveyForm'
				className='col-span-4 col-start-2 p-12 flex flex-col gap-4'
			>
				<div className='bg-white w-3/4 max-w-2xl self-center rounded-xl p-4 shadow-md '>
					<p className='text-3xl w-full text-center mb-4 rounded-xl py-2 '>
						{title}
					</p>
					<p className='text-lg rounded-xl px-4 w-full text-gray-700'>
						{description}
					</p>
				</div>
				{questions.map((question) => (
					<Question
						id={question.questionId}
						key={question.questionId}
						type={question.type}
						title={question.title}
						responses={question.questionResponses}
						options={question.options}
					/>
				))}
			</div>
		</div>
	);
};

export default Results;
