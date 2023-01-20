import React, { useEffect } from 'react';
import QuizPastSimple from './QuizPastSimple/QuizPastSimple';
import './PastSimple.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import estructureImg from '../../assets/pastSimpleEstructure.png';

import ReglasGramaticalesPastSimple from './ReglasGramaticalesPastSimple/ReglasGramaticalesPastSimple';
import EstructuraPastSimple from './EstructuraPastSimple/EstructuraPastSimple';
import { QuizContextProvider } from '../../contexts/quizContextPastSimple';

const PastSimple = () => {
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
					Past Simple
				</Typography>
				{/* Descripción del Present Simple */}
				<Typography
					className='presentSimple-introduction'
					variant='body1'
					paragraph
				>
					Hay muchas maneras de hablar del pasado en inglés, pero el pasado
					simple es la forma más común. El pasado simple en inglés es
					equivalente al pretérito imperfecto y pretérito indefinido del
					español. Usamos el pasado simple para acciones completas en el pasado.
					El período de tiempo de estas acciones no es importante como en el
					español. En el pasado simple hay verbos regulares y verbos
					irregulares.
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
						<ReglasGramaticalesPastSimple />
						{/* Estructura */}
						<EstructuraPastSimple />
					</div>
				</div>
				<div className='sentenceTranslated-container'>
					<div className='sentenceTranslated-container-first'>
						<Typography mt={3} variant='body1' paragraph>
							El pasado simple se utiliza para hablar de una acción concreta que
							comenzó y acabó en el pasado. En este caso equivale al pretérito
							indefinido español. Generalmente, lo usamos con adverbios de
							tiempo como “last year”, “yesterday”, “last night”…
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Tom stayed at home last night.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Tom se quedó en casa anoche.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Kate worked last Saturday.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Kate trabajó el sábado pasado.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I didn't go to the party yesterday.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No fui a la fiesta ayer.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Did they walk to school this morning?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Han andado a la escuela esta mañana?
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-second'>
						<Typography variant='body1' paragraph>
							Se usa el pasado simple para un serie de acciones en el pasado.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I received the good news and immediately called my husband.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Recibí la buena noticia y llamé de inmediato a mi marido.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He studied for an hour in the morning, worked all afternoon
									and didn't return home until 10 at night.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Estudió durante una hora por la mañana, trabajó toda la tarde
									y no regresó a casa hasta las 10 de la noche.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-third'>
						<Typography variant='body1' paragraph>
							También lo usamos para acciones repetidas o habituales en el
							pasado, como se usa el pretérito imperfecto español.
						</Typography>
						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									We always traveled to Cancun for vacation when we were young
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Siempre viajábamos a Cancun durante las vacaciones cuando
									éramos jóvenes.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He walked 5 kilometers every day to work.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Caminaba 5 kilómetros hasta el trabajo cada día.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-fourth'>
						<Typography variant='body1' paragraph>
							Lo usamos para narraciones o acciones de períodos de largo tiempo
							en el pasado, como el pretérito imperfecto español.
						</Typography>
						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I worked for many years in a museum.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Trabajaba en un museo durante muchos años.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									She didn't eat meat for years.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No comía carne durante años.
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-fifth'>
						<Typography variant='body1' paragraph>
							Se utiliza para hablar de generalidades o hechos del pasado.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									The Aztec lived in Mexico.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Los aztecas vivían en México
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I played the guitar when I was a child.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Tocaba la guitarra cuando era niño.
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
					¡Ahora que ya sabes las normas básicas del Past Simple, puedes
					realizar el Quiz tantas veces como quieras para mejorar aún más!
				</Typography>
			</div>
			<div className='quiz-container'>
				<QuizContextProvider>
					<QuizPastSimple />
				</QuizContextProvider>
			</div>
		</>
	);
};

export { PastSimple };
