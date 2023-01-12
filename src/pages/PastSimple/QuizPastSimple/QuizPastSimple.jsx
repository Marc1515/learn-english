import { useContext } from 'react';
import './QuizPastSimple.css';
import StartQuizPastSimple from './StartQuizPastSimple/StartQuizPastSimple';
import QuestionsQuizPastSimple from './QuestionsQuizPastSimple/QuestionsQuizPastSimple';
import FinishQuizPastSimple from './FinishQuizPastSimple/FinishQuizPastSimple';
import AnswersQuizPastSimple from './AnswersQuizPastSimple/AnswersQuizPastSimple';
import { QuizContext } from '../../../contexts/quizContextPastSimple';

function QuizPastSimple() {
	const { isFinished, answerShow, isStarted, allQuestions } =
		useContext(QuizContext);

	/* En el caso de que el juego haya terminado */
	if (isFinished) return <FinishQuizPastSimple />;
	/* Cuando se muestran las respuestas correctas */
	if (answerShow) return <AnswersQuizPastSimple />;
	/* En el caso que el juego esté por empezar */
	if (isStarted) return <StartQuizPastSimple />;
	/* Las preguntas del Quiz */
	if (allQuestions) return <QuestionsQuizPastSimple />;
}

export default QuizPastSimple;
