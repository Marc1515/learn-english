import React from 'react';
import QuizPresentSimple from './QuizPresentSimple/QuizPresentSimple';
import './PastSimple.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import ReglasGramaticalesPresentSimple from './ReglasGramaticalesPastSimple/ReglasGramaticalesPastSimple';
import EstructuraPresentSimple from './EstructuraPastSimple/EstructuraPastSimple';
import AdverbiosPresentSimple from './AdverbiosPastSimple/AdverbiosPastSimple';
import { QuizContextProvider } from '../../contexts/quizContext';
import estructureImg from '../../assets/pastSimpleEstructure.png';

const PastSimple = () => {
	return (
		<>
			<div className='container-PresentSimple'>
				{/* Titulo de la página */}
				<Typography variant='h2' component='h1' gutterBottom>
					Past Simple
				</Typography>
				{/* Descripción del Present Simple */}
				<Typography variant='body1' paragraph>
					Hay muchas maneras de hablar del pasado en inglés, pero el pasado
					simple es la forma más común. El pasado simple en inglés es
					equivalente al pretérito imperfecto y pretérito indefinido del
					español. Usamos el pasado simple para acciones completas en el pasado.
					El período de tiempo de estas acciones no es importante como en el
					español. En el pasado simple hay verbos regulares y verbos
					irregulares.
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
				{/* Reglas Gramaticales */}
				<ReglasGramaticalesPresentSimple />
				{/* Estructura */}
				<EstructuraPresentSimple />
				{/* Adverbios */}
				<AdverbiosPresentSimple />

				<Typography mt={3} variant='body1' paragraph>
					El pasado simple se utiliza para hablar de una acción concreta que
					comenzó y acabó en el pasado. En este caso equivale al pretérito
					indefinido español. Generalmente, lo usamos con adverbios de tiempo
					como “last year”, “yesterday”, “last night”…
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						Tom stayed at home last night.
					</Typography>
					<Typography variant='body1' paragraph>
						Tom se quedó en casa anoche.
					</Typography>
					<Typography variant='body1' paragraph>
						Kate worked last Saturday.
					</Typography>
					<Typography variant='body1' paragraph>
						Kate trabajó el sábado pasado.
					</Typography>
					<Typography variant='body1' paragraph>
						I didn't go to the party yesterday.
					</Typography>
					<Typography variant='body1' paragraph>
						No fui a la fiesta ayer.
					</Typography>
					<Typography variant='body1' paragraph>
						Did they walk to school this morning?
					</Typography>
					<Typography variant='body1' paragraph>
						¿Han andado a la escuela esta mañana?
					</Typography>
				</div>
				<Typography variant='body1' paragraph>
					Se usa el pasado simple para un serie de acciones en el pasado.
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						I received the good news and immediately called my husband.
					</Typography>
					<Typography variant='body1' paragraph>
						Recibí la buena noticia y llamé de inmediato a mi marido.
					</Typography>
					<Typography variant='body1' paragraph>
						He studied for an hour in the morning, worked all afternoon and
						didn't return home until 10 at night.
					</Typography>
					<Typography variant='body1' paragraph>
						Estudió durante una hora por la mañana, trabajó toda la tarde y no
						regresó a casa hasta las 10 de la noche.
					</Typography>
				</div>
				<Typography variant='body1' paragraph>
					También lo usamos para acciones repetidas o habituales en el pasado,
					como se usa el pretérito imperfecto español.
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						We always traveled to Cancun for vacation when we were young
					</Typography>
					<Typography variant='body1' paragraph>
						Siempre viajábamos a Cancun durante las vacaciones cuando éramos
						jóvenes.
					</Typography>
					<Typography variant='body1' paragraph>
						He walked 5 kilometers every day to work.
					</Typography>
					<Typography variant='body1' paragraph>
						Caminaba 5 kilómetros hasta el trabajo cada día.
					</Typography>
				</div>

				<Typography variant='body1' paragraph>
					Lo usamos para narraciones o acciones de períodos de largo tiempo en
					el pasado, como el pretérito imperfecto español.
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						I worked for many years in a museum.
					</Typography>
					<Typography variant='body1' paragraph>
						Trabajaba en un museo durante muchos años.
					</Typography>
					<Typography variant='body1' paragraph>
						She didn't eat meat for years.
					</Typography>
					<Typography variant='body1' paragraph>
						No comía carne durante años.
					</Typography>
				</div>

				<Typography variant='body1' paragraph>
					Se utiliza para hablar de generalidades o hechos del pasado.
				</Typography>

				<div className='adverbs-container'>
					<Typography variant='body1' paragraph>
						The Aztec lived in Mexico.
					</Typography>
					<Typography variant='body1' paragraph>
						Los aztecas vivían en México
					</Typography>
					<Typography variant='body1' paragraph>
						I played the guitar when I was a child.
					</Typography>
					<Typography variant='body1' paragraph>
						Tocaba la guitarra cuando era niño.
					</Typography>
				</div>
			</div>
			<QuizContextProvider>
				<QuizPresentSimple />
			</QuizContextProvider>
		</>
	);
};

export { PastSimple };
