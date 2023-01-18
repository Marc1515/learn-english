import CardHome from '../../components/CardHome/CardHome';
import { Typography } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
	return (
		<>
			{/* HomePage Section 1 */}
			<Typography className='section1-home'>
				<Typography variant='h1' component='h1' className='title-cards'>
					¡Bienvenido a Learn English!
				</Typography>
				<Typography variant='subtitle2' className='text-grammar'>
					¡Bienvenido a nuestra aplicación de aprendizaje de inglés!
				</Typography>
				<Typography variant='subtitle2' className='text-grammar'>
					Con nuestra aplicación, podrás mejorar tus habilidades de inglés de
					manera eficiente y divertida. Ofrecemos una variedad de exámenes que
					duran aproximadamente 1 minuto para aprender o refrescar tus
					conocimientos, diseñados para ayudarte a mejorar tu vocabulario y
					gramática.
				</Typography>
			</Typography>
			{/* HomePage Section 2 */}
			<Typography className='section2-home'>
				<Typography variant='h1' component='h1' className='title-cards'>
					Gammar
				</Typography>

				<Typography variant='subtitle2' className='text-grammar'>
					La gramática del inglés es la estructura lógica que rige el idioma y
					permite comunicar ideas de manera clara y precisa. Incluye reglas para
					la formación de oraciones, el uso de verbos, sustantivos, adjetivos,
					pronombres, adverbios, preposiciones y conjunciones. Además, el inglés
					tiene un sistema de tiempos verbales complejos y diferentes modos,
					como indicativo, subjuntivo e imperativo. La gramática del inglés
					también se divide en dos aspectos: la morfología, que se refiere a la
					forma de las palabras, y la sintaxis, que se refiere a cómo se ordenan
					las palabras en una oración. Es importante tener un buen conocimiento
					de la gramática del inglés para comunicarse eficazmente y comprender
					el idioma en su totalidad.
				</Typography>
			</Typography>
			<CardHome />;
		</>
	);
};

export { HomePage };
