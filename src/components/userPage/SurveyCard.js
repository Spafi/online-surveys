const surveyCard = ({ title, description, questionsCount }) => {
	return (
		<div className='bg-white rounded-xl px-4 shadow-md cursor-pointer max-h-32 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
			<p className='text-2xl w-full mb-2 pt-4'>{title}</p>
			<p className='text-md w-full text-gray-700'>{description}</p>
			<p className='text-xs py-2'>
				{questionsCount} {questionsCount > 1 ? 'questions' : 'question'}
			</p>
		</div>
	);
};

export default surveyCard;
