import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';

const FinishQuizPresentSimple = () => {
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
			<div className='juego-terminado'>
				<span>
					{' '}
					Total {puntuacion} de {newArray.length}{' '}
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
