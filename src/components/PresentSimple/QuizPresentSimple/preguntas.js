const preguntas = [
	{
		titulo: '___ you live in a house or a flat?',
		opciones: [
			{ id: 1, textoRespuesta: 'Does', isCorrect: false },
			{ id: 2, textoRespuesta: 'Is', isCorrect: false },
			{ id: 3, textoRespuesta: 'Do', isCorrect: true },
			{ id: 4, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: '___ he go to the same college as you?',
		opciones: [
			{ id: 5, textoRespuesta: 'Are', isCorrect: false },
			{ id: 6, textoRespuesta: 'Is', isCorrect: false },
			{ id: 7, textoRespuesta: 'Do', isCorrect: false },
			{ id: 8, textoRespuesta: 'Does', isCorrect: true },
		],
	},
	{
		titulo: '___ she come from London?',
		opciones: [
			{ id: 9, textoRespuesta: 'Is', isCorrect: false },
			{ id: 10, textoRespuesta: 'Did', isCorrect: true },
			{ id: 11, textoRespuesta: 'Done', isCorrect: false },
			{ id: 12, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: '___ you live alone?',
		opciones: [
			{ id: 13, textoRespuesta: 'Do', isCorrect: true },
			{ id: 14, textoRespuesta: 'Are', isCorrect: false },
			{ id: 15, textoRespuesta: 'is', isCorrect: false },
			{ id: 16, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ speak three languages fluently.',
		opciones: [
			{ id: 17, textoRespuesta: 'have', isCorrect: false },
			{ id: 18, textoRespuesta: 'will', isCorrect: false },
			{ id: 19, textoRespuesta: `doesn't`, isCorrect: true },
			{ id: 20, textoRespuesta: 'come', isCorrect: false },
		],
	},
	{
		titulo: 'The cat ___ on the windowsill.',
		opciones: [
			{ id: 21, textoRespuesta: 'Are', isCorrect: false },
			{ id: 22, textoRespuesta: 'sit', isCorrect: false },
			{ id: 23, textoRespuesta: 'Do', isCorrect: false },
			{ id: 24, textoRespuesta: 'sits', isCorrect: true },
		],
	},
	{
		titulo: 'They ___ in a small apartment.',
		opciones: [
			{ id: 25, textoRespuesta: 'is', isCorrect: false },
			{ id: 26, textoRespuesta: 'live', isCorrect: true },
			{ id: 27, textoRespuesta: 'lives', isCorrect: false },
			{ id: 28, textoRespuesta: 'life', isCorrect: false },
		],
	},
	{
		titulo: '___ you like pizza?',
		opciones: [
			{ id: 29, textoRespuesta: 'Do', isCorrect: true },
			{ id: 30, textoRespuesta: 'Are', isCorrect: false },
			{ id: 31, textoRespuesta: 'is', isCorrect: false },
			{ id: 32, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: 'She ___ coffee every morning.',
		opciones: [
			{ id: 33, textoRespuesta: 'drinks', isCorrect: true },
			{ id: 34, textoRespuesta: 'is', isCorrect: false },
			{ id: 35, textoRespuesta: 'drink', isCorrect: false },
			{ id: 36, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `She ___ drink soda.`,
		opciones: [
			{ id: 37, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 38, textoRespuesta: 'Are', isCorrect: false },
			{ id: 39, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 40, textoRespuesta: `doesn't`, isCorrect: true },
		],
	},
	{
		titulo: '___ she speak Spanish?',
		opciones: [
			{ id: 41, textoRespuesta: 'Do', isCorrect: true },
			{ id: 42, textoRespuesta: `Don't`, isCorrect: false },
			{ id: 43, textoRespuesta: 'is', isCorrect: false },
			{ id: 44, textoRespuesta: 'Does', isCorrect: true },
		],
	},
	{
		titulo: 'He ___ at a bank.',
		opciones: [
			{ id: 45, textoRespuesta: '---', isCorrect: false },
			{ id: 46, textoRespuesta: 'works', isCorrect: true },
			{ id: 47, textoRespuesta: 'work', isCorrect: false },
			{ id: 48, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `He ___ play soccer.`,
		opciones: [
			{ id: 49, textoRespuesta: 'are', isCorrect: false },
			{ id: 50, textoRespuesta: 'is', isCorrect: false },
			{ id: 51, textoRespuesta: `doesn't`, isCorrect: true },
			{ id: 52, textoRespuesta: `aren't`, isCorrect: false },
		],
	},
	{
		titulo: '___ they have any pets?',
		opciones: [
			{ id: 53, textoRespuesta: 'am', isCorrect: false },
			{ id: 54, textoRespuesta: 'I', isCorrect: false },
			{ id: 55, textoRespuesta: 'Does', isCorrect: false },
			{ id: 56, textoRespuesta: 'Do', isCorrect: true },
		],
	},
	{
		titulo: 'I ___ a student.',
		opciones: [
			{ id: 57, textoRespuesta: 'am', isCorrect: true },
			{ id: 58, textoRespuesta: 'does', isCorrect: false },
			{ id: 59, textoRespuesta: 'is', isCorrect: false },
			{ id: 60, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: 'You ___ my best friend.',
		opciones: [
			{ id: 61, textoRespuesta: 'am', isCorrect: false },
			{ id: 62, textoRespuesta: 'are', isCorrect: true },
			{ id: 63, textoRespuesta: 'is', isCorrect: false },
			{ id: 64, textoRespuesta: 'do', isCorrect: false },
		],
	},
	{
		titulo: 'I am __ tired.',
		opciones: [
			{ id: 65, textoRespuesta: `'m`, isCorrect: false },
			{ id: 66, textoRespuesta: 'not', isCorrect: true },
			{ id: 67, textoRespuesta: 'Does', isCorrect: false },
			{ id: 68, textoRespuesta: 'Do', isCorrect: false },
		],
	},
	{
		titulo: `We ___ have any homework.`,
		opciones: [
			{ id: 69, textoRespuesta: 'am', isCorrect: false },
			{ id: 70, textoRespuesta: 'is', isCorrect: false },
			{ id: 71, textoRespuesta: `doesn't`, isCorrect: false },
			{ id: 72, textoRespuesta: `don't`, isCorrect: true },
		],
	},
	{
		titulo: 'Am ___ early for the meeting?',
		opciones: [
			{ id: 73, textoRespuesta: 'not', isCorrect: false },
			{ id: 74, textoRespuesta: `I'm`, isCorrect: false },
			{ id: 75, textoRespuesta: 'I', isCorrect: true },
			{ id: 76, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: 'We ___ dinner at 6 PM.',
		opciones: [
			{ id: 77, textoRespuesta: 'eat', isCorrect: true },
			{ id: 78, textoRespuesta: 'not', isCorrect: false },
			{ id: 79, textoRespuesta: `is`, isCorrect: false },
			{ id: 80, textoRespuesta: 'eats', isCorrect: false },
		],
	},
];

export default preguntas;
