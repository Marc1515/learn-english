import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, CardActionArea } from '@mui/material';

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
					<a href={card.url} key={card.titulo}>
						<Card className='wrapper-card'>
							<CardActionArea>
								<CardMedia component='img' height='120' image={card.image} />
							</CardActionArea>
						</Card>
					</a>
				))}
			</div>
		</>
	);
};

export default CardHome;
