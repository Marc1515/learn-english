import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContextPastSimple';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './FinishQuizPastSimple.css';

const FinishQuizPastSimple = () => {
	const {
		setPreguntaActual,
		puntuacion,
		setAnswerShow,
		setIsStarted,
		setIsFinished,
		newArray,
	} = useContext(QuizContext);

	return (
		<main className='main-container'>
			<div className='juego-terminado-titulo'>
				<span className='total'>
					{' '}
					Total {puntuacion} de {newArray.length}{' '}
				</span>
				<button
					className='btn-respuestas'
					onClick={() => {
						setIsFinished(false);
						setAnswerShow(true);
						setPreguntaActual(0);
					}}
				>
					RESPUESTAS
				</button>
				<button
					className='btn-reset'
					onClick={() => {
						setIsFinished(false);
						setIsStarted(true);
					}}
				>
					{' '}
					<RestartAltIcon />
				</button>
			</div>
		</main>
	);
};

export default FinishQuizPastSimple;
