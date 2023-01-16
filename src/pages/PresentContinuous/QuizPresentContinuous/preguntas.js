const preguntas = [
	{
		titulo: 'The sun is ___ brightly.',
		opciones: [
			{ id: 1, textoRespuesta: 'shinning', isCorrect: false },
			{ id: 2, textoRespuesta: 'to', isCorrect: false },
			{ id: 3, textoRespuesta: 'shining', isCorrect: true },
			{ id: 4, textoRespuesta: 'not', isCorrect: false },
		],
	},
	{
		titulo: 'I am ___ happy today',
		opciones: [
			{ id: 5, textoRespuesta: 'are', isCorrect: false },
			{ id: 6, textoRespuesta: 'is', isCorrect: false },
			{ id: 7, textoRespuesta: 'feel', isCorrect: false },
			{ id: 8, textoRespuesta: 'feeling', isCorrect: true },
		],
	},
	{
		titulo: 'She is ___ the guitar.',
		opciones: [
			{ id: 9, textoRespuesta: 'are', isCorrect: false },
			{ id: 10, textoRespuesta: 'playing', isCorrect: true },
			{ id: 11, textoRespuesta: 'play', isCorrect: false },
			{ id: 12, textoRespuesta: 'to', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ in the park.',
		opciones: [
			{ id: 13, textoRespuesta: 'is running', isCorrect: true },
			{ id: 14, textoRespuesta: 'is run', isCorrect: false },
			{ id: 15, textoRespuesta: 'run', isCorrect: false },
			{ id: 16, textoRespuesta: 'running', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ a picnic.',
		opciones: [
			{ id: 17, textoRespuesta: 'is having', isCorrect: false },
			{ id: 18, textoRespuesta: `isn't having`, isCorrect: false },
			{ id: 19, textoRespuesta: 'are having', isCorrect: true },
			{ id: 20, textoRespuesta: 'are have', isCorrect: false },
		],
	},
	{
		titulo: 'I am ___ a book.',
		opciones: [
			{ id: 21, textoRespuesta: 'are', isCorrect: false },
			{ id: 22, textoRespuesta: 'read', isCorrect: false },
			{ id: 23, textoRespuesta: 'is', isCorrect: false },
			{ id: 24, textoRespuesta: 'reading', isCorrect: true },
		],
	},
	{
		titulo: 'She ___ gracefully.',
		opciones: [
			{ id: 25, textoRespuesta: 'are dancing', isCorrect: false },
			{ id: 26, textoRespuesta: 'is dancing', isCorrect: true },
			{ id: 27, textoRespuesta: `aren't dancing`, isCorrect: false },
			{ id: 28, textoRespuesta: 'is dance', isCorrect: false },
		],
	},
	{
		titulo: 'The flowers ___.',
		opciones: [
			{ id: 29, textoRespuesta: 'are blooming', isCorrect: true },
			{ id: 30, textoRespuesta: `aren't blooming`, isCorrect: false },
			{ id: 31, textoRespuesta: 'is bloom', isCorrect: false },
			{ id: 32, textoRespuesta: 'is blooming', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ in the pool.',
		opciones: [
			{ id: 33, textoRespuesta: 'is swimming', isCorrect: true },
			{ id: 34, textoRespuesta: 'is swimm', isCorrect: false },
			{ id: 35, textoRespuesta: `aren't swimming`, isCorrect: false },
			{ id: 36, textoRespuesta: 'are swimm', isCorrect: false },
		],
	},
	{
		titulo: 'The children ___.',
		opciones: [
			{ id: 37, textoRespuesta: `aren't laugh`, isCorrect: false },
			{ id: 38, textoRespuesta: 'is laughing', isCorrect: false },
			{ id: 39, textoRespuesta: `aren't laughing`, isCorrect: false },
			{ id: 40, textoRespuesta: 'are laughing', isCorrect: true },
		],
	},
	{
		titulo: `She ___ to work today.`,
		opciones: [
			{ id: 41, textoRespuesta: `isn't go`, isCorrect: false },
			{ id: 42, textoRespuesta: `aren't going`, isCorrect: false },
			{ id: 43, textoRespuesta: 'are going', isCorrect: false },
			{ id: 44, textoRespuesta: `isn't going`, isCorrect: true },
		],
	},
	{
		titulo: 'I am ___ tired this morning.',
		opciones: [
			{ id: 45, textoRespuesta: 'not feel', isCorrect: false },
			{ id: 46, textoRespuesta: 'not feeling', isCorrect: true },
			{ id: 47, textoRespuesta: 'feel', isCorrect: false },
			{ id: 48, textoRespuesta: 'is', isCorrect: false },
		],
	},
	{
		titulo: `They ___ to the concert tonight.`,
		opciones: [
			{ id: 49, textoRespuesta: 'are go', isCorrect: false },
			{ id: 50, textoRespuesta: 'are going', isCorrect: false },
			{ id: 51, textoRespuesta: `aren't going`, isCorrect: true },
			{ id: 52, textoRespuesta: `isn't going`, isCorrect: false },
		],
	},
	{
		titulo: 'I ___ playing video games.',
		opciones: [
			{ id: 53, textoRespuesta: 'to', isCorrect: false },
			{ id: 54, textoRespuesta: 'are', isCorrect: false },
			{ id: 55, textoRespuesta: 'is', isCorrect: false },
			{ id: 56, textoRespuesta: 'am not', isCorrect: true },
		],
	},
	{
		titulo: `She ___ emails.`,
		opciones: [
			{ id: 57, textoRespuesta: `isn't writing`, isCorrect: true },
			{ id: 58, textoRespuesta: `isn't write`, isCorrect: false },
			{ id: 59, textoRespuesta: 'writing', isCorrect: false },
			{ id: 60, textoRespuesta: 'are writing', isCorrect: false },
		],
	},
	{
		titulo: 'The leaves ___ yet.',
		opciones: [
			{ id: 61, textoRespuesta: `aren't fall`, isCorrect: false },
			{ id: 62, textoRespuesta: `aren't falling`, isCorrect: true },
			{ id: 63, textoRespuesta: `isn't falling`, isCorrect: false },
			{ id: 64, textoRespuesta: 'is falling', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ to the city.',
		opciones: [
			{ id: 65, textoRespuesta: `aren't driving`, isCorrect: false },
			{ id: 66, textoRespuesta: `isn't driving`, isCorrect: true },
			{ id: 67, textoRespuesta: 'are driving', isCorrect: false },
			{ id: 68, textoRespuesta: 'are drive', isCorrect: false },
		],
	},
	{
		titulo: 'The team ___ the match.',
		opciones: [
			{ id: 69, textoRespuesta: 'lose', isCorrect: false },
			{ id: 70, textoRespuesta: 'are losing', isCorrect: false },
			{ id: 71, textoRespuesta: `aren't losing`, isCorrect: false },
			{ id: 72, textoRespuesta: `isn't losing`, isCorrect: true },
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
	{
		titulo: 'He ___ hard every day.',
		opciones: [
			{ id: 81, textoRespuesta: 'study', isCorrect: false },
			{ id: 82, textoRespuesta: 'are', isCorrect: false },
			{ id: 83, textoRespuesta: 'studies', isCorrect: true },
			{ id: 84, textoRespuesta: 'hard', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ soccer on weekends.',
		opciones: [
			{ id: 85, textoRespuesta: 'play', isCorrect: true },
			{ id: 86, textoRespuesta: `play's`, isCorrect: false },
			{ id: 87, textoRespuesta: 'do', isCorrect: false },
			{ id: 88, textoRespuesta: 'does', isCorrect: false },
		],
	},
	{
		titulo: 'I ___ ice cream.',
		opciones: [
			{ id: 89, textoRespuesta: 'loves', isCorrect: false },
			{ id: 90, textoRespuesta: `is`, isCorrect: false },
			{ id: 91, textoRespuesta: 'love', isCorrect: true },
			{ id: 92, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `They ___ play tennis.`,
		opciones: [
			{ id: 93, textoRespuesta: 'study', isCorrect: false },
			{ id: 94, textoRespuesta: 'are', isCorrect: false },
			{ id: 95, textoRespuesta: `doesn't`, isCorrect: false },
			{ id: 96, textoRespuesta: `don't`, isCorrect: true },
		],
	},
	{
		titulo: `I ___ like vegetables.`,
		opciones: [
			{ id: 97, textoRespuesta: `'am`, isCorrect: false },
			{ id: 98, textoRespuesta: `don't`, isCorrect: true },
			{ id: 99, textoRespuesta: 'do', isCorrect: false },
			{ id: 100, textoRespuesta: 'does', isCorrect: false },
		],
	},
	{
		titulo: `He ___ tall.`,
		opciones: [
			{ id: 101, textoRespuesta: 'do', isCorrect: false },
			{ id: 102, textoRespuesta: `isn't`, isCorrect: true },
			{ id: 103, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 104, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `The dog ___ bite.`,
		opciones: [
			{ id: 105, textoRespuesta: `doesn't`, isCorrect: true },
			{ id: 106, textoRespuesta: 'do', isCorrect: false },
			{ id: 107, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 108, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `They ___ eat meat.`,
		opciones: [
			{ id: 109, textoRespuesta: 'is', isCorrect: false },
			{ id: 110, textoRespuesta: `doesn't`, isCorrect: false },
			{ id: 111, textoRespuesta: 'are', isCorrect: false },
			{ id: 112, textoRespuesta: `don't`, isCorrect: true },
		],
	},
	{
		titulo: '___ they play basketball?',
		opciones: [
			{ id: 113, textoRespuesta: 'Do', isCorrect: true },
			{ id: 114, textoRespuesta: 'Does', isCorrect: false },
			{ id: 115, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 116, textoRespuesta: 'is', isCorrect: false },
		],
	},
	{
		titulo: '___ I have to go now?',
		opciones: [
			{ id: 117, textoRespuesta: 'Does', isCorrect: false },
			{ id: 118, textoRespuesta: 'Do', isCorrect: true },
			{ id: 119, textoRespuesta: `Isn't`, isCorrect: false },
			{ id: 120, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: '___ it snow in Summer?',
		opciones: [
			{ id: 121, textoRespuesta: 'Do', isCorrect: false },
			{ id: 122, textoRespuesta: 'Does', isCorrect: true },
			{ id: 123, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 124, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: '___ he work on Sundays?',
		opciones: [
			{ id: 125, textoRespuesta: 'Do', isCorrect: false },
			{ id: 126, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 127, textoRespuesta: 'Are', isCorrect: false },
			{ id: 128, textoRespuesta: 'Does', isCorrect: true },
		],
	},
	{
		titulo: 'The dog ___ loudly.',
		opciones: [
			{ id: 129, textoRespuesta: 'Do', isCorrect: false },
			{ id: 130, textoRespuesta: 'bark', isCorrect: false },
			{ id: 131, textoRespuesta: 'Are', isCorrect: false },
			{ id: 132, textoRespuesta: 'barks', isCorrect: true },
		],
	},
	{
		titulo: 'I ___ to read books.',
		opciones: [
			{ id: 133, textoRespuesta: 'like', isCorrect: true },
			{ id: 134, textoRespuesta: 'are', isCorrect: false },
			{ id: 135, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 136, textoRespuesta: 'likes', isCorrect: false },
		],
	},
	{
		titulo: `I ___ have a car.`,
		opciones: [
			{ id: 137, textoRespuesta: 'do', isCorrect: false },
			{ id: 138, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 139, textoRespuesta: `don't`, isCorrect: true },
			{ id: 140, textoRespuesta: 'does', isCorrect: false },
		],
	},
	{
		titulo: '___ I know you?',
		opciones: [
			{ id: 141, textoRespuesta: 'Do', isCorrect: true },
			{ id: 142, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 143, textoRespuesta: 'Does', isCorrect: false },
			{ id: 144, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: `___ he study at night?`,
		opciones: [
			{ id: 145, textoRespuesta: 'Do', isCorrect: false },
			{ id: 146, textoRespuesta: `Doesn't`, isCorrect: true },
			{ id: 147, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 148, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: 'The cat ___ high.',
		opciones: [
			{ id: 149, textoRespuesta: 'jumps', isCorrect: true },
			{ id: 150, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 151, textoRespuesta: 'jump', isCorrect: false },
			{ id: 152, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: 'I ___ learning new things.',
		opciones: [
			{ id: 153, textoRespuesta: 'loves', isCorrect: false },
			{ id: 154, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 155, textoRespuesta: 'is', isCorrect: false },
			{ id: 156, textoRespuesta: 'love', isCorrect: true },
		],
	},
	{
		titulo: `He ___ interested in politics.`,
		opciones: [
			{ id: 157, textoRespuesta: 'do', isCorrect: false },
			{ id: 158, textoRespuesta: `isn't`, isCorrect: true },
			{ id: 159, textoRespuesta: 'are', isCorrect: false },
			{ id: 160, textoRespuesta: `aren't`, isCorrect: false },
		],
	},
];

export default preguntas;
