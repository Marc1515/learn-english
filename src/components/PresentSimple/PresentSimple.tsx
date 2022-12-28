import React from 'react';
import Quiz from '../Quiz/Quiz';
import './PresentSimple.css';
import Typography from '@mui/material/Typography';

import ReglasGramaticalesPresentSimple from './ReglasGramaticalesPresentSimple/ReglasGramaticalesPresentSimple';
import EstructuraPresentSimple from './EstructuraPresentSimple/EstructuraPresentSimple';


const PresentSimple = () => {


	function createData(
  subject: string,
  conjugation: string,

) {
  return { subject, conjugation};
}

const rows = [
  createData('I', 'talk'),
  createData('You','eat' ),
  createData('We','learn' ),
  createData('They','do' ),
  createData('He', 'talks'),
  createData('she', 'eats'),
  createData('It', 'does'),
];


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
				
			</div>
			<Quiz />
		</>
	);
};

export { PresentSimple };
