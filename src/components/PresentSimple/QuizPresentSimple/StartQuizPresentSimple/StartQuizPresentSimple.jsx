import React, { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';

const StartQuizPresentSimple = () => {
	const {
		setPreguntaActual,
		setTiempoRestante,
		setPuntuacion,
		setIsStarted,
		setAreDisabled,
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
