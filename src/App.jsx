import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<>
				<HashRouter>
					<Routes>
						<Route path='/' />
						<Route path='/present-simple' />
						<Route path='/past-simple' />
						<Route path='*' />
					</Routes>
				</HashRouter>
			</>
		</div>
	);
}

export default App;
