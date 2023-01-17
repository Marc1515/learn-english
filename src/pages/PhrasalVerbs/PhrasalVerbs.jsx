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
import './PhrasalVerbs.css';
import { useState } from 'react';

function createData(verbo, traduccion) {
	return { verbo, traduccion };
}

const rows1 = [
	createData('ADD UP', 'totalizar'),
	createData('ADD UP TO', 'alcanzar un total'),
	createData('ANSWER BACK', 'contestar de malos modos'),
	createData('ANSWER FOR', 'responder de'),
	createData('ASK ABOUT', 'preguntar por (un asunto)'),
	createData('ASK AFTER', 'preguntar por la salud'),
	createData('ASK FOR', 'pedir, preguntar por'),
	createData('ASK UP TO', 'pedir hasta (un precio)'),
	createData('ASK BACK', 'invitar a volver'),
	createData('ASK DOWN', 'invitar a bajar'),
	createData('ASK IN', 'invitar a entrar'),
	createData('ASK OUT', 'invitar a salir'),
	createData('ASK UP', 'invitar a subir'),
	createData('BACK AWAY', 'retroceder'),
	createData('BACK OUT', 'volver atrás'),
	createData('BACK UP', 'reforzar'),
	createData('BE ABOUT', 'estar por (un lugar)'),
	createData('BE AWAY', 'estar fuera'),
	createData('BE BACK', 'estar de vuelta'),
	createData('BE FOR', 'estar a favor de'),
	createData('BE IN', 'estar en casa'),
	createData('BE OFF', 'irse, estar apagado'),
	createData('BE ON', 'estar encendido'),
	createData('BE OUT', 'estar fuera'),
	createData('BE OVER', 'estar acabado'),
	createData('BE UP', 'estar levantado'),
	createData('BEND DOWN', 'agacharse'),
	createData('BEND OVER', 'inclinarse'),
	createData('BLOW AWAY', 'llevarse (el viento)'),
	createData('BLOW DOWN', 'derrumbarse por el viento'),
	createData('BLOW OFF', 'dejar salir (el vapor)'),
	createData('BLOW OUT', 'apagar (se) (una llama)'),
	createData('BLOW UP', 'volar (con explosivos)'),
	createData('BREAK AWAY', 'soltarse'),
	createData('BREAK DOWN', 'derruir, averiarse'),
	createData('BREAK IN', 'irrumpir, interrumpir'),
	createData('BREAK OFF', 'romper (se) (relaciones)'),
	createData('BREAK UP', 'terminar el curso o una relación'),
	createData('BREAK OUT', 'estallar (una guerra)'),
	createData('BRING BACK', 'devolver'),
	createData('BRING ABOUT', 'acarrear'),
	createData('BRING ALONG', 'traer (consigo)'),
	createData('BRING DOWN', 'derribar, rebajar'),
	createData('BRING IN', 'hacer entrar'),
	createData('BRING OUT', 'hacer salir, publicar'),
	createData('BRING UP', 'criar, educar'),
	createData('BRUSH OFF', 'quitar el polvo'),
	createData('BURN AWAY', 'consumirse (el fuego)'),
	createData('BURN DOWN', 'derrumbarse (por el fuego)'),
	createData('BURN OUT', 'consumirse (el fuego)'),
	createData('BURN UP', 'consumirse (por el fuego)'),
	createData('BUY FOR', 'comprar por o para'),
	createData('BUY OVER', 'sobornar'),
	createData('BUY UP', 'acaparar'),
];

