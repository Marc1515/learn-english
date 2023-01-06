import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';

const StartQuizPresentSimple = () => {
	const {
		setPreguntaActual,
		setTiempoRestante,
		setPuntuacion,
		setIsStarted,
		setAreDisabled,
		newElements,
		setNewArray,
		setAllQuestions,
	} = useContext(QuizContext);

	return (
		<main className='main-container'>
			<div className='empezar-container'>
				<button
					className='btn-one'
					onClick={() => {
						setTiempoRestante(20);
						setPreguntaActual(0);
						setPuntuacion(0);
						setIsStarted(false);
						setAreDisabled(false);
						setNewArray(newElements());
						setAllQuestions(true);
					}}
				>
					{' '}
					Empezar a jugar
				</button>
			</div>
		</main>
	);
};

export default StartQuizPresentSimple;
