import { useEffect } from 'react';
import CardHome from '../../components/CardHome/CardHome';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import homeImage from './../../assets/homeImage.jpg';
import './HomePage.css';

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* HomePage Section 1 */}
			<div className='section1-home'>
				<Card className='homeImage'>
					<CardMedia component='img' height='120' image={homeImage} />
				</Card>

				<Typography variant='subtitle2' className='text-grammar-1'>
					¡Bienvenido a nuestra aplicación de aprendizaje de inglés!
				</Typography>
				<Typography variant='subtitle2' className='text-grammar-2'>
					Con nuestra aplicación, podrás mejorar tus habilidades de inglés de
					manera eficiente y divertida. Ofrecemos una variedad de exámenes que
					duran aproximadamente 1 minuto para aprender o refrescar tus
					conocimientos, diseñados para ayudarte a mejorar tu vocabulario y
					gramática.
				</Typography>
			</div>
			{/* HomePage Section 2 */}
			<div className='section2-home'>
				<Typography variant='h4' component='h1' className='text-grammar-3'>
					Gammar
				</Typography>

				<Typography variant='subtitle2' className='text-grammar-4'>
					La gramática del inglés es la estructura lógica que rige el idioma y
					permite comunicar ideas de manera clara y precisa.
				</Typography>
				<Typography variant='subtitle2' className='text-grammar-5'>
					Básicamente se divide en dos aspectos: la
					<Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
						morfología,
					</Typography>
					que se refiere a la forma de las palabras, y la
					<Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
						sintaxis,
					</Typography>
					que se refiere a cómo se ordenan las palabras en una oración.
				</Typography>
				<Typography variant='subtitle2' className='text-grammar-6'>
					Es importante tener un buen conocimiento de la gramática del inglés
					para comunicarse eficazmente y comprender el idioma en su totalidad.
				</Typography>
			</div>
			<CardHome />;
		</>
	);
};

export { HomePage };
