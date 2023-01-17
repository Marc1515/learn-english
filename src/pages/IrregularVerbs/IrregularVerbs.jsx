import { useState } from 'react';
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
import './IrregularVerbs.css';

function createData(infinitive, past, participe, traduccion) {
	return { infinitive, past, participe, traduccion };
}

const rows1 = [
	createData('arise', 'arose', 'arisen', 'surgir'),
	createData('awake', 'awoke', 'awoken', 'despertarse'),
	createData('bear', 'bore', 'borne/born', 'soportar'),
	createData('beat', 'beat', 'beaten', 'golpear'),
	createData('become', 'became', 'become', 'llegar a ser'),
	createData('begin', 'began', 'begun', 'empezar'),
	createData('bend', 'bent', 'bent', 'doblar'),
	createData('bet', 'bet/betted', 'bet/betted', 'apostar'),
	createData('bid', 'bid/bade', 'bidden', 'rogar, desear'),
	createData('bid ', 'bid', 'bid', 'pujar'),
	createData('bind', 'bound', 'bound', 'atar'),
	createData('bite', 'bit', 'bitten', 'morder'),
	createData('bleed', 'bled', 'bled', 'sangrar'),
	createData('blow', 'blew', 'blown', 'soplar'),
	createData('break', 'broke', 'broken', 'romper'),
	createData('breed', 'bred', 'bred', 'criar'),
	createData('bring', 'brought', 'brought', 'traer'),
	createData('build', 'built', 'built', 'construir'),
	createData('burn', 'burned/burnt', 'burned/burnt', 'quemar'),
	createData('burst', 'burst', 'burst', 'estallar, reventar'),
	createData('buy', 'bought', 'bought', 'comprar'),
	createData('cast', 'cast', 'cast', 'arrojar'),
	createData('catch', 'caught', 'caught', 'atrapar'),
	createData('choose', 'chose', 'chosen', 'elegir'),
	createData('cling', 'clung', 'clung', 'adherirse'),
	createData('come', 'came', 'come', 'venir'),
	createData('cost', 'cost', 'cost', 'costar'),
	createData('creep', 'crept', 'crept', 'arrastrarse'),
	createData('cut', 'cut', 'cut', 'cortar'),
];

const rows2 = [
	createData('deal', 'dealt', 'dealt', 'tratar'),
	createData('dig', 'dug', 'dug', 'cavar'),
	createData('do', 'did', 'done', 'hacer'),
	createData('draw', 'drew', 'drawn', 'dibujar'),
	createData('dream', 'dreamt/dreamed', 'dreamt/dreamed', 'soñar'),
	createData('drink', 'drank', 'drunk', 'beber'),
	createData('drive', 'drove', 'driven', 'conducir'),
	createData('eat', 'ate', 'eaten', 'comer'),
	createData('fall', 'fell', 'fallen', 'caer'),
	createData('feed', 'fed', 'fed', 'alimentar'),
	createData('feel', 'felt', 'felt', 'sentir'),
	createData('fight', 'fought', 'fought', 'pelear'),
	createData('find', 'found', 'found', 'encontrar'),
	createData('flee', 'fled', 'fled', 'huir'),
	createData('fly', 'flew', 'flown', 'volar'),
	createData('forbid', 'forbade', 'forbidden', 'prohibir'),
	createData('forecast', 'forecast', 'forecast', 'pronosticar (el tiempo)'),
	createData('forget', 'forgot', 'forgotten', 'olvidar'),
	createData('forgive', 'forgave', 'forgiven', 'perdonar'),
	createData('forsake', 'forsook', 'forsaken', 'abandonar'),
	createData('freeze', 'froze', 'frozen', 'congelar'),
	createData('get', 'got', 'got/gotten', 'obtener'),
	createData('give', 'gave', 'given', 'dar'),
	createData('go', 'went', 'gone', 'ir'),
	createData('grind', 'ground', 'ground', 'moler'),
	createData('grow', 'grew', 'grown', 'crecer'),
];

const rows3 = [
	createData('hang', 'hung', 'hung', 'colgar'),
	createData('have', 'had', 'had', 'tener'),
	createData('hear', 'heard', 'heard', 'oír'),
	createData('hide', 'hid', 'hidden', 'esconderse'),
	createData('hit', 'hit', 'hit', 'golpear'),
	createData('hold', 'held', 'held', 'mantener'),
	createData('hurt', 'hurt', 'hurt', 'herir'),
	createData('keep', 'kept', 'kept', 'guardar'),
	createData('kneel', 'knelt', 'knelt', 'arrodillarse'),
	createData('know', 'knew', 'known', 'saber'),
	createData('lay', 'laid', 'laid', 'poner'),
	createData('lead', 'led', 'led', 'guiar'),
	createData('lean', 'leaned/leant', 'leaned/leant', 'apoyarse'),
	createData('leap', 'leaped/leapt', 'leaped/leapt', 'saltar'),
	createData('learn', 'learnt/learned', 'learnt/learned', 'aprender'),
	createData('leave', 'left', 'left', 'dejar'),
	createData('lend', 'lent', 'lent', 'prestar'),
	createData('let', 'let', 'let', 'permitir'),
	createData('lie', 'lay', 'lain', 'acostarse, tenderse'),
	createData('lie (regular)', 'lied', 'lied', 'mentir'),
	createData('light', 'lit/lighted', 'lit/lighted', 'encender'),
	createData('lose', 'lost', 'lost', 'perder'),
	createData('make', 'made', 'made', 'hacer'),
	createData('mean', 'meant', 'meant', 'significar'),
	createData('meet', 'met', 'met', 'encontrarse'),
	createData('mistake', 'mistook', 'mistaken', 'equivocarse'),
];

