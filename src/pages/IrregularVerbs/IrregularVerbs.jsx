import { useContext } from 'react';
import { appContext } from '../../contexts/appContext';
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
import { rows1, rows2, rows3, rows4, rows5, rows6 } from './IrregularVerbs';
import './IrregularVerbs.css';

const IrregularVerbs = () => {
	const { expanded, handleChange } = useContext(appContext);

	return (
		<div className='container-PresentSimple'>
			<Typography
				className='presentSimple-title'
				variant='h2'
				component='h1'
				gutterBottom
			>
				Irregular Verbs
			</Typography>
			<Typography pb={3} variant='subtitle2' component='h1' gutterBottom>
				Los verbos irregulares son aquellos que no cumplen con las reglas de
				conjugación de los verbos regulares. Es decir, a diferencia de los
				regulares, los verbos irregulares no llevan la terminación -ED o -D al
				conjugarlos en pasado simple.
			</Typography>
			<div className='accordions-container'>
				<Accordion
					expanded={expanded === 'panel1-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel1-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content-irregularVerbs'
						id='panel1a-header-irregularVerbs'
					>
						<Typography py={1} variant='h5' component='h2'>
							A - C
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows1.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel2-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel2-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2a-content-irregularVerbs'
						id='panel2a-header-irregularVerbs'
					>
						<Typography py={1} variant='h5' component='h2'>
							D - G
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows2.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel3-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel3-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3a-content-irregularVerbs'
						id='panel3a-header-irregularVerbs'
					>
						<Typography py={1} variant='h5' component='h2'>
							H - M
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows3.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel4-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel4-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4a-content-irregularVerbs'
						id='panel4a-header-irregularVerbs'
					>
						<Typography py={1} variant='h5' component='h2'>
							O - R
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows4.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel5-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel5-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel5a-content-irregularVerbs'
						id='panel5a-header-irregularVerbs'
					>
						<Typography py={1} variant='h5' component='h2'>
							S
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows5.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
											<TableCell>{row.traduccion}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel6-irregularVerbs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel6-irregularVerbs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel6a-content-irregularVerbs'
						id='panel6a-header-irregularVerbs'
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
										<TableCell>Infinitive</TableCell>
										<TableCell>Past</TableCell>
										<TableCell>Participe</TableCell>
										<TableCell>Traduccion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows6.map((row) => (
										<TableRow key={row.infinitive}>
											<TableCell component='th' scope='row'>
												{row.infinitive}
											</TableCell>
											<TableCell>{row.past}</TableCell>
											<TableCell>{row.participe}</TableCell>
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

export default IrregularVerbs;
