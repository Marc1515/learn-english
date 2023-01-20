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
import { fruits, vegetables, meats } from './Food.js';
import './Food.css';

const Food = () => {
	const { expanded, handleChange } = useContext(appContext);
	return (
		<div className='accordions-container-food'>
			<Typography variant='h4' component='h2' className='title-food'>
				Food
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
						Fruits
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
								{fruits.map((row) => (
									<TableRow key={row.food}>
										<TableCell component='th' scope='row'>
											{row.food}
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
						Vegetables
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
								{vegetables.map((row) => (
									<TableRow key={row.food}>
										<TableCell component='th' scope='row'>
											{row.food}
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
						Meats
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
								{meats.map((row) => (
									<TableRow key={row.meats}>
										<TableCell component='th' scope='row'>
											{row.meats}
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

export default Food;
