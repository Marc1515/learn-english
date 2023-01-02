import { useContext, useEffect } from 'react';
import { QuizContext } from '../../../../contexts/quizContext';
import preguntas from '../preguntas';

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
			if (preguntaActual === preguntas.length - 1) {
				setIsFinished(true);
			} else {
				setPreguntaActual(preguntaActual + 1);
			}
		}, 1000);
	};

	useEffect(() => {
		const intervalo = setInterval(() => {
			if (tiempoRestante > 0) setTiempoRestante(tiempoRestante - 1);
			if (tiempoRestante === 0) setAreDisabled(true);
		}, 1000);
		return () => clearInterval(intervalo);
	}, [tiempoRestante]);

	return (
		<main className='main-container'>
			<div className='lado-izquierdo'>
				<div className='numero-pregunta'>
					<span> Pregunta {preguntaActual + 1}</span> de {preguntas.length}
				</div>
				<div className='titulo-pregunta'>
					{preguntas[preguntaActual].titulo}
				</div>
				<div>
					{!areDisabled ? (
						<span className='tiempo-restante'>
							Tiempo restante: {tiempoRestante}{' '}
						</span>
					) : (
						<button
							onClick={() => {
								setTiempoRestante(20);
								setAreDisabled(false);
								setPreguntaActual(preguntaActual + 1);
							}}
						>
							Continuar
						</button>
					)}
				</div>
			</div>
			<div className='lado-derecho'>
				{preguntas[preguntaActual].opciones.map((respuesta) => (
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
};

export default QuestionsQuizPresentSimple;
