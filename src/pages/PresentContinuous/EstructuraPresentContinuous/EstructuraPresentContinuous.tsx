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
} from '@mui/material';

const EstructuraPresentContinuous = () => {
	const { expanded, handleChange } = useContext(appContext);

	function createData(subject: string, verbo: string, conjugation: string) {
		return { subject, verbo, conjugation };
	}

	const afirmativeForm = [
		createData('I', 'am', 'studying'),
		createData('she', 'is', 'playing'),
		createData('They', 'are', 'writing'),
	];

	const negativeForm = [
		createData('I', 'am not watching ', 'tv'),
		createData('she', ` isn't listening`, 'tv'),
		createData('You', `aren't going`, 'to the gym'),
	];

	const interrogativeForm = [
		createData('Am', 'I', 'studying?'),
		createData('Is', 'she', 'playing?'),
		createData('Are', 'you', 'reading?'),
	];

	return (
		<div className='prueba'>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography variant='h4' component='h2' gutterBottom>
						Estructura
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1' paragraph>
						La manera más simple de comprender el presente continuous es
						aprendiendo cómo están estructuradas las oraciones en este tiempo
						verbal. Estas pueden ser afirmativas, negativas o en forma
						interrogativa, tal como se puede ver a continuación:
					</Typography>
					{/* Estructura afirmativa */}
					<Typography mt={3} variant='h5' component='h2' gutterBottom>
						Estructura afirmativa
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
								{afirmativeForm.map((row) => (
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
					{/* Estructura Negativa */}
					<Typography mt={3} variant='h5' component='h2' gutterBottom>
						Estructura Negativa
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sujeto</TableCell>
									<TableCell align='left'>Verbo</TableCell>
									<TableCell align='left'>Conjugación</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{negativeForm.map((row) => (
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
					{/* Estructura Interrogativa */}
					<Typography mt={3} variant='h5' component='h2' gutterBottom>
						Estructura Interrogativa
					</Typography>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Aux. (to do)</TableCell>
									<TableCell align='left'>Sujeto</TableCell>
									<TableCell align='left'>Verbo</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{interrogativeForm.map((row) => (
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
		</div>
	);
};

export default EstructuraPresentContinuous;
