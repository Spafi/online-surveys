import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Upload } from '../surveyCreation/icons/upload.svg';

import Question from './Question';
import UUIDv4, { isAuthenticated } from '../Utils';
import { surveyUrl } from '../../BASE_URL';
import { Redirect } from 'react-router';

import React from 'react';

const SurveyResponse = ({match}) => {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState([]);
  const surveyId = match.params.surveyId;


		const updateQuestionResponses = (questionId, responses) => {
			for (let question of questions)
				if (question.questionId === questionId) question.responses = responses;
				console.log(questions);
		};

	const getSurvey = async () => {
		await axios
			.get(`${surveyUrl}/${surveyId}`)
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

	const handleRespond = () => {
		const response = {appUserId: localStorage.getItem('userId')}
		let responsesArray = []
		questions.forEach(question => {responsesArray.push(question.responses)})
		console.log(responsesArray)
		response.responses = responsesArray
		console.log(response);
	}

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
						responses={question.responses}
						options={question.options}
						updateQuestionResponses={updateQuestionResponses}
					/>
				))}
			</div>
			<div className='fixed right-0 h-screen w-52 p-8 flex flex-col justify-between'>
				{questions.length > 0 && (
					<div className='flex flex-col gap-4'>
						<div
							onClick={handleRespond}
							className='bg-white h-12 cursor-pointer text-lg shadow-md hover:shadow-xl flex items-center rounded-3xl pl-6 transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1'
						>
							<Upload className='h-12 pr-4 w-12' />
							<p className='-ml-2'>Respond</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SurveyResponse;
