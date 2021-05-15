import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SurveyCreation from './components/surveyCreation/SurveyCreation';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Main}/>
				<Route path='/create' component={SurveyCreation} />
			</div>
		</Router>
	);
}

export default App;
