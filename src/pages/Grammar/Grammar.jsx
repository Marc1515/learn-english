import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import CardHome from '../../components/CardHome/CardHome';
import './Grammar.css';

const Grammar = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='section1-grammar'>
			<Typography variant='h2' component='h1' className='text-grammar-1'>
				Grammar
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-2'>
				La gramática del inglés es la estructura lógica que rige el idioma y
				permite comunicar ideas de manera clara y precisa.
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-3'>
				Básicamente se divide en dos aspectos: la
				<Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
					morfología,
				</Typography>
				que se refiere a la forma de las palabras, y la
				<Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
					sintaxis,
				</Typography>
				que se refiere a cómo se ordenan las palabras en una oración.
			</Typography>
			<Typography variant='subtitle2' className='text-grammar-4'>
				Es importante tener un buen conocimiento de la gramática del inglés para
				comunicarse eficazmente y comprender el idioma en su totalidad.
			</Typography>
			<CardHome />;
		</div>
	);
};

export { Grammar };
