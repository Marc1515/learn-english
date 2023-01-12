import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContextPastSimple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StartQuizPastSimple = () => {
	const {
		setPreguntaActual,
		setTiempoRestante,
		setPuntuacion,
		setIsStarted,
		setAreDisabled,
		newElements,
		setNewArray,
		setAllQuestions,
		setUserAnswers,
		setColorAnswer,
	} = useContext(QuizContext);

	return (
		<main className='main-container'>
			<div className='empezar-titulo'>
				<span>Present Simple</span>
				<span>Quiz</span>
				<span>
					Realiza un Quiz rápido de poco más de un minuto para poner a prueba
					tus conocimientos
				</span>
			</div>
			<div className='empezar-container'>
				<div className='btn-one'>
					<button
						onClick={() => {
							setTiempoRestante(20);
							setPreguntaActual(0);
							setPuntuacion(0);
							setIsStarted(false);
							setAreDisabled(false);
							setNewArray(newElements());
							setAllQuestions(true);
							setUserAnswers([]);
							setColorAnswer([]);
						}}
					>
						{' '}
						<PlayArrowIcon />
					</button>
				</div>
			</div>
		</main>
	);
};

export default StartQuizPastSimple;
