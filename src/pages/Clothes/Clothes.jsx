import { useContext, useEffect } from 'react';
import { appContext } from '../../contexts/appContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { firstcloths, secondList, thirthList } from './Clothes.js';
import './Clothes.css';

const Clothes = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { expanded, handleChange } = useContext(appContext);
	return (
		<div className='accordions-wrapper-clothes'>
			<div className='accordions-container-clothes'>
				<Typography variant='h4' component='h2' className='title-clothes'>
					Clothes
				</Typography>
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
							A - H
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Traduction</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{firstcloths.map((row) => (
										<TableRow key={row.clothes}>
											<TableCell component='th' scope='row'>
												{row.clothes}
											</TableCell>
											<TableCell>{row.traduction}</TableCell>
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
							J - S
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Traduction</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{secondList.map((row) => (
										<TableRow key={row.clothes}>
											<TableCell component='th' scope='row'>
												{row.clothes}
											</TableCell>
											<TableCell>{row.traduction}</TableCell>
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
							T - W
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Traduction</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{thirthList.map((row) => (
										<TableRow key={row.clothes}>
											<TableCell component='th' scope='row'>
												{row.clothes}
											</TableCell>
											<TableCell>{row.traduction}</TableCell>
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

export default Clothes;
