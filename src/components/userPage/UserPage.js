import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import axios from 'axios';

import { userSurveysUrl } from '../../BASE_URL';
import SurveyCard from './SurveyCard';
import{ isAuthenticated } from '../Utils';



const UserPage = () => {
	const [surveys, setSurveys] = useState([]);

	const getSurvey = async () => {
		const userId = localStorage.getItem('userId');
		await axios
			.get(`${userSurveysUrl}/${userId}`)
			.then((response) => {
				setSurveys(response.data);
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
		<div className='bg-purple-100 grid w-screen h-screen pt-16 scrollbar-thin justify-center scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full '>
			<div className='grid grid-cols-4 gap-4 items-stretch p-4 pt-12'>
				{surveys.map((survey) => (
					<SurveyCard
						key={survey.surveyId}
						title={survey.title}
						description={survey.description}
						questionsCount={survey.questions.length}
					/>
				))}
			</div>
		</div>
	);
};

export default UserPage;
