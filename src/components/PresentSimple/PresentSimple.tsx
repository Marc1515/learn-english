import React from 'react';
import QuizPresentSimple from './QuizPresentSimple/QuizPresentSimple';
import './PresentSimple.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import estructureImg from '../../assets/presentSimpleEstructure.png';

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
				<Typography variant='h4' component='h2' gutterBottom>
					Reglas Gramaticales
				</Typography>
				<Box
					component='img'
					gap={1}
					mt={2}
					mb={4}
					sx={{
						width: '100%',
						height: '100%',
					}}
					src={estructureImg}
				/>
				<div className='section1-container'>
					{/* Reglas Gramaticales */}
					<ReglasGramaticalesPresentSimple />
					{/* Estructura */}
					<EstructuraPresentSimple />
					{/* Adverbios */}
					<AdverbiosPresentSimple />
				</div>
				<div className='sentenceTranslated-container'>
					<div className='sentenceTranslated-container-first'>
						<Typography mt={3} variant='body1' paragraph>
							Se utiliza para hablar de generalidades o hechos científicos:
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He doesn’t/does not eat vegetables
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Él no come verduras.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									She works in a hospital
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Ella trabaja en una hospital.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Elephants live in Africa.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Los elefantes viven en África.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Bogota is in Colombia.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Bogotá está en Colombia.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-second'>
						<Typography variant='body1' paragraph>
							Se usa para eventos programados en el futuro próximo:
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									The train leaves at 10:00.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									El tren sale a las 10h.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									The party is tonight.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									La fiesta es esta noche.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Does the festival start tomorrow?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Empieza el festival mañana?
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-third'>
						<Typography variant='body1' paragraph>
							Se usa para instrucciones (el imperativo).
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Open the window.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Abre la ventana.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Eat the vegetables.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Come las verduras.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Don’t cry.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No llores.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Do your homework.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Haz los deberes.
								</Typography>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<QuizContextProvider>
				<QuizPresentSimple />
			</QuizContextProvider>
		</>
	);
};

export { PresentSimple };
