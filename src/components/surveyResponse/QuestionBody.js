import UUIDv4 from '../Utils';
import ReactStars from 'react-stars';
const QuestionBody = ({ type, options, questionId }) => {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	let questionBody;
	switch (type) {
		case 'shortAnswer':
			questionBody = (
				<div className='pl-2'>
					<input
						type='text'
						placeholder='Short answer text'
						className='w-full outline-none rounded-xl pl-2 border focus-within:border-m-pink'
					/>
				</div>
			);
			break;

		case 'longAnswer':
			questionBody = (
				<div className='pl-2 outline-none'>
					<textarea
						type='text'
						placeholder='Long answer text'
						className='w-full border rounded-xl pl-2 outline-none focus-within:border-m-pink'
					/>
				</div>
			);
			break;

		case 'rating':
			let boundaries = [options[0].value, options[1].value];
			let from = Math.min(...boundaries);
			let to = Math.max(...boundaries);
			questionBody = (
				<div className='pl-2 outline-none'>
					<div className='flex items-center justify-center'>
						<span className='px-4 text-2xl'>{from}</span>

						{from === 0 && (
							<ReactStars
								count={to + 1}
								size={36}
								half={false}
								onChange={ratingChanged}
							/>
						)}
						{from === 1 && (
							<ReactStars count={to} size={36} half={false} onChange={ratingChanged} />
						)}
						<span className='px-4 text-2xl'>{to}</span>
					</div>
				</div>
			);
			break;

		case 'multipleChoice':
			questionBody = (
				<>
					<div className='pl-2 flex flex-col gap-2'>
						{options.map((option) => (
							<div key={option.optionId} className='flex flex-row'>
								<input type='checkbox' name='checkbox' className='h-5 w-5' />
								<p className='ml-2 outline-none focus-within:border-m-red w-4/5'>
									{option.value}
								</p>
							</div>
						))}
					</div>
				</>
			);
			break;

		case 'singleChoice':
			questionBody = (
				<>
					<div className='pl-2 flex flex-col gap-2'>
						{options.map((option) => (
							<div key={option.optionId} className='flex flex-row'>
								<input type='radio' name='radio' className='h-5 w-5' />
								<label htmlFor='radio' className='ml-2 w-4/5'>
									{option.value}
								</label>
							</div>
						))}
					</div>
				</>
			);
			break;

		default:
			questionBody = '';
	}
	return questionBody;
};

export default QuestionBody;
