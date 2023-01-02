import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';
import preguntas from '../preguntas';

const FinishQuizPresentSimple = () => {
	const {
		setPreguntaActual,
		puntuacion,
		setAnswerShow,
		setIsStarted,
		setIsFinished,
	} = useContext(QuizContext);

	return (
		<main className='main-container'>
			<div className='juego-terminado'>
				<span>
					{' '}
					Total {puntuacion} de {preguntas.length}{' '}
				</span>
				<button
					className='btn-one'
					onClick={() => {
						setIsFinished(false);
						setIsStarted(true);
					}}
				>
					{' '}
					Volver a jugar
				</button>
				<button
					className='btn-one'
					onClick={() => {
						setIsFinished(false);
						setAnswerShow(true);
						setPreguntaActual(0);
					}}
				>
					Ver respuestas
				</button>
			</div>
		</main>
	);
};

export default FinishQuizPresentSimple;
