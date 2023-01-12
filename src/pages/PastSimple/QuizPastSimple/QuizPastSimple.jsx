import { useContext } from 'react';
import './QuizPastSimple.css';
import StartQuizPresentSimple from './StartQuizPastSimple/StartQuizPastSimple';
import QuestionsQuizPresentSimple from './QuestionsQuizPastSimple/QuestionsQuizPastSimple';
import FinishQuizPresentSimple from './FinishQuizPastSimple/FinishQuizPastSimple';
import AnswersQuizPresentSimple from './AnswersQuizPastSimple/AnswersQuizPastSimple';
import { QuizContext } from '../../../contexts/quizContext';

function QuizPresentSimple() {
	const { isFinished, answerShow, isStarted, allQuestions } =
		useContext(QuizContext);

	/* En el caso de que el juego haya terminado */
	if (isFinished) return <FinishQuizPresentSimple />;
	/* Cuando se muestran las respuestas correctas */
	if (answerShow) return <AnswersQuizPresentSimple />;
	/* En el caso que el juego esté por empezar */
	if (isStarted) return <StartQuizPresentSimple />;
	/* Las preguntas del Quiz */
	if (allQuestions) return <QuestionsQuizPresentSimple />;
}

export default QuizPresentSimple;
