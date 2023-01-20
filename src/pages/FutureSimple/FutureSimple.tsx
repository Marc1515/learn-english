import React, { useEffect } from 'react';
import QuizFutureSimple from './QuizFutureSimple/QuizFutureSimple';
import './FutureSimple.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import estructureImg from '../../assets/futureSimple.png';

import ReglasGramaticalesFutureSimple from './ReglasGramaticalesFutureSimple/ReglasGramaticalesFutureSimple';
import EstructuraFutureSimple from './EstructuraFutureSimple/EstructuraFutureSimple';
import { QuizContextProvider } from '../../contexts/quizContextFutureSimple';

const FutureSimple = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='container-PresentSimple'>
				{/* Titulo de la página */}
				<Typography
					className='presentSimple-title'
					variant='h2'
					component='h1'
					gutterBottom
				>
					Future Simple
				</Typography>
				{/* Descripción del Present Simple */}
				<Typography
					className='presentSimple-introduction'
					variant='body1'
					paragraph
				>
					El Future Simple en inglés se utiliza para hablar de acciones o
					eventos que ocurrirán en el futuro. Se construye con el verbo auxiliar
					"will" + el verbo base. Por ejemplo, "I will go to the store" (Iré a
					la tienda). También se puede usar "shall" con los pronombres "I" y
					"we" para mostrar una intención o una oferta. Por ejemplo, "Shall we
					go to the movies?" (¿Vamos al cine?)
				</Typography>
				<Typography
					className='titulo-reglasGramaticales'
					variant='h5'
					component='h2'
					gutterBottom
				>
					Reglas Gramaticales
				</Typography>
				<div className='container-imagen-principal'>
					<Box
						className='imagen-principal'
						component='img'
						src={estructureImg}
					/>
				</div>
				<div className='section1-container-wrapper'>
					<div className='section1-container'>
						{/* Reglas Gramaticales */}
						<ReglasGramaticalesFutureSimple />
						{/* Estructura */}
						<EstructuraFutureSimple />
					</div>
				</div>
				<div className='sentenceTranslated-container'>
					<div className='sentenceTranslated-container-first'>
						<Typography mt={3} variant='body1' paragraph>
							Se usa “will” con acciones voluntarias:
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Will you help me move?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Me ayudarás a mudarme?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									They will clean their rooms.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Limpiarán sus habitaciones.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									She won’t work with Paul.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No trabajará con Paul.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-second'>
						<Typography variant='body1' paragraph>
							Se utiliza “will” para expresar una promesa:
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									When I am president, I will lower taxes.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Cuando sea presidente, bajaré los impuestos.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He promises he will call when he arrives.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Promete que llamará cuando llegue.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-third'>
						<Typography variant='body1' paragraph>
							Se usa “going to” para planes. Se indica la intención de hacer
							algo.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									We are going to have a party tonight.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Vamos a dar una fiesta esta noche.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Richard is going to take an English class.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Richard va a realizar un clase de inglés.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Are they going to play football later?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Van a jugar a fútbol luego?
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-fourth'>
						<Typography variant='body1' paragraph>
							Se puede usar “will” o “going to” para hacer predicciones. Cuando
							hay evidencia de que algo va a pasar usamos “going to”.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									It will be a great party. / It is going to be a great party.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Será una fiesta genial.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									It won’t rain. / It is not going to rain.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No va a llover.
								</Typography>
							</li>
						</ul>
					</div>
				</div>
				<Typography
					py={5}
					sx={{ fontStyle: 'italic' }}
					variant='body1'
					paragraph
				>
					¡Ahora que ya sabes las normas básicas del Future Simple, puedes
					realizar el Quiz tantas veces como quieras para mejorar aún más!
				</Typography>
			</div>
			<div className='quiz-container'>
				<QuizContextProvider>
					<QuizFutureSimple />
				</QuizContextProvider>
			</div>
		</>
	);
};

export { FutureSimple };
