import { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './Question';
import UUIDv4, { isAuthenticated } from '../Utils';
import { surveyUrl } from '../../BASE_URL';
import { Redirect } from 'react-router';

import React from 'react';

const SurveyResponse = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState([]);

	const getSurvey = async () => {
		await axios
			.get(
				'http://localhost:8080/api/v1/survey/7a8936d6-c534-45a0-a217-da892d2d278d'
			)
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
    
  }, [])

	return (
		<div className='bg-purple-100 grid w-screen h-screen pt-16 grid-cols-6 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative'>
			<div
				id='surveyForm'
				className='col-span-4 col-start-2 p-12 flex flex-col gap-4'
			>
				<div className='bg-white w-3/4 max-w-2xl self-center rounded-xl p-4 shadow-md '>
					<p className='text-3xl w-full text-center mb-4 rounded-xl e py-2 '>
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
						options={question.options}
					/>
				))}
			</div>
		</div>
	);
};

export default SurveyResponse;