const rows4 = [
	createData('overcome', 'overcame', 'overcome', 'superar'),
	createData('pay', 'paid', 'paid', 'pagar'),
	createData('plead', 'pleaded/pled', 'pleaded/pled', 'alegar'),
	createData('preset', 'preset', 'preset', 'programar'),
	createData('prove', 'proved', 'proven/proved', 'acostarse'),
	createData('put', 'put', 'put', 'poner'),
	createData('quit', 'quit/quitted', 'quit/quitted', 'abandonar'),
	createData('read', 'read', 'read', 'leer'),
	createData('reset', 'reset', 'reset', 'reajustar'),
	createData('rewind', 'rewound', 'rewound', 'rebobinar'),
	createData('ride', 'rode', 'ridden', 'montar'),
	createData('ring', 'rang', 'rung', 'sonar, llamar por teléfono'),
	createData('rise', 'rose', 'risen', 'elevar'),
	createData('run', 'ran', 'run', 'correr'),
];

const rows5 = [
	createData('say', 'said', 'said', 'decir'),
	createData('see', 'saw', 'seen', 'ver'),
	createData('sell', 'sold', 'sold', 'vender'),
	createData('send', 'sent', 'sent', 'enviar'),
	createData('set', 'set', 'set', 'poner, colocar'),
	createData('sew', 'sewed', 'sewn/sewed', 'coser'),
	createData('shake', 'shook', 'shaken', 'sacudir'),
	createData('shave', 'shaved', 'shaved/shaven', 'afeitarse'),
	createData('shear', 'sheared', 'sheared/shorn', 'esquilar'),
	createData('shine', 'shone', 'shone', 'brillar'),
	createData('shoot', 'shot', 'shot', 'disparar'),
	createData('show', 'showed', 'shown/showed', 'mostrar'),
	createData('shrink', 'shrank/shrunk', 'shrunk', 'encoger'),
	createData('shut', 'shut', 'shut', 'cerrar'),
	createData('sing', 'sang', 'sung', 'cantar'),
	createData('sink', 'sank', 'sunk', 'hundir'),
	createData('sit', 'sat', 'sat', 'sentarse'),
	createData('sleep', 'slept', 'slept', 'dormir'),
	createData('slide', 'slid', 'slid', 'deslizar'),
	createData('smell', 'smelled/smelt', 'smelled/smelt', 'oler'),
	createData('sow', 'sowed', 'sown/sowed', 'sembrar'),
	createData('speak', 'spoke', 'spoken', 'hablar'),
	createData('speed', 'sped/speeded', 'sped/speeded', 'acelerar'),
	createData('spell', 'spelt/spelled', 'spelt/spelled', 'deletrear'),
	createData('spend', 'spent', 'spent', 'gastar'),
	createData('spill', 'spilt/spilled', 'spilt/spilled', 'derramar'),
	createData('spin', 'spun', 'spun', 'girar, hilar'),
	createData('spit', 'spit/spat', 'spit/spat', 'escupir'),
	createData('split', 'split', 'split', 'partir'),
	createData('spoil', 'spoilt/spoiled', 'spoilt/spoiled', 'estropear'),
	createData('spread', 'spread', 'spread', 'extenderse'),
	createData('stand', 'stood', 'stood', 'estar de pie'),
	createData('steal', 'stole', 'stolen', 'robar'),
	createData('stick', 'stuck', 'stuck', 'pegar'),
	createData('stink', 'stank/stunk', 'stunk', 'apestar'),
	createData('strew', 'strewed', 'strewn/strewed', 'esparcir'),
	createData('strike', 'struck', 'struck/stricken', 'golpear'),
	createData('swear', 'swore', 'sworn', 'jurar'),
	createData('sweat', 'sweat/sweated', 'sweat/sweated', 'sudar'),
	createData('sweep', 'swam', 'swum', 'nadar'),
	createData('swim', 'spent', 'spent', 'nadar'),
];

const rows6 = [
	createData('take', 'took', 'taken', 'tomar'),
	createData('teach', 'taught', 'taught', 'enseñar'),
	createData('tear', 'tore', 'torn', 'rasgar'),
	createData('telecast', 'telecast', 'telecast', 'televisar'),
	createData('tell', 'told', 'told', 'decir'),
	createData('think', 'thought', 'thought', 'pensar'),
	createData('throw', 'threw', 'thrown', 'lanzar'),
	createData('tread', 'trod', 'trodden/trod', 'pisar'),
	createData('understand', 'understood', 'understood', 'entender'),
	createData('undo', 'undid', 'undone', 'deshacer'),
	createData('unfreeze', 'unfroze', 'unfrozen', 'descongelar'),
	createData('wake', 'woke', 'woken', 'despertarse'),
	createData('wear', 'wore', 'worn', 'llevar puesto'),
	createData('weave', 'wove', 'woven', 'tejer'),
	createData('wed', 'wed/wedded', 'wed/wedded', 'casarse'),
	createData('win', 'won', 'won', 'ganar'),
	createData('wring', 'wrung', 'wrung', 'retorcer'),
	createData('write', 'wrote', 'written', 'escribir'),
];
const IrregularVerbs = () => {
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
					expanded={expanded === 'panel1'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
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
					expanded={expanded === 'panel2'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2a-content'
						id='panel2a-header'
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
					expanded={expanded === 'panel3'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3a-content'
						id='panel3a-header'
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
					expanded={expanded === 'panel4'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4a-content'
						id='panel4a-header'
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
					expanded={expanded === 'panel5'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel5a-content'
						id='panel5a-header'
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
