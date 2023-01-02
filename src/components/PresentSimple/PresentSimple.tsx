import React from 'react';
import QuizPresentSimple from './QuizPresentSimple/QuizPresentSimple';
import './PresentSimple.css';
import Typography from '@mui/material/Typography';

import ReglasGramaticalesPresentSimple from './ReglasGramaticalesPresentSimple/ReglasGramaticalesPresentSimple';
import EstructuraPresentSimple from './EstructuraPresentSimple/EstructuraPresentSimple';
import AdverbiosPresentSimple from './AdverbiosPresentSimple/AdverbiosPresentSimple';
import { QuizContextProvider } from '../../contexts/quizContext';

const PresentSimple = () => {
	return (
		<>
			<div className='container-PresentSimple'>
				{/* Titulo de la página */}
				<Typography variant='h2' component='h1' gutterBottom>
					Present Simple
				</Typography>
				{/* Descripción del Present Simple */}
				<Typography variant='body1' paragraph>
					Cuando hablamos de los diferentes tiempos verbales, tenemos que hablar
					de cómo formar el tenso, así como cuando lo usamos. Por lo tanto, en
					esta lección, como en las demás lecciones sobre los tiempos verbales,
					miraremos su estructura y uso.
				</Typography>
				{/* Reglas Gramaticales */}
				<ReglasGramaticalesPresentSimple />
				{/* Estructura */}
				<EstructuraPresentSimple />
				{/* Adverbios */}
				<AdverbiosPresentSimple />

				<Typography mt={3} variant='body1' paragraph>
					Se utiliza para hablar de generalidades o hechos científicos:
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						He doesn’t/does not eat vegetables
					</Typography>
					<Typography variant='body1' paragraph>
						Él no come verduras.
					</Typography>
					<Typography variant='body1' paragraph>
						She works in a hospital
					</Typography>
					<Typography variant='body1' paragraph>
						Ella trabaja en una hospital.
					</Typography>
					<Typography variant='body1' paragraph>
						Elephants live in Africa.
					</Typography>
					<Typography variant='body1' paragraph>
						Los elefantes viven en África.
					</Typography>
					<Typography variant='body1' paragraph>
						Bogota is in Colombia.
					</Typography>
					<Typography variant='body1' paragraph>
						Bogotá está en Colombia.
					</Typography>
				</div>
				<Typography variant='body1' paragraph>
					Se usa para eventos programados en el futuro próximo:
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						The train leaves at 10:00.
					</Typography>
					<Typography variant='body1' paragraph>
						El tren sale a las 10h.
					</Typography>
					<Typography variant='body1' paragraph>
						The party is tonight.
					</Typography>
					<Typography variant='body1' paragraph>
						La fiesta es esta noche.
					</Typography>
					<Typography variant='body1' paragraph>
						Does the festival start tomorrow?
					</Typography>
					<Typography variant='body1' paragraph>
						¿Empieza el festival mañana?
					</Typography>
				</div>
				<Typography variant='body1' paragraph>
					Se usa para instrucciones (el imperativo).
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						Open the window.
					</Typography>
					<Typography variant='body1' paragraph>
						Abre la ventana.
					</Typography>
					<Typography variant='body1' paragraph>
						Eat the vegetables.
					</Typography>
					<Typography variant='body1' paragraph>
						Come las verduras.
					</Typography>
					<Typography variant='body1' paragraph>
						Don’t cry.
					</Typography>
					<Typography variant='body1' paragraph>
						No llores.
					</Typography>
					<Typography variant='body1' paragraph>
						Do your homework.
					</Typography>
					<Typography variant='body1' paragraph>
						Haz los deberes.
					</Typography>
				</div>
			</div>
			<QuizContextProvider>
				<QuizPresentSimple />
			</QuizContextProvider>
		</>
	);
};

export { PresentSimple };
