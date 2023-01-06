/* eslint-disable prefer-const */
import { useContext, useEffect } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';

const QuestionsQuizPresentSimple = () => {
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
	} = useContext(QuizContext);

	const handleAnswerSubmit = (isCorrect, e) => {
		// Añadir puntuación
		if (isCorrect) setPuntuacion(puntuacion + 1);
		// Añadir estilos de pregunta
		e.target.classList.add(isCorrect ? 'correct' : 'incorrect');

		setTimeout(() => {
			setTiempoRestante(20);
		}, 1000);

		setTimeout(() => {
			// Cambiar a la siguiente pregunta
			if (preguntaActual === newArray.length - 1) {
				setIsFinished(true);
			} else {
				setPreguntaActual(preguntaActual + 1);
				console.log(newArray.length);
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
					<div>
						{!areDisabled ? (
							<span className='tiempo-restante'>
								Tiempo restante: {tiempoRestante}{' '}
							</span>
						) : (
							<button onClick={() => handleLastQuestion()}>Continuar</button>
						)}
					</div>
				</div>
				<div className='lado-derecho'>
					{newArray[preguntaActual].opciones.map((respuesta) => (
						<button
							disabled={areDisabled}
							key={respuesta.id}
							onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
						>
							{respuesta.textoRespuesta}
						</button>
					))}
				</div>
			</main>
		);
	} else {
		setIsFinished(true);
	}
};

export default QuestionsQuizPresentSimple;
