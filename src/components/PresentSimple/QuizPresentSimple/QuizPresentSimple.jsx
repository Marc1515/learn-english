import { useEffect, useState } from 'react';
import preguntas from './preguntas';
import './QuizPresentSimple.css';

function QuizPresentSimple() {
	const [preguntaActual, setPreguntaActual] = useState(0);
	const [puntuacion, setPuntuacion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [isStarted, setIsStarted] = useState(true);
	const [tiempoRestante, setTiempoRestante] = useState(0);
	const [areDisabled, setAreDisabled] = useState(false);
	const [answerShow, setAnswerShow] = useState(false);

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

	if (isFinished)
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

	if (answerShow)
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

	if (isStarted)
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
}

export default QuizPresentSimple;
