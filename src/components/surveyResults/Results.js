import { Redirect } from 'react-router';
import { isAuthenticated } from '../Utils';
import axios from 'axios';
import React, { useEffect } from 'react';

import { surveyUrl } from '../../BASE_URL';

const Results = ({match}) => {
	const surveyId = match.params.surveyId;
	const getSurvey = async () => {
		await axios
			.get(`${surveyUrl}/${surveyId}/responses`)
			.then((response) => {
				console.log(response);
				
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
      
    </div>
	);
};

export default Results;
