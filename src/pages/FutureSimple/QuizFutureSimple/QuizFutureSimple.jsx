import { useContext } from 'react';
import './QuizFutureSimple.css';
import StartQuizFutureSimple from './StartQuizFutureSimple/StartQuizFutureSimple';
import QuestionsQuizFutureSimple from './QuestionsQuizFutureSimple/QuestionsQuizFutureSimple';
import FinishQuizFutureSimple from './FinishQuizFutureSimple/FinishQuizFutureSimple';
import AnswersQuizFutureSimple from './AnswersQuizFutureSimple/AnswersQuizFutureSimple';
import { QuizContext } from '../../../contexts/quizContextFutureSimple';

function QuizFutureSimple() {
	const { isFinished, answerShow, isStarted, allQuestions } =
		useContext(QuizContext);

	/* En el caso de que el juego haya terminado */
	if (isFinished) return <FinishQuizFutureSimple />;
	/* Cuando se muestran las respuestas correctas */
	if (answerShow) return <AnswersQuizFutureSimple />;
	/* En el caso que el juego esté por empezar */
	if (isStarted) return <StartQuizFutureSimple />;
	/* Las preguntas del Quiz */
	if (allQuestions) return <QuestionsQuizFutureSimple />;
}

export default QuizFutureSimple;
