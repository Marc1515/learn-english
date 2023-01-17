import { Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardsHome from './CardsHome';
import './CardHome.css';

const CardHome = () => {
	return (
		<>
			<Typography variant='h1' component='h1' className='title-cards'>
				Grammar
			</Typography>
			<div className='container-wrapper-card'>
				{CardsHome.map((card) => (
					<div className='wrapper-card' key={card.titulo}>
						<Card>
							<CardContent>
								<a href={card.url}>
									<Box component='img' src={card.image} />
								</a>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default CardHome;
