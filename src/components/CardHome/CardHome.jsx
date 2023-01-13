import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardsHome from './CardsHome';

const CardHome = () => {
	return (
		<>
			<Typography variant='h1' component='h1' className='title-cards'>
				Contenido
			</Typography>
			<div className='container-wrapper-card'>
				{CardsHome.map((card) => (
					<div className='wrapper-card' key={card.titulo}>
						<Card>
							<CardContent>
								<a href={card.url}>{card.titulo}</a>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default CardHome;
