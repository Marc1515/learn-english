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

const ReglasGramaticalesPresentContinuous = () => {
	const { expanded, handleChange } = useContext(appContext);

	function createData(subject: string, tobe: string, conjugation: string) {
		return { subject, tobe, conjugation };
	}

	const rows = [
		createData('I', 'am', 'talking'),
		createData('You', 'are', 'eating'),
		createData('We', 'are', 'learning'),
		createData('They', 'are', 'doing'),
		createData('He', 'is', 'talking'),
		createData('she', 'is', 'eating'),
		createData('It', 'is', 'doing'),
	];
	return (
		<>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
			>
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
						El presente continuo en inglés es un tiempo verbal que se utiliza
						para describir acciones que están sucediendo en el momento presente.
						Se forma con el verbo "to be" en presente (am, is, are) seguido del
						verbo principal con la terminación "-ing" (por ejemplo, "She is
						eating dinner").
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sujeto</TableCell>
									<TableCell align='left'>verbo (to be)</TableCell>
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
										<TableCell align='left'>{row.tobe}</TableCell>
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

export default ReglasGramaticalesPresentContinuous;