const rows2 = [
	createData('CALL AT', 'Hacer una visita, hacer escala'),
	createData('CALL AWAY', 'Seguir llamando'),
	createData('CALL BACK', 'Llamar (a alguien) para que regrese'),
	createData('CALL FOR', 'Pedir a voces, exigir'),
	createData('CALL IN', 'Llamar (a alguien) para que entre'),
	createData('CALL ON', 'Ir a ver (a alguien)'),
	createData('CALL OUT', 'Gritar'),
	createData('CALL OVER', 'Pasar lista, enumerar'),
	createData('CALL UP', 'Telefonear'),
	createData('CALL DOWN', 'Llamar (a alguien) para que baje'),
	createData('CARRY ALONG', 'Persuadir'),
	createData('CARRY OFF', 'Llevarse a la fuerza'),
	createData('CARRY ON', 'Continuar'),
	createData('CARRY OUT', 'Llevar a cabo'),
	createData('CLEAR AWAY', 'Dispersar (se)'),
	createData('CLEAR OFF', 'Marcharse'),
	createData('CLEAR OUT', 'Marcharse'),
	createData('CLEAR UP', 'Aclararse (el tiempo,un misterio)'),
	createData('CLOSE DOWN', 'Cerrar'),
	createData('CLOSE UP', 'Acercarse'),
	createData('COME ABOUT', 'Suceder'),
	createData('COME ACROSS', 'Encontrarse con'),
	createData('COME ALONG', 'Acompañar, venir por (la calle)'),
	createData('COME AT', 'Embestir'),
	createData('COME AWAY', 'Desprenderse'),
	createData('COME DOWN', 'Bajar'),
	createData('COME FOR', 'Venir por (en busca de)'),
	createData('COME FROM', 'Venir de'),
	createData('COME IN', 'Entrar'),
	createData('COME OFF', 'Desprenderse'),
	createData('COME ON', '¡Vamos! (en imperativo)'),
	createData('COME OUT', 'Salir'),
	createData('COME TO', 'Ascender (una suma), volver en sí.'),
	createData('COME UP', 'Subir'),
	createData('COME UP TO', 'Acercarse a'),
	createData('COUNT IN', 'Incluir'),
	createData('COUNT ON', 'Contar con'),
	createData('COUNT UP', 'Calcular'),
	createData('COUNT UP TO', 'Contar hasta'),
	createData('CRY FOR', 'Pedir llorando'),
	createData('CRY OUT', 'Llorar a gritos'),
	createData('CRY OVER', 'Lamentarse'),
	createData('CRY TO', 'Llamar a gritos'),
	createData('CUT DOWN', 'Reducir gastos, talar'),
	createData('CUT IN', 'Interrumpir'),
	createData('CUT OFF', 'Separar de un tajo'),
	createData('CUT OUT', 'Recortar, omitir'),
	createData('CUT THROUGH', 'Acortar por un atajo'),
	createData('CUT UP', 'Trinchar, triturar'),
	createData('DIE AWAY', 'Cesar poco a poco'),
	createData('DIE DOWN', 'Apaciguarse'),
	createData('DIE OUT', 'Extinguirse'),
	createData('DO UP', 'Abrochar'),
	createData('DO WITHOUT', 'Pasarse sin (carecer de)'),
	createData('DRAW AWAY', 'Alejarse'),
	createData('DRAW BACK', 'Retroceder'),
	createData('DRAW DOWN', 'Bajar'),
	createData('DRAW IN', 'Economizar, encoger (se)'),
	createData('DRAW OFF', 'Apartarse'),
	createData('DRAW ON', 'Aproximarse, retirar fondos'),
	createData('DRAW OUT', 'Sacar, redactar, alargarse (el día)'),
	createData('DRAW UP', 'Para (un vehículo)'),
	createData('DRIVE AWAY', 'Ahuyentar, alejarse en coche'),
	createData('DRIVE BACK', 'Rechazar'),
	createData('DRIVE BY', 'Pasar en coche'),
	createData('DRIVE IN', 'Entrar en coche, introducir'),
	createData('DRIVE OUT', 'Salir en coche, expulsar'),
	createData('DRIVE OFF', 'Alejarse en coche, ahuyentar'),
];

