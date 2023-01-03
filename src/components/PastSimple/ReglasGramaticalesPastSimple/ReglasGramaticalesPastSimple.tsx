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
import estructureImg from '../../../assets/presentSimpleEstructure.png';

const ReglasGramaticalesPresentSimple = () => {
	function createData(subject: string, conjugation: string) {
		return { subject, conjugation };
	}

	const rows = [
		createData('I', 'wanted'),
		createData('You', 'learned'),
		createData('We', 'were'),
		createData('They', 'stayed'),
		createData('He', 'was'),
		createData('she', 'showed'),
		createData('It', 'did'),
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
						Para formar el pasado simple con verbos regulares, usamos el
						infinitivo y añadimos la terminación “-ed”. La forma es la misma
						para todas las personas (I, you, he, she, it, we, they).
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sujeto</TableCell>
									<TableCell align='left'>Conjugación</TableCell>
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

export default ReglasGramaticalesPresentSimple;
