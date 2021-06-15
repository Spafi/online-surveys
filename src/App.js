import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SurveyCreation from './components/surveyCreation/SurveyCreation';
import SurveyResponse from './components/surveyResponse/SurveyResponse';
import UserPage from './components/userPage/UserPage';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Main} />
				<Route path='/create' component={SurveyCreation} />
				<Route path='/respond/:surveyId' component={SurveyResponse} />
				<Route path='/user' component={UserPage}/>
			</div>
		</Router>
	);
}

export default App;
