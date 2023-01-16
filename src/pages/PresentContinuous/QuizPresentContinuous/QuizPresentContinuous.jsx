import { useContext } from 'react';
import './QuizPresentContinuous.css';
import StartQuizPresentContinuous from './StartQuizPresentContinuous/StartQuizPresentContinuous';
import QuestionsQuizPresentContinuous from './QuestionsQuizPresentContinuous/QuestionsQuizPresentContinuous';
import FinishQuizPresentContinuous from './FinishQuizPresentContinuous/FinishQuizPresentContinuous';
import AnswersQuizPresentContinuous from './AnswersQuizPresentContinuous/AnswersQuizPresentContinuous';
import { QuizContext } from '../../../contexts/quizContextPresentContinuous';

function QuizPresentContinuous() {
	const { isFinished, answerShow, isStarted, allQuestions } =
		useContext(QuizContext);

	/* En el caso de que el juego haya terminado */
	if (isFinished) return <FinishQuizPresentContinuous />;
	/* Cuando se muestran las respuestas correctas */
	if (answerShow) return <AnswersQuizPresentContinuous />;
	/* En el caso que el juego esté por empezar */
	if (isStarted) return <StartQuizPresentContinuous />;
	/* Las preguntas del Quiz */
	if (allQuestions) return <QuestionsQuizPresentContinuous />;
}

export default QuizPresentContinuous;
