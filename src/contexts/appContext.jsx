/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
/* import allQuestionsData from '../pages/PresentSimple/QuizPresentSimple/preguntas'; */

export const appContext = createContext();

export function AppContextProvider(props) {
	const [expanded, setExpanded] = useState(false);
	const handleChange = (isExpanded, panel) => {
		setExpanded(isExpanded ? panel : false);
	};

	const valor = {
		expanded,
		setExpanded,
		handleChange,
	};

	return (
		<appContext.Provider value={valor}>{props.children}</appContext.Provider>
	);
}
