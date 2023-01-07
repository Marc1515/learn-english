/* eslint-disable prefer-const */
import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';
import './AnswersQuizPresentSimple.css';

const AnswersQuizPresentSimple = () => {
	const {
		setIsFinished,
		setIsStarted,
		setAnswerShow,
		newArray,
		userAnswers,
		colorAnswer,
	} = useContext(QuizContext);
	let counter = 0;
	return (
		<main className='main-container'>
			<div className='lado-izquierdo'>
				{newArray.map((pregunta, i) => (
					<div key={pregunta.titulo}>
						<span>Pregunta {i + 1}</span>
						<p>{pregunta.titulo}</p>
						<div className='box'>
							<p className='ver-respuestas'>
								{
									pregunta.opciones.filter((opcion) => opcion.isCorrect)[0]
										.textoRespuesta
								}
							</p>
							<p className={colorAnswer[counter] ? 'green' : 'red'}>
								{userAnswers[counter]}
							</p>
							<p className='unShowCounter'>{counter++}</p>
						</div>
						<hr />
					</div>
				))}
				<button
					onClick={() => {
						setIsFinished(false);
						setIsStarted(true);
						setAnswerShow(false);
					}}
				>
					Volver a jugar
				</button>
			</div>
		</main>
	);
};

export default AnswersQuizPresentSimple;
