/* eslint-disable prefer-const */
import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';

const QuestionsQuizPresentSimple = () => {
	const [answeDisabled, setAnsweDisabled] = useState(false);
	const {
		preguntaActual,
		setPreguntaActual,
		puntuacion,
		setPuntuacion,
		tiempoRestante,
		setTiempoRestante,
		areDisabled,
		setAreDisabled,
		setIsFinished,
		newArray,
		setAllQuestions,
		userAnswers,
		colorAnswer,
	} = useContext(QuizContext);

	const handleAnswerSubmit = (isCorrect, e, textoRespuesta) => {
		e.preventDefault();
		userAnswers.push(textoRespuesta);
		colorAnswer.push(isCorrect);

		// Añadir puntuación
		if (isCorrect) setPuntuacion(puntuacion + 1);
		// Añadir estilos de pregunta
		e.target.classList.add(isCorrect ? 'correct' : 'incorrect');

		setAnsweDisabled(true);

		setTimeout(() => {
			setAnsweDisabled(false);
		}, 2000);

		setTimeout(() => {
			setTiempoRestante(20);
		}, 1000);

		setTimeout(() => {
			// Cambiar a la siguiente pregunta
			if (preguntaActual === newArray.length - 1) {
				setIsFinished(true);
			} else {
				setPreguntaActual(preguntaActual + 1);
			}
		}, 1000);
	};

	const handleLastQuestion = () => {
		if (preguntaActual === 4) {
			setIsFinished(true);
			setAllQuestions(false);
		} else {
			setTiempoRestante(20);
			setAreDisabled(false);
			setPreguntaActual(preguntaActual + 1);
		}
	};
	useEffect(() => {
		if (tiempoRestante === 0) {
			userAnswers.push('---');
			colorAnswer.push(false);
		}
	}, [tiempoRestante]);

	useEffect(() => {
		const intervalo = setInterval(() => {
			if (tiempoRestante > 0) setTiempoRestante(tiempoRestante - 1);
			if (tiempoRestante === 0) setAreDisabled(true);
		}, 1000);
		return () => clearInterval(intervalo);
	}, [tiempoRestante]);

	if (preguntaActual < 4) {
		return (
			<main className='main-container'>
				<div className='lado-izquierdo'>
					<div className='numero-pregunta'>
						<span> Pregunta {preguntaActual + 1}</span> de {newArray.length}
					</div>
					<div className='titulo-pregunta'>
						{newArray[preguntaActual].titulo}
					</div>
				</div>
				<div className='lado-derecho'>
					{newArray[preguntaActual].opciones.map((respuesta) => (
						<button
							disabled={areDisabled || answeDisabled}
							key={respuesta.id}
							onClick={(e) => [
								handleAnswerSubmit(
									respuesta.isCorrect,
									e,
									respuesta.textoRespuesta
								),
							]}
						>
							{respuesta.textoRespuesta}
						</button>
					))}
				</div>
				<div className='container-tiempo-restante'>
					{!areDisabled ? (
						<span className='tiempo-restante'>
							Tiempo restante: {tiempoRestante}{' '}
						</span>
					) : (
						<button
							className='continuar-tiempo'
							onClick={() => handleLastQuestion()}
						>
							Continuar
						</button>
					)}
				</div>
			</main>
		);
	} else {
		setIsFinished(true);
	}
};

export default QuestionsQuizPresentSimple;
