import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import './AdverbiosPastSimple.css';

const AdverbiosPresentSimple = () => {
	function createData(adverbio: string, traduccion: string) {
		return { adverbio, traduccion };
	}

	const rows = [
		createData('always', 'siempre'),
		createData('every day', 'cada día'),
		createData('usually', 'normalmente'),
		createData('often', 'a menudo'),
		createData('sometimes ', 'a veces'),
		createData('rarely', 'raramente'),
		createData('hardly ever', 'casi nunca'),
		createData('never', 'nunca'),
	];
	return (
		<>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography variant='h4' component='h2' gutterBottom>
						Adverbios
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1' paragraph>
						El presente simple se utiliza para hablar de cosas que suceden
						habitualmente. A diferencia con el español, no se usa el presente
						simple para hablar sobre algo que está pasando en el momento en el
						que hablamos. Se suele utilizar el presente simple con adverbios de
						tiempo:
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Adverbio</TableCell>
									<TableCell align='left'>traducción</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.adverbio}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											{row.adverbio}
										</TableCell>
										<TableCell align='left'>{row.traduccion}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Typography mt={3} variant='body1' paragraph>
						Ejemplos:
					</Typography>

					<div className='adverbs-container'>
						<Typography variant='body1' paragraph>
							I <strong>always</strong> talk to my mother on Sunday.
						</Typography>
						<Typography variant='body1' paragraph>
							Siempre hablo con mi madre el domingo.
						</Typography>
						<Typography variant='body1' paragraph>
							He <strong>never</strong> eats vegetables.
						</Typography>
						<Typography variant='body1' paragraph>
							Nunca come las verduras.
						</Typography>
						<Typography variant='body1' paragraph>
							They <strong>usually</strong> learn something new in class.
						</Typography>
						<Typography variant='body1' paragraph>
							Normalmente aprenden algo nuevo en la clase.
						</Typography>
					</div>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default AdverbiosPresentSimple;
