/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const QuizContext = createContext();

export function QuizContextProvider(props) {
	const [preguntaActual, setPreguntaActual] = useState(0);
	const [puntuacion, setPuntuacion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [isStarted, setIsStarted] = useState(true);
	const [tiempoRestante, setTiempoRestante] = useState(0);
	const [areDisabled, setAreDisabled] = useState(false);
	const [answerShow, setAnswerShow] = useState(false);

	const valor = {
		preguntaActual,
		setPreguntaActual,
		puntuacion,
		setPuntuacion,
		isFinished,
		setIsFinished,
		isStarted,
		setIsStarted,
		tiempoRestante,
		setTiempoRestante,
		areDisabled,
		setAreDisabled,
		answerShow,
		setAnswerShow,
	};

	return (
		<QuizContext.Provider value={valor}>{props.children}</QuizContext.Provider>
	);
}
