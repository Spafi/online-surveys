import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SurveyCreation from './components/surveyCreation/SurveyCreation';
import SurveyResponse from './components/surveyResponse/SurveyResponse';
import UserPage from './components/userPage/UserPage';
import ResultsPage from './components/surveyResults/Results';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Main} />
				<Route path='/create' component={SurveyCreation} />
				<Route path='/respond/:surveyId' component={SurveyResponse} />
				<Route path='/user' component={UserPage} />
				<Route path='/results/:surveyId' component={ResultsPage} />
			</div>
		</Router>
	);
}

export default App;
