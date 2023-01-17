import CardHome from '../../components/CardHome/CardHome';
import { Typography } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
	return (
		<>
			<Typography variant='h1' component='h1' className='title-cards'>
				Grammar
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
			<CardHome />;
		</>
	);
};

export { HomePage };