const rows3 = [
	createData('EAT AWAY', 'Erosionar'),
	createData('EAT INTO', 'Roer'),
	createData('EAT UP', 'Devorar'),
	createData('FALL DOWN', 'Caerse'),
	createData('FALL OFF', 'Disminuir, desprenderse'),
	createData('FALL OVER', 'Tropezar'),
	createData('FIGHT OFF', 'Ahuyentar'),
	createData('FIGHT ON', 'Seguir luchando'),
	createData('FIGHT UP', 'Luchar valerosamente'),
	createData('FILL IN', 'Rellenar'),
	createData('FILL UP', 'Rellenar, llenar'),
	createData('FIND OUT', 'Averiguar'),
	createData('FIX UP', 'Arreglar (un asunto)'),
	createData('FLY ABOUT', 'Volar de un lado a otro'),
	createData('FLY AT', 'Atacar'),
	createData('FLY AWAY', 'Huir volando'),
	createData('FLY DOWN', 'Descender'),
	createData('FLY OFF', 'Desprenderse'),
	createData('GET ABOUT', 'Ir de acá para allá'),
	createData('GET ALONG', 'Hacer progreso'),
	createData('GET AT', 'Dar a entender'),
	createData('GET AWAY', 'Escaparse'),
	createData('GET BACK', 'Volver, recuperar'),
	createData('GET DOWN', 'Descender'),
	createData('GET TO', 'Llegar a'),
	createData('GET IN / INTO', 'Entrar, meterse'),
	createData('GET OUT (OF)', 'Salir, apearse'),
	createData('GET OFF', 'Apearse, bajarse'),
	createData('GET ON', 'Subirse, progresar'),
	createData('GET OUT', 'Producir, salir'),
	createData('GET OVER', 'Saltar por encima, recobrarse'),
	createData('GET THROUGH', 'Abrirse camino'),
	createData('GET UP', 'Levantarse'),
	createData('GIVE AWAY', 'Repartir, denunciar'),
	createData('GIVE BACK', 'Devolver'),
	createData('GIVE OFF', 'Despedir (humo, olor)'),
	createData('GIVE OUT', 'Agotarse, repartir'),
	createData('GIVE UP', 'Entregar, rendirse'),
	createData('GO ABOUT', 'Ir de un lado para otro'),
	createData('GO ALONG', 'Ir a lo largo de'),
	createData('GO AT', 'Atacar'),
	createData('GO AWAY', 'Marcharse'),
	createData('GO BY', 'Pasar por'),
	createData('GO DOWN', 'Bajar'),
	createData('GO IN / INTO', 'Entrar'),
	createData('GO OFF', 'Explotar, marcharse'),
	createData('GO ON', 'Continuar'),
	createData('GO OUT', 'Salir, pasarse de moda, apagarse'),
	createData('GO OVER', 'Repasar'),
	createData('GO THROUGH', 'Penetrar, sufrir'),
	createData('GO UP', 'Subir'),
	createData('GO UP TO', 'Acercarse a'),
	createData('GO ACROSS', 'Atravesar'),
	createData('GO WITHOUT', 'Pasarse sin'),
	createData('HANG ABOUT', 'Vagar'),
	createData('HANG BACK', 'Retraerse'),
	createData('HANG BEHIND', 'Quedarse atrás'),
	createData('HANG FROM', 'Colgar de'),
	createData('HANG OFF', 'Colgar (el teléfono)'),
	createData('HANG UP', 'Colgar (un cuadro)'),
	createData('HOLD BACK', 'Detener'),
	createData('HOLD ON', 'Continuar'),
	createData('HOLD OUT', 'Resistir'),
	createData('HURRY ALONG', 'Darse prisa'),
	createData('HURRY AWAY', 'Irse rápidamente'),
	createData('HURRY OFF', 'Irse rápidamente'),
	createData('HURRY UP', 'Darse prisa'),
];

