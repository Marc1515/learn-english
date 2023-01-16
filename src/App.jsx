import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PresentSimple } from './pages/PresentSimple/PresentSimple';
import { PastSimple } from './pages/PastSimple/PastSimple';
import { PresentContinuous } from './pages/PresentContinuous/PresentContinuous';
import { FutureSimple } from './pages/FutureSimple/FutureSimple';
import { NotFound } from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<>
				<HashRouter>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/present-simple' element={<PresentSimple />} />
						<Route path='/past-simple' element={<PastSimple />} />
						<Route
							path='/present-countinuous'
							element={<PresentContinuous />}
						/>
						<Route path='/future-simple' element={<FutureSimple />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</HashRouter>
			</>
		</div>
	);
}

export default App;
