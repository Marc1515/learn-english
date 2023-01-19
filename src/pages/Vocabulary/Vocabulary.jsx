import Typography from '@mui/material/Typography';
import CardVocabulary from '../../components/CardVocabulary/CardVocabulary';
import './Vocabulary.css';

const Vocabulary = () => {
	return (
		<div className='section1-vocabulary'>
			<Typography variant='h2' component='h2' className='title-cards'>
				Vocabulary
			</Typography>
			<CardVocabulary />;
		</div>
	);
};

export { Vocabulary };
