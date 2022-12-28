import Quiz from '../Quiz/Quiz';
import './PresentSimple.css';

const PresentSimple = () => {
	return (
		<div>
			<h1>Present Simple</h1>
			<p>
				Cuando hablamos de los diferentes tiempos verbales, tenemos que hablar
				de cómo formar el tenso, así como cuando lo usamos. Por lo tanto, en
				esta lección, como en las demás lecciones sobre los tiempos verbales,
				miraremos su estructura y uso.
			</p>
			<h2>Reglas Gramaticales</h2>
			<p>
				Para conjugar el presente simple usamos el infinitivo para los sujetos
				“I”, “you”, “we” y “they” y para las terceras personas “he”, “she” y
				“it”, añadimos una “-s” al final del verbo.
			</p>
			<Quiz />
		</div>
	);
};

export { PresentSimple };
