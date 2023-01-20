import Typography from '@mui/material/Typography';
import CardVocabulary from '../../components/CardVocabulary/CardVocabulary';
import './Vocabulary.css';

const Vocabulary = () => {
	return (
		<div className='section1-vocabulary'>
			<Typography variant='h2' component='h2' className='text-grammar-1'>
				Vocabulary
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-2'>
				Para mejorar su vocabulario en inglés, hay varias estrategias que puede
				utilizar. Una de ellas es aprender nuevas palabras y frases a diario.
				Esto se puede hacer a través de un diccionario, una lista de palabras o
				incluso una aplicación de aprendizaje de idiomas.
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-3'>
				Otra estrategia es leer en inglés a menudo. Esto puede ser un libro, un
				periódico o incluso una revista. Al leer, estará expuesto a una variedad
				de palabras y expresiones nuevas que podrá añadir a su vocabulario.
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-4'>
				Además, también es importante practicar lo que ha aprendido. Puede hacer
				esto hablando con personas que hablan inglés, escribiendo en inglés o
				incluso jugando juegos de palabras en inglés.
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-5'>
				En resumen, mejorar su vocabulario en inglés es esencial para
				comunicarse de manera efectiva en este idioma. Esto se puede lograr a
				través de una combinación de aprendizaje diario, lectura y práctica.
			</Typography>
			<CardVocabulary />;
		</div>
	);
};

export { Vocabulary };
