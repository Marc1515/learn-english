import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { rows1, rows2, rows3, rows4, rows5, rows6 } from './PhrasalVerbs';
import './PhrasalVerbs.css';
import { useState } from 'react';

const PhrasalVerbs = () => {
	const [expanded, setExpanded] = useState(false);
	const handleChange = (isExpanded, panel) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className='container-PresentSimple'>
			<Typography
				className='presentSimple-title'
				variant='h2'
				component='h1'
				gutterBottom
			>
				Phrasal Verbs
			</Typography>
			<Typography pb={3} variant='subtitle2' component='h1' gutterBottom>
				Los Phrasal Verbs son verbos compuestos que incluyen un verbo principal
				y una o varias palabras adicionales, como preposiciones o adverbios.
				Estas combinaciones cambian el significado del verbo original de manera
				significativa. Por ejemplo, (to turn off) significa apagar, mientras que
				(to turn) solo significa girar. Los Phrasal Verbs son comunes en el
				idioma inglés y son considerados una de las partes más desafiantes de
				aprender para los hablantes de otros idiomas.
			</Typography>
			<div className='accordions-container'>
				<Accordion
					expanded={expanded === 'panel1'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							A - B
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows1.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel2'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							C - D
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows2.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel3'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3a-content'
						id='panel3a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							E - H
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows3.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel4'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4a-content'
						id='panel4a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							J - P
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows4.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel5'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel5a-content'
						id='panel5a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							R - S
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows5.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel6'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel6')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel6a-content'
						id='panel6a-header'
					>
						<Typography py={1} variant='h5' component='h2'>
							T - W
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>verbo</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows6.map((row) => (
										<TableRow key={row.verbo}>
											<TableCell component='th' scope='row'>
												{row.verbo}
											</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
};

export default PhrasalVerbs;
