import { useEffect } from 'react';
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
				<div className='home-sentences-container'>
					<Typography variant='subtitle2' className='text-grammar-1'>
						¡Bienvenido a nuestra aplicación de aprendizaje de inglés!
					</Typography>
					<Typography variant='subtitle2' className='text-grammar-2'>
						Con nuestra aplicación, podrás mejorar tus habilidades de inglés de
						manera eficiente y divertida.
					</Typography>
					<Typography variant='subtitle2' className='text-grammar-3'>
						Ofrecemos una variedad de exámenes que duran aproximadamente 1
						minuto para aprender y refrescar tus conocimientos, diseñados para
						ayudarte a mejorar tu vocabulario y gramática.
					</Typography>
				</div>
			</div>
			{/* HomePage Section 2 */}
		</>
	);
};

export { HomePage };
