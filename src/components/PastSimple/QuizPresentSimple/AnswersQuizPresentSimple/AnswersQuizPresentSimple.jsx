import { useContext } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';
import preguntas from '../preguntas';

const AnswersQuizPresentSimple = () => {
	const { setIsFinished, setIsStarted, setAnswerShow } =
		useContext(QuizContext);
	return (
		<main className='main-container'>
			<div className='lado-izquierdo'>
				{preguntas.map((pregunta, i) => (
					<div key={pregunta.titulo}>
						<span>Pregunta {i + 1}</span>
						<p>{pregunta.titulo}</p>
						<p className='ver-respuestas'>
							{
								pregunta.opciones.filter((opcion) => opcion.isCorrect)[0]
									.textoRespuesta
							}
						</p>
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
