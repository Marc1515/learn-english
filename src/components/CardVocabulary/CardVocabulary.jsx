import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardsVocabulary from './CardsVocabulary';
import './CardVocabulary.css';

const CardVocabulary = () => {
	return (
		<>
			<div className='container-wrapper-card'>
				{CardsVocabulary.map((card) => (
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

export default CardVocabulary;
