import ShortAnswer from './ShortAnswer';
import LongAnswer from './LongAnswer';
import Rating from './Rating';
import SingleChoice from './SingleChoice';
import MultipleChoice from './MultipleChoice';

const SurveyForm = () => {
	return (
		<div
			id='surveyForm'
			className='col-span-4 col-start-2 p-12 flex flex-col gap-4 '
		>
			<div className='border-2 w-3/4 self-center rounded-xl p-4 shadow-md focus-within:shadow-xl focus-within:bg-gray-50'>
				<input
					type='text'
					placeholder='Survey Title'
					className='text-3xl border-2 w-full text-center mb-4 rounded-xl outline-none py-2'
				/>
				<input
					type='text'
					placeholder='Add description'
					className='text-lg border-2 rounded-xl px-4 outline-none w-full'
				/>
			</div>
			<ShortAnswer />
			<LongAnswer />
			<Rating />
			<SingleChoice />
			<MultipleChoice />
		</div>
	);
};

export default SurveyForm;
