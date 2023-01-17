import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardsHome from './CardsHome';
import './CardHome.css';

const CardHome = () => {
	return (
		<>
			<div className='container-wrapper-card'>
				{CardsHome.map((card) => (
					<a href={card.url} key={card.titulo}>
						<Card className='wrapper-card'>
							<CardMedia component='img' height='120' image={card.image} />
						</Card>
					</a>
				))}
			</div>
		</>
	);
};

export default CardHome;
