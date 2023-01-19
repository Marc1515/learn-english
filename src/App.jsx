import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PresentSimple } from './pages/PresentSimple/PresentSimple';
import { PastSimple } from './pages/PastSimple/PastSimple';
import { PresentContinuous } from './pages/PresentContinuous/PresentContinuous';
import { FutureSimple } from './pages/FutureSimple/FutureSimple';
import IrregularVerbs from './pages/IrregularVerbs/IrregularVerbs.jsx';
import PhrasalVerbs from './pages/PhrasalVerbs/PhrasalVerbs.jsx';
import Animals from './pages/Animals/Animals.jsx';
import Food from './pages/Food/Food.jsx';
import HumanBody from './pages/HumanBody/HumanBody.jsx';
import Professions from './pages/Professions/Professions.jsx';
import { Vocabulary } from './pages/Vocabulary/Vocabulary';
import { NotFound } from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AppContextProvider } from './contexts/appContext';

function App() {
	return (
		<div className='App'>
			<>
				<HashRouter>
					<Header />
					<AppContextProvider>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/present-simple' element={<PresentSimple />} />
							<Route path='/past-simple' element={<PastSimple />} />
							<Route
								path='/present-countinuous'
								element={<PresentContinuous />}
							/>
							<Route path='/future-simple' element={<FutureSimple />} />
							<Route path='/irregular-verbs' element={<IrregularVerbs />} />
							<Route path='/phrasal-verbs' element={<PhrasalVerbs />} />
							<Route path='/vocabulary' element={<Vocabulary />} />
							<Route path='/animals' element={<Animals />} />
							<Route path='/food' element={<Food />} />
							<Route path='/humanBody' element={<HumanBody />} />
							<Route path='/professions' element={<Professions />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</AppContextProvider>
					<Footer />
				</HashRouter>
			</>
		</div>
	);
}

export default App;
