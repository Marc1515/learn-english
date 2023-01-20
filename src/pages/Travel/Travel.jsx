import { useContext } from 'react';
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
import { firstlist, secondList, thirthList } from './Travel.js';
import './Travel.css';

const Travel = () => {
	const { expanded, handleChange } = useContext(appContext);
	return (
		<div className='accordions-container-travel'>
			<Typography variant='h4' component='h2' className='title-travel'>
				Travel
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
								{firstlist.map((row) => (
									<TableRow key={row.item}>
										<TableCell component='th' scope='row'>
											{row.item}
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
						I - S
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
									<TableRow key={row.item}>
										<TableCell component='th' scope='row'>
											{row.item}
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
									<TableRow key={row.item}>
										<TableCell component='th' scope='row'>
											{row.item}
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
	);
};

export default Travel;
