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
	Box,
} from '@mui/material';

const ReglasGramaticalesFutureSimple = () => {
	function createData(subject: string, verbo: string, conjugation: string) {
		return { subject, verbo, conjugation };
	}

	const rows = [
		createData('I', 'will', 'talk'),
		createData('You', 'will', 'eat'),
		createData('We', 'will', 'learn'),
		createData('They', 'will', 'do'),
		createData('He', 'will', 'talk'),
		createData('she', 'will', 'eat'),
		createData('It', 'will', 'do'),
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
						Forma
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1' paragraph>
						El Future Simple en inglés es un tiempo verbal que se usa para
						hablar de acciones o eventos que tendrán lugar en el futuro. Se
						forma con el verbo auxiliar "will" seguido del verbo base.
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sujeto</TableCell>
									<TableCell align='left'>Verbo (to be)</TableCell>
									<TableCell align='left'>Verbo</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.subject}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											{row.subject}
										</TableCell>
										<TableCell align='left'>{row.verbo}</TableCell>
										<TableCell align='left'>{row.conjugation}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default ReglasGramaticalesFutureSimple;