const rows4 = [
	createData('JUMP ABOUT', 'Dar saltos'),
	createData('JUMP AT', 'Atacar'),
	createData('JUMP DOWN', 'Bajar de un salto'),
	createData('JUMP IN', 'Entrar de un salto'),
	createData('JUMP ON', 'Subir de un salto'),
	createData('JUMP OVER', 'Saltar por encima de'),
	createData('KEEP AWAY', 'Mantenerse alejado'),
	createData('KEEP BACK', 'Mantenerse separado'),
	createData('KEEP DOWN', 'Controlar'),
	createData('KEEP OFF', 'Abstenerse'),
	createData('KEEP UP', 'Mantenerse de pie, resistir'),
	createData('KNOCK ABOUT', 'Golpear acá y allá'),
	createData('KNOCK AT', 'Llamar (a la puerta)'),
	createData('KNOCK DOWN', 'Derribar'),
	createData('KNOCK OUT', 'Dejar fuera de combate'),
	createData('LOOK AFTER', 'Cuidar'),
	createData('LOOK AT', 'Mirar'),
	createData('LOOK BEHIND', 'Mirar atrás'),
	createData('LOOK DOWN', 'Mirar abajo'),
	createData('LOOK FOR', 'Buscar'),
	createData('LOOK FORWARD TO', 'Anhelar'),
	createData('LOOK IN', 'Mirar dentro'),
	createData('LOOK LIKE', 'Parecer'),
	createData('LOOK OUT', 'Mirar fuera'),
	createData('LOOK OVER', 'Mirar por encima de'),
	createData('LOOK ROUND', 'Mirar alrededor'),
	createData('LOOK UP', 'Mirar arriba, buscar'),
	createData('MOVE AWAY', 'Alejarse'),
	createData('MOVE ALONG', 'Pasar, no detenerse'),
	createData('MOVE DOWN', 'Bajar'),
	createData('MOVE IN', 'Mudarse (de domicilio)'),
	createData('MOVE OFF', 'Marcharse'),
	createData('MOVE ON', 'No detenerse, pasar a (otro asunto)'),
	createData('MOVE OUT', 'Mudarse (de domicilio)'),
	createData('MOVE UP', 'Moverse (para dejar sitio)'),
	createData('PASS AWAY', 'Fallecer'),
	createData('PASS BY', 'Pasar por (un sitio)'),
	createData('PASS IN', 'Entrar'),
	createData('PASS ON', 'Pasar (de mano en mano)'),
	createData('PAY FOR', 'Pagar'),
	createData('PAY IN', 'Ingresar (dinero)'),
	createData('PAY OFF', 'Liquidar (una cuenta), pagar'),
	createData('PAY UP', 'Pagar (una deuda)'),
	createData('POINT AT', 'Señalar'),
	createData('POINT AWAY', 'Señalar a lo lejos'),
	createData('POINT TO', 'Señalar'),
	createData('POINT DOWN', 'Señalar abajo'),
	createData('POINT OUT', 'Destacar'),
	createData('POINT UP', 'Señalar arriba'),
	createData('PULL AWAY', 'Arrancar'),
	createData('PULL DOWN', 'Derribar'),
	createData('PULL OFF', 'Arrancar'),
	createData('PULL OUT', 'Sacar'),
	createData('PULL UP', 'Parar (un vehículo)'),
	createData('PUT AWAY', 'Poner a un lado'),
	createData('PUT BACK', 'Poner en su sitio'),
	createData('PUT DOWN', 'Anotar, bajar (algo)'),
	createData('PUT IN', 'Meter, instalar'),
	createData('PUT OFF', 'Posponer'),
	createData('PUT ON', 'Ponerse (una prenda)'),
	createData('PUT OUT', 'Apagar, sacar'),
	createData('PUT UP', 'Subir (algo), alojarse'),
	createData('PUT UP WITH', 'Soportar'),
];

