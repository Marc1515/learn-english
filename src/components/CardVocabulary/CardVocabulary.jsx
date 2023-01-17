import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardsVocabulary from './CardsVocabulary';

const CardVocabulary = () => {
	return (
		<>
			<Typography variant='h1' component='h1' className='title-cards'>
				Content
			</Typography>
			<div className='container-wrapper-card'>
				{CardsVocabulary.map((card) => (
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

export default CardVocabulary;
