import { useContext } from 'react';
import './QuizPresentSimple.css';
import StartQuizPresentSimple from './StartQuizPresentSimple/StartQuizPresentSimple';
import QuestionsQuizPresentSimple from './QuestionsQuizPresentSimple/QuestionsQuizPresentSimple';
import FinishQuizPresentSimple from './FinishQuizPresentSimple/FinishQuizPresentSimple';
import AnswersQuizPresentSimple from './AnswersQuizPresentSimple/AnswersQuizPresentSimple';
import { QuizContext } from '../../../contexts/quizContext';

function QuizPresentSimple() {
	const { isFinished, answerShow, isStarted } = useContext(QuizContext);

	/* En el caso de que el juego haya terminado */
	if (isFinished) return <FinishQuizPresentSimple />;
	/* Cuando se muestran las respuestas correctas */
	if (answerShow) return <AnswersQuizPresentSimple />;
	/* En el caso que el juego esté por empezar */
	if (isStarted) return <StartQuizPresentSimple />;

	/* Las preguntas del Quiz */
	return <QuestionsQuizPresentSimple />;
}

export default QuizPresentSimple;
