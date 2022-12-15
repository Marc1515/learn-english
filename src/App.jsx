import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { PresentSimple } from './components/PresentSimple/PresentSimple';
import { PastSimple } from './components/PastSimple/PastSimple';
import { NotFound } from './components/NotFound/NotFound';

function App() {
	return (
		<div className='App'>
			<>
				<HashRouter>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/present-simple' element={<PresentSimple />} />
						<Route path='/past-simple' element={<PastSimple />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</HashRouter>
			</>
		</div>
	);
}

export default App;