const rows5 = [
	createData('RUN ABOUT', 'Correr de acá para allá'),
	createData('RUN ACROSS', 'Encontrarse con, atravesar corriendo'),
	createData('RUN DOWN', 'Pararse (un reloj), enfermar'),
	createData('RUN IN', 'Entrar corriendo'),
	createData('RUN OFF', 'Escapar corriendo'),
	createData('RUN OUT', 'Salir corriendo'),
	createData('RUN OVER', 'Atropellar'),
	createData('RUN UP', 'Subir corriendo'),
	createData('SEE ABOUT', 'Indagar'),
	createData('SEE OFF', 'Despedir (a alguien)'),
	createData('SEE TO', 'Encargarse de'),
	createData('SEND ALONG', 'Despachar'),
	createData('SEND DOWN', 'Bajar (algo)'),
	createData('SEND FOR', 'Enviar por'),
	createData('SEND OFF', 'Despachar,despedir (trabajadores)'),
	createData('SEND ROUND', 'Circular'),
	createData('SEND UP', 'Subir (algo)'),
	createData('SET ABOUT', 'Ponerse (a trabajar)'),
	createData('SET DOWN', 'Asentar, colocar'),
	createData('SET OFF', 'Partir (para un viaje)'),
	createData('SHUT IN', 'Encerrar'),
	createData('SHUT UP', 'Callarse, cerrar (una tienda)'),
	createData('SIT DOWN', 'Sentarse'),
	createData('SIT UP', 'Incorporarse, sentarse erguido'),
	createData('SIT FOR', 'Presentarse (a un examen)'),
	createData('SPEAK FOR', 'Hablar a favor de'),
	createData('SPEAK TO', 'Hablar con'),
	createData('SPEAK UP', 'Hablar en voz alta'),
	createData('STAND BY', 'Quedarse cerca'),
	createData('STAND OFF', 'Mantenerse alejado'),
	createData('STAND OUT', 'Destacar'),
	createData('STAND UP', 'Ponerse de pie'),
	createData('STAY AT', 'Hospedarse'),
	createData('STAY BY', 'Permanecer al lado de'),
	createData('STAY IN', 'Quedarse en casa'),
	createData('STAY OUT', 'Quedarse fuera de casa'),
	createData('STEP ACROSS', 'Atravesar'),
	createData('STEP DOWN', 'Bajar'),
	createData('STEP IN', 'Entrar'),
	createData('STEP OUT', 'Salir'),
	createData('STEP UP', 'Subir'),
	createData('STEP UP TO', 'Acercarse a (alguien)'),
	createData('STOP BY', 'Quedarse al lado de'),
	createData('STOP IN', 'Quedarse en casa'),
	createData('STOP UP', 'Empastar (una muela), tapar (una botella)'),
];

const rows6 = [
	createData('TAKE DOWN', 'Escribir al dictado, bajar (algo)'),
	createData('TAKE FOR', 'Tomar por (equivocarse)'),
	createData('TAKE IN', 'Engañar, meter'),
	createData('TAKE OFF', 'Quitarse (una prenda), despegar'),
	createData('TAKE OUT', 'Sacar, quitar'),
	createData('TAKE TO', 'Llevar a'),
	createData('TAKE UP', 'Subir (algo)'),
	createData('TALK ABOUT', 'Hablar acerca de'),
	createData('TALK OF', 'Hablar de'),
	createData('TALK TO', 'Hablar con'),
	createData('TEAR AWAY', 'Quitar (rasgando)'),
	createData('TEAR OFF', 'Separar (rasgando)'),
	createData('TEAR UP', 'Hacer pedazos (rasgando)'),
	createData('THROW AWAY', 'Tirar (algo inservible)'),
	createData('THROW BACK', 'Devolver'),
	createData('THROW DOWN', 'Tirar hacia abajo'),
	createData('THROW IN', 'Tirar hacia adentro'),
	createData('THROW OFF', 'Echar fuera'),
	createData('THROW OUT', 'Arrojar'),
	createData('THROW UP', 'Tirar hacia arriba'),
	createData('TRY ON', 'Probarse una prenda'),
	createData('TURN AWAY', 'Mirar a otro lado'),
	createData('TURN BACK', 'Darse la vuelta'),
	createData('TURN DOWN', 'Poner boca abajo'),
	createData('TURN OFF', 'Apagar (la luz), cerrar (una llave)'),
	createData('TURN ON', 'Encender (la luz), abrir (una llave)'),
	createData('TURN OUT', 'Apagar'),
	createData('TURN OVER', 'Volcar, poner boca abajo'),
	createData('TURN INTO', 'Convertirse'),
	createData('TURN UP', 'Llegar'),
	createData('WALK ABOUT', 'Andar de acá para allá'),
	createData('WALK ALONG', 'Andar por'),
	createData('WALK AWAY', 'Alejarse andando'),
	createData('WALK DOWN', 'Bajar'),
	createData('WALK IN', 'Entrar'),
	createData('WALK OFF', 'Marcharse'),
	createData('WALK UP', 'Subir'),
	createData('WORK OUT', 'Calcular'),
	createData('WORK UNDER', 'Trabajar a las órdenes de'),
	createData('WRITE DOWN', 'Anotar'),
];

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
