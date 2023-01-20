import React from 'react';
import { useContext } from 'react';
import { appContext } from '../../../contexts/appContext';
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

const ReglasGramaticalesPresentSimple = () => {
	const { expanded, handleChange } = useContext(appContext);

	function createData(subject: string, conjugation: string) {
		return { subject, conjugation };
	}

	const rows = [
		createData('I', 'talk'),
		createData('You', 'eat'),
		createData('We', 'learn'),
		createData('They', 'do'),
		createData('He', 'talks'),
		createData('she', 'eats'),
		createData('It', 'does'),
	];
	return (
		<>
			<Accordion
				expanded={expanded === 'panel1-presentSimple'}
				onChange={(event, isExpanded) =>
					handleChange(isExpanded, 'panel1-presentSimple')
				}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content-presentSimple'
					id='panel1a-header-presentSimple'
				>
					<Typography variant='h4' component='h2' gutterBottom>
						Forma
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1' paragraph>
						Para conjugar el presente simple usamos el infinitivo para los
						sujetos “I”, “you”, “we” y “they” y para las terceras personas “he”,
						“she” y “it”, añadimos una “-s” al final del verbo.
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
