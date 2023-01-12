const preguntas = [
	{
		titulo: 'He ___ to the store.',
		opciones: [
			{ id: 1, textoRespuesta: 'walks', isCorrect: false },
			{ id: 2, textoRespuesta: 'walk', isCorrect: false },
			{ id: 3, textoRespuesta: 'walked', isCorrect: true },
			{ id: 4, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: 'She ___ for her exam.',
		opciones: [
			{ id: 5, textoRespuesta: 'studies', isCorrect: false },
			{ id: 6, textoRespuesta: 'are', isCorrect: false },
			{ id: 7, textoRespuesta: 'study', isCorrect: false },
			{ id: 8, textoRespuesta: 'studied', isCorrect: true },
		],
	},
	{
		titulo: '___ she come from London?',
		opciones: [
			{ id: 9, textoRespuesta: 'Is', isCorrect: false },
			{ id: 10, textoRespuesta: 'Did', isCorrect: true },
			{ id: 11, textoRespuesta: 'Done', isCorrect: false },
			{ id: 12, textoRespuesta: 'Do', isCorrect: false },
		],
	},
	{
		titulo: 'I ___ my grandparents.',
		opciones: [
			{ id: 13, textoRespuesta: 'visited', isCorrect: true },
			{ id: 14, textoRespuesta: 'do', isCorrect: false },
			{ id: 15, textoRespuesta: 'is', isCorrect: false },
			{ id: 16, textoRespuesta: 'visitet', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ late last night.',
		opciones: [
			{ id: 17, textoRespuesta: 'work', isCorrect: false },
			{ id: 18, textoRespuesta: 'are', isCorrect: false },
			{ id: 19, textoRespuesta: 'worked', isCorrect: true },
			{ id: 20, textoRespuesta: 'woorked', isCorrect: false },
		],
	},
	{
		titulo: `He ___ walk to the store.`,
		opciones: [
			{ id: 21, textoRespuesta: 'will', isCorrect: false },
			{ id: 22, textoRespuesta: 'do', isCorrect: false },
			{ id: 23, textoRespuesta: 'does', isCorrect: false },
			{ id: 24, textoRespuesta: `didn't`, isCorrect: true },
		],
	},
	{
		titulo: `She ___ study for her exam.`,
		opciones: [
			{ id: 25, textoRespuesta: `ins't`, isCorrect: false },
			{ id: 26, textoRespuesta: `didn't`, isCorrect: true },
			{ id: 27, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 28, textoRespuesta: 'life', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ play in the park.',
		opciones: [
			{ id: 29, textoRespuesta: `didn't`, isCorrect: true },
			{ id: 30, textoRespuesta: 'do not', isCorrect: false },
			{ id: 31, textoRespuesta: `ins't`, isCorrect: false },
			{ id: 32, textoRespuesta: 'not', isCorrect: false },
		],
	},
	{
		titulo: 'I ___ visit my grandparents.',
		opciones: [
			{ id: 33, textoRespuesta: 'did not', isCorrect: true },
			{ id: 34, textoRespuesta: 'is not', isCorrect: false },
			{ id: 35, textoRespuesta: 'are', isCorrect: false },
			{ id: 36, textoRespuesta: 'will', isCorrect: false },
		],
	},
	{
		titulo: `He ___ work late last night.`,
		opciones: [
			{ id: 37, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 38, textoRespuesta: 'are', isCorrect: false },
			{ id: 39, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 40, textoRespuesta: `didn't`, isCorrect: true },
		],
	},
	{
		titulo: '___ he ever learn to swim?',
		opciones: [
			{ id: 41, textoRespuesta: 'Do', isCorrect: false },
			{ id: 42, textoRespuesta: `Don't`, isCorrect: false },
			{ id: 43, textoRespuesta: 'Are', isCorrect: false },
			{ id: 44, textoRespuesta: 'Did', isCorrect: true },
		],
	},
	{
		titulo: '___ she go to the concert last night?',
		opciones: [
			{ id: 45, textoRespuesta: 'Are', isCorrect: false },
			{ id: 46, textoRespuesta: 'Did', isCorrect: true },
			{ id: 47, textoRespuesta: 'Done', isCorrect: false },
			{ id: 48, textoRespuesta: `Don't`, isCorrect: false },
		],
	},
	{
		titulo: '___ you try the new restaurant?',
		opciones: [
			{ id: 49, textoRespuesta: 'Are', isCorrect: false },
			{ id: 50, textoRespuesta: 'Is', isCorrect: false },
			{ id: 51, textoRespuesta: 'Did', isCorrect: true },
			{ id: 52, textoRespuesta: 'Do', isCorrect: false },
		],
	},
	{
		titulo: 'She ___ to the concert last night.',
		opciones: [
			{ id: 53, textoRespuesta: 'go', isCorrect: false },
			{ id: 54, textoRespuesta: 'is', isCorrect: false },
			{ id: 55, textoRespuesta: 'wents', isCorrect: false },
			{ id: 56, textoRespuesta: 'went', isCorrect: true },
		],
	},
	{
		titulo: 'They ___ the project on time.',
		opciones: [
			{ id: 57, textoRespuesta: 'finished', isCorrect: true },
			{ id: 58, textoRespuesta: 'finish', isCorrect: false },
			{ id: 59, textoRespuesta: 'is', isCorrect: false },
			{ id: 60, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ the president last month.',
		opciones: [
			{ id: 61, textoRespuesta: 'meet', isCorrect: false },
			{ id: 62, textoRespuesta: 'met', isCorrect: true },
			{ id: 63, textoRespuesta: 'is', isCorrect: false },
			{ id: 64, textoRespuesta: `aren't`, isCorrect: false },
		],
	},
	{
		titulo: 'They ___ a new house.',
		opciones: [
			{ id: 65, textoRespuesta: 'by', isCorrect: false },
			{ id: 66, textoRespuesta: 'bought', isCorrect: true },
			{ id: 67, textoRespuesta: 'does', isCorrect: false },
			{ id: 68, textoRespuesta: 'do', isCorrect: false },
		],
	},
	{
		titulo: 'I ___ a promotion at work.',
		opciones: [
			{ id: 69, textoRespuesta: 'am', isCorrect: false },
			{ id: 70, textoRespuesta: 'is', isCorrect: false },
			{ id: 71, textoRespuesta: 'get', isCorrect: false },
			{ id: 72, textoRespuesta: 'got', isCorrect: true },
		],
	},
	{
		titulo: 'He ___ from college last year.',
		opciones: [
			{ id: 73, textoRespuesta: 'are', isCorrect: false },
			{ id: 74, textoRespuesta: '---', isCorrect: false },
			{ id: 75, textoRespuesta: 'graduated', isCorrect: true },
			{ id: 76, textoRespuesta: 'graduate', isCorrect: false },
		],
	},
	{
		titulo: 'She ___ a baby last week.',
		opciones: [
			{ id: 77, textoRespuesta: 'had', isCorrect: true },
			{ id: 78, textoRespuesta: 'have', isCorrect: false },
			{ id: 79, textoRespuesta: 'will', isCorrect: false },
			{ id: 80, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `They ___ complete the project on schedule.`,
		opciones: [
			{ id: 81, textoRespuesta: 'are', isCorrect: false },
			{ id: 82, textoRespuesta: 'do', isCorrect: false },
			{ id: 83, textoRespuesta: `didn't`, isCorrect: true },
			{ id: 84, textoRespuesta: `don't`, isCorrect: false },
		],
	},
	{
		titulo: 'He never ___ the president.',
		opciones: [
			{ id: 85, textoRespuesta: 'met', isCorrect: true },
			{ id: 86, textoRespuesta: 'do', isCorrect: false },
			{ id: 87, textoRespuesta: 'meet', isCorrect: false },
			{ id: 88, textoRespuesta: 'does', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ not to buy a new house.',
		opciones: [
			{ id: 89, textoRespuesta: 'go', isCorrect: false },
			{ id: 90, textoRespuesta: `is`, isCorrect: false },
			{ id: 91, textoRespuesta: 'decided', isCorrect: true },
			{ id: 92, textoRespuesta: 'decide', isCorrect: false },
		],
	},
	{
		titulo: `I ___ receive a promotion.`,
		opciones: [
			{ id: 93, textoRespuesta: 'do', isCorrect: false },
			{ id: 94, textoRespuesta: `don't`, isCorrect: false },
			{ id: 95, textoRespuesta: `doesn't`, isCorrect: false },
			{ id: 96, textoRespuesta: `didn't`, isCorrect: true },
		],
	},
	{
		titulo: '___ the knights complete their quest on time?',
		opciones: [
			{ id: 97, textoRespuesta: 'Is', isCorrect: false },
			{ id: 98, textoRespuesta: 'Did', isCorrect: true },
			{ id: 99, textoRespuesta: 'Do', isCorrect: false },
			{ id: 100, textoRespuesta: 'Does', isCorrect: false },
		],
	},
	{
		titulo: '___ the damsel pass her horseback riding test?',
		opciones: [
			{ id: 101, textoRespuesta: 'Do', isCorrect: false },
			{ id: 102, textoRespuesta: 'Did', isCorrect: true },
			{ id: 103, textoRespuesta: 'Does', isCorrect: false },
			{ id: 104, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: '___ the lord and lady acquire a new manor?',
		opciones: [
			{ id: 105, textoRespuesta: 'Did', isCorrect: true },
			{ id: 106, textoRespuesta: 'Do', isCorrect: false },
			{ id: 107, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 108, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: 'The Jedi Knight ___ the force.',
		opciones: [
			{ id: 109, textoRespuesta: 'is', isCorrect: false },
			{ id: 110, textoRespuesta: `doesn't`, isCorrect: false },
			{ id: 111, textoRespuesta: 'master', isCorrect: false },
			{ id: 112, textoRespuesta: 'mastered', isCorrect: true },
		],
	},
	{
		titulo: 'The Sith Lord ___ his fury.',
		opciones: [
			{ id: 113, textoRespuesta: 'unleashed', isCorrect: true },
			{ id: 114, textoRespuesta: 'unleashet', isCorrect: false },
			{ id: 115, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 116, textoRespuesta: 'unleash', isCorrect: false },
		],
	},
	{
		titulo: 'The clone troopers ___ orders.',
		opciones: [
			{ id: 117, textoRespuesta: 'follow', isCorrect: false },
			{ id: 118, textoRespuesta: 'followed', isCorrect: true },
			{ id: 119, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 120, textoRespuesta: 'folloow', isCorrect: false },
		],
	},
	{
		titulo: 'The Senator ___ the republic.',
		opciones: [
			{ id: 121, textoRespuesta: 'do', isCorrect: false },
			{ id: 122, textoRespuesta: 'betrayed', isCorrect: true },
			{ id: 123, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 124, textoRespuesta: 'betray', isCorrect: false },
		],
	},
	{
		titulo: 'The Padawan ___ his training.',
		opciones: [
			{ id: 125, textoRespuesta: 'completet', isCorrect: false },
			{ id: 126, textoRespuesta: `isn't`, isCorrect: false },
			{ id: 127, textoRespuesta: 'complet', isCorrect: false },
			{ id: 128, textoRespuesta: 'completed', isCorrect: true },
		],
	},
	{
		titulo: 'The starship ___ the jump to hyperspace.',
		opciones: [
			{ id: 129, textoRespuesta: 'makes', isCorrect: false },
			{ id: 130, textoRespuesta: 'make', isCorrect: false },
			{ id: 131, textoRespuesta: 'mades', isCorrect: false },
			{ id: 132, textoRespuesta: 'made', isCorrect: true },
		],
	},
	{
		titulo: `She ___ at the school trip.`,
		opciones: [
			{ id: 133, textoRespuesta: `wasn't`, isCorrect: true },
			{ id: 134, textoRespuesta: 'are', isCorrect: false },
			{ id: 135, textoRespuesta: `weren't`, isCorrect: false },
			{ id: 136, textoRespuesta: 'were', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ the star player on the team.',
		opciones: [
			{ id: 137, textoRespuesta: 'are', isCorrect: false },
			{ id: 138, textoRespuesta: 'were', isCorrect: false },
			{ id: 139, textoRespuesta: 'was', isCorrect: true },
			{ id: 140, textoRespuesta: `weren't`, isCorrect: false },
		],
	},
	{
		titulo: 'They ___ able to find summer jobs.',
		opciones: [
			{ id: 141, textoRespuesta: 'were', isCorrect: true },
			{ id: 142, textoRespuesta: `wasn't`, isCorrect: false },
			{ id: 143, textoRespuesta: 'was', isCorrect: false },
			{ id: 144, textoRespuesta: 'is', isCorrect: false },
		],
	},
	{
		titulo: `He ___ able to finish the marathon.`,
		opciones: [
			{ id: 145, textoRespuesta: 'are', isCorrect: false },
			{ id: 146, textoRespuesta: `wasn't`, isCorrect: true },
			{ id: 147, textoRespuesta: `weren't`, isCorrect: false },
			{ id: 148, textoRespuesta: 'is', isCorrect: false },
		],
	},
	{
		titulo: `They ___ invited to the wedding.`,
		opciones: [
			{ id: 149, textoRespuesta: `weren't`, isCorrect: true },
			{ id: 150, textoRespuesta: `wasn't`, isCorrect: false },
			{ id: 151, textoRespuesta: 'was', isCorrect: false },
			{ id: 152, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: `They ___ able to sell their house.`,
		opciones: [
			{ id: 153, textoRespuesta: 'was', isCorrect: false },
			{ id: 154, textoRespuesta: `wasn't`, isCorrect: false },
			{ id: 155, textoRespuesta: 'is', isCorrect: false },
			{ id: 156, textoRespuesta: `weren't`, isCorrect: true },
		],
	},
	{
		titulo: `He ___ able to fix the broken appliance.`,
		opciones: [
			{ id: 157, textoRespuesta: 'are', isCorrect: false },
			{ id: 158, textoRespuesta: `wasn't`, isCorrect: true },
			{ id: 159, textoRespuesta: 'is', isCorrect: false },
			{ id: 160, textoRespuesta: `weren't`, isCorrect: false },
		],
	},
];

export default preguntas;
