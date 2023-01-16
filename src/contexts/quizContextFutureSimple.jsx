/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import allQuestionsData from '../pages/FutureSimple/QuizFutureSimple/preguntas';

export const QuizContext = createContext();

export function QuizContextProvider(props) {
	const [allQuestions, setAllQuestions] = useState(false);
	const [progressBar, setProgressBar] = useState(false);
	const [userAnswers, setUserAnswers] = useState([]);
	const [colorAnswer, setColorAnswer] = useState([]);
	const [newArray, setNewArray] = useState();
	const [preguntaActual, setPreguntaActual] = useState(0);
	const [puntuacion, setPuntuacion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [isStarted, setIsStarted] = useState(true);
	const [tiempoRestante, setTiempoRestante] = useState(0);
	const [areDisabled, setAreDisabled] = useState(false);
	const [answerShow, setAnswerShow] = useState(false);

	const newElements = () => {
		const newArray = [];
		const selected = {}; // Objeto que usaremos como conjunto de marcas
		for (let i = 0; i < 4; i++) {
			// Generamos un número aleatorio entre 0 y el tamaño del array original
			let randomIndex = Math.floor(Math.random() * allQuestionsData.length);

			// Verificamos si el elemento ya ha sido seleccionado
			while (selected[randomIndex]) {
				// Si ya ha sido seleccionado, generamos un nuevo número aleatorio
				randomIndex = Math.floor(Math.random() * allQuestionsData.length);
			}

			// Marcamos el elemento como seleccionado
			selected[randomIndex] = true;

			// Extraemos el elemento del array original y lo agregamos al nuevo array
			newArray.push(allQuestionsData[randomIndex]);
		}

		return newArray;
	};

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
		newElements,
		newArray,
		setNewArray,
		allQuestions,
		setAllQuestions,
		userAnswers,
		setUserAnswers,
		colorAnswer,
		setColorAnswer,
		progressBar,
		setProgressBar,
	};

	return (
		<QuizContext.Provider value={valor}>{props.children}</QuizContext.Provider>
	);
}
