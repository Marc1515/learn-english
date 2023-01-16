import React from 'react';
import QuizPresentContinuous from './QuizPresentContinuous/QuizPresentContinuous';
import './PresentContinuous.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import estructureImg from '../../assets/present-continuous.jpg';

import ReglasGramaticalesPresentContinuous from './ReglasGramaticalesPresentContinuous/ReglasGramaticalesPresentContinuous';
import EstructuraPresentContinuous from './EstructuraPresentContinuous/EstructuraPresentContinuous';
import { QuizContextProvider } from '../../contexts/quizContextPresentContinuous';

const PresentContinuous = () => {
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
					Present Continuous
				</Typography>
				{/* Descripción del Present Simple */}
				<Typography
					className='presentSimple-introduction'
					variant='body1'
					paragraph
				>
					El presente continuo en inglés se utiliza para hablar de acciones que
					están ocurriendo en el momento en el que se habla. Se construye
					utilizando el verbo "to be" en presente (am, is, are) seguido del
					verbo principal con la terminación "-ing" (por ejemplo, "I am
					playing"). También se puede utilizar para hablar de planes futuros que
					están programados de manera segura. Ejemplo: "I am seeing my doctor
					tomorrow."
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
						<ReglasGramaticalesPresentContinuous />
						{/* Estructura */}
						<EstructuraPresentContinuous />
					</div>
				</div>
				<div className='sentenceTranslated-container'>
					<div className='sentenceTranslated-container-first'>
						<Typography mt={3} variant='body1' paragraph>
							El presente continuo se utiliza para hablar sobre algo que está
							pasando en el momento en el que hablamos.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I’m studying now
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Estoy estudiando ahora.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He’s eating at the moment.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Está comiendo en este momento.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Is it raining?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Está lloviendo?
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-second'>
						<Typography variant='body1' paragraph>
							También lo usamos para hablar de algo que está sucediendo en la
							actualidad pero no necesariamente cuando hablamos. En este caso,
							se utilizan expresiones de tiempo como “currently”, “lately” o
							“these days”.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									They’re learning English.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Están aprendiendo inglés.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									She’s currently looking for a job.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Actualmente está buscando un trabajo.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Are you working much lately?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Estás trabajando mucho últimamente?
								</Typography>
							</li>
						</ul>
					</div>

					<div className='sentenceTranslated-container-third'>
						<Typography variant='body1' paragraph>
							Usamos el presente continuo para hablar de algo que está ya
							decidido que se hará en el futuro próximo. Su uso indica que es
							bastante seguro que lo planificado sucederá.
						</Typography>

						<ul>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									I’m going to the party tonight.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Voy a la fiesta esta noche.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									He’s not [He isn’t] coming to class tomorrow.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									No viene a la clase manaña.
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									Are you working next week?
								</Typography>
							</li>
							<li>
								{' '}
								<Typography variant='body1' paragraph>
									¿Trabajas la semana que viene?
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
					¡Ahora que ya sabes las normas básicas del Present Continuous, puedes
					realizar el Quiz tantas veces como quieras para mejorar aún más!
				</Typography>
			</div>
			<div className='quiz-container'>
				<QuizContextProvider>
					<QuizPresentContinuous />
				</QuizContextProvider>
			</div>
		</>
	);
};

export { PresentContinuous };
