import { useContext, useEffect } from 'react';
import { appContext } from '../../contexts/appContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import './FAQs.css';

const FAQs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { expanded, handleChange } = useContext(appContext);
	return (
		<div className='accordions-wrapper-FAQs'>
			<div className='accordions-container-FAQs'>
				<Typography variant='h4' component='h2' className='title-FAQs'>
					FAQs
				</Typography>
				<Accordion
					expanded={expanded === 'panel1-faqs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel1-faqs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-contentv'
						id='panel1a-header-faqs'
					>
						<Typography variant='subtitle1' component='h2'>
							¿Cuál es el objetivo principal de la aplicación?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							El objetivo principal de esta aplicación es principalmente
							enfocarse en las personas que tienen un nivel medio y que quieran
							refrescar sus conocimientos o repasar alguna duda en un lapso de
							tiempo muy corto.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel2-faqs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel2-faqs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2a-content-faqs'
						id='panel2a-header-faqs'
					>
						<Typography variant='subtitle1' component='h2'>
							¿Por qué puedo hacer el examen tantas veces como quiera?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Por la filosofía o la idea en que fue creada, imagínate que eres
							alguien que en el pasado sí tenía conocimientos sobre la
							gramática, pero el paso del tiempo sin práctica ha hecho que
							olvides algunos conceptos y el idioma se te vuelve otra vez
							confuso.
						</Typography>
						<Typography mt={1}>
							Con un repaso del contenido y un examen corto podrás averiguar
							donde estaban tus fallos.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel3-faqs'}
					onChange={(event, isExpanded) =>
						handleChange(isExpanded, 'panel3-faqs')
					}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3a-content-faqs'
						id='panel3a-header-faqs'
					>
						<Typography py={1.5} variant='subtitle1' component='h2'>
							¿Por qué no hay un perfil de Usuario?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							El perfil de usuario es uno los próximos objetivos de Learn
							English.
						</Typography>
						<Typography mt={1}>
							Debido a que hay muchas cosas por añadir aún no hemos decidido el
							momento adecuado
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQs;
