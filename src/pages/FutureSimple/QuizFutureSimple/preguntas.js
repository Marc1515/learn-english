const preguntas = [
	{
		titulo: 'I ___ visit my grandparents next week.',
		opciones: [
			{ id: 1, textoRespuesta: 'were', isCorrect: false },
			{ id: 2, textoRespuesta: 'is', isCorrect: false },
			{ id: 3, textoRespuesta: 'will', isCorrect: true },
			{ id: 4, textoRespuesta: 'was', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ a party next weekend.',
		opciones: [
			{ id: 5, textoRespuesta: 'are going', isCorrect: false },
			{ id: 6, textoRespuesta: 'are go to have', isCorrect: false },
			{ id: 7, textoRespuesta: 'is going to have', isCorrect: false },
			{ id: 8, textoRespuesta: 'are going to have', isCorrect: true },
		],
	},
	{
		titulo: 'He ___ his project by tomorrow.',
		opciones: [
			{ id: 9, textoRespuesta: 'is finish', isCorrect: false },
			{ id: 10, textoRespuesta: 'will finish', isCorrect: true },
			{ id: 11, textoRespuesta: 'will finished', isCorrect: false },
			{ id: 12, textoRespuesta: 'will finishing', isCorrect: false },
		],
	},
	{
		titulo: 'She is ___ graduate next month.',
		opciones: [
			{ id: 13, textoRespuesta: 'going to', isCorrect: true },
			{ id: 14, textoRespuesta: 'to', isCorrect: false },
			{ id: 15, textoRespuesta: 'going', isCorrect: false },
			{ id: 16, textoRespuesta: 'go to', isCorrect: false },
		],
	},
	{
		titulo: 'We ___ travel to Europe next summer.',
		opciones: [
			{ id: 17, textoRespuesta: 'was', isCorrect: false },
			{ id: 18, textoRespuesta: 'were', isCorrect: false },
			{ id: 19, textoRespuesta: 'will', isCorrect: true },
			{ id: 20, textoRespuesta: `wasn't`, isCorrect: false },
		],
	},
	{
		titulo: 'They ___ buy a new house next year.',
		opciones: [
			{ id: 21, textoRespuesta: 'going to', isCorrect: false },
			{ id: 22, textoRespuesta: 'is go to', isCorrect: false },
			{ id: 23, textoRespuesta: 'are go to', isCorrect: false },
			{ id: 24, textoRespuesta: 'are going to', isCorrect: true },
		],
	},
	{
		titulo: 'He ___ his new job next week.',
		opciones: [
			{ id: 25, textoRespuesta: 'started', isCorrect: false },
			{ id: 26, textoRespuesta: 'will start', isCorrect: true },
			{ id: 27, textoRespuesta: 'will started', isCorrect: false },
			{ id: 28, textoRespuesta: 'will starts', isCorrect: false },
		],
	},
	{
		titulo: 'She ___ have a baby in six months.',
		opciones: [
			{ id: 29, textoRespuesta: 'is going to', isCorrect: true },
			{ id: 30, textoRespuesta: 'are going to', isCorrect: false },
			{ id: 31, textoRespuesta: `aren't going to`, isCorrect: false },
			{ id: 32, textoRespuesta: 'is going', isCorrect: false },
		],
	},
	{
		titulo: 'We ___ go to the concert next Saturday.',
		opciones: [
			{ id: 33, textoRespuesta: 'will', isCorrect: true },
			{ id: 34, textoRespuesta: 'is', isCorrect: false },
			{ id: 35, textoRespuesta: `aren't`, isCorrect: false },
			{ id: 36, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ to take a cruise next month.',
		opciones: [
			{ id: 37, textoRespuesta: 'going', isCorrect: false },
			{ id: 38, textoRespuesta: 'is going', isCorrect: false },
			{ id: 39, textoRespuesta: `isn't going`, isCorrect: false },
			{ id: 40, textoRespuesta: 'are going', isCorrect: true },
		],
	},
	{
		titulo: 'I ___ go to the gym tomorrow.',
		opciones: [
			{ id: 41, textoRespuesta: 'were', isCorrect: false },
			{ id: 42, textoRespuesta: `wasn't`, isCorrect: false },
			{ id: 43, textoRespuesta: 'was', isCorrect: false },
			{ id: 44, textoRespuesta: `won't`, isCorrect: true },
		],
	},
	{
		titulo: 'They ___ watch the movie tonight.',
		opciones: [
			{ id: 45, textoRespuesta: 'are go to', isCorrect: false },
			{ id: 46, textoRespuesta: `aren't going to`, isCorrect: true },
			{ id: 47, textoRespuesta: `isn't going to`, isCorrect: false },
			{ id: 48, textoRespuesta: 'is going to', isCorrect: false },
		],
	},
	{
		titulo: `He ___ the meeting next week.`,
		opciones: [
			{ id: 49, textoRespuesta: 'attend', isCorrect: false },
			{ id: 50, textoRespuesta: 'was attended', isCorrect: false },
			{ id: 51, textoRespuesta: `won't attend`, isCorrect: true },
			{ id: 52, textoRespuesta: `wasn't attend`, isCorrect: false },
		],
	},
	{
		titulo: 'She ___ take the dog for a walk this afternoon.',
		opciones: [
			{ id: 53, textoRespuesta: `aren't going to`, isCorrect: false },
			{ id: 54, textoRespuesta: 'was going to', isCorrect: false },
			{ id: 55, textoRespuesta: 'are going to', isCorrect: false },
			{ id: 56, textoRespuesta: `isn't going to`, isCorrect: true },
		],
	},
	{
		titulo: 'We ___ a vacation this year.',
		opciones: [
			{ id: 57, textoRespuesta: `won't plan`, isCorrect: true },
			{ id: 58, textoRespuesta: `won't planned`, isCorrect: false },
			{ id: 59, textoRespuesta: `won't planed`, isCorrect: false },
			{ id: 60, textoRespuesta: 'were plan', isCorrect: false },
		],
	},
	{
		titulo: 'They ___ invite us to their wedding.',
		opciones: [
			{ id: 61, textoRespuesta: `aren't going`, isCorrect: false },
			{ id: 62, textoRespuesta: `aren't going to`, isCorrect: true },
			{ id: 63, textoRespuesta: `isn't going to`, isCorrect: false },
			{ id: 64, textoRespuesta: 'is going to', isCorrect: false },
		],
	},
	{
		titulo: 'He ___ his book next month.',
		opciones: [
			{ id: 65, textoRespuesta: `were finishing`, isCorrect: false },
			{ id: 66, textoRespuesta: `won't finish`, isCorrect: true },
			{ id: 67, textoRespuesta: 'was finished', isCorrect: false },
			{ id: 68, textoRespuesta: `won't finishing`, isCorrect: false },
		],
	},
	{
		titulo: `She ___ apply for the job next week.`,
		opciones: [
			{ id: 69, textoRespuesta: 'is going', isCorrect: false },
			{ id: 70, textoRespuesta: 'is go to', isCorrect: false },
			{ id: 71, textoRespuesta: `aren't going to`, isCorrect: false },
			{ id: 72, textoRespuesta: `isn't going to`, isCorrect: true },
		],
	},
	{
		titulo: 'We ___ to the beach this weekend.',
		opciones: [
			{ id: 73, textoRespuesta: 'was go', isCorrect: false },
			{ id: 74, textoRespuesta: `won't go to`, isCorrect: false },
			{ id: 75, textoRespuesta: `won't go`, isCorrect: true },
			{ id: 76, textoRespuesta: `won't going`, isCorrect: false },
		],
	},
	{
		titulo: 'They ___ buy a new car next year.',
		opciones: [
			{ id: 77, textoRespuesta: `aren't going to`, isCorrect: true },
			{ id: 78, textoRespuesta: `isn't going to`, isCorrect: false },
			{ id: 79, textoRespuesta: `aren't going`, isCorrect: false },
			{ id: 80, textoRespuesta: 'going', isCorrect: false },
		],
	},
	{
		titulo: '___ you ___ me for lunch tomorrow?',
		opciones: [
			{ id: 81, textoRespuesta: 'Will/joins', isCorrect: false },
			{ id: 82, textoRespuesta: 'Was/joins', isCorrect: false },
			{ id: 83, textoRespuesta: 'Will/join', isCorrect: true },
			{ id: 84, textoRespuesta: 'Will/joined', isCorrect: false },
		],
	},
	{
		titulo: 'Are they ___ a party tonight?',
		opciones: [
			{ id: 85, textoRespuesta: 'going to have', isCorrect: true },
			{ id: 86, textoRespuesta: 'go to have', isCorrect: false },
			{ id: 87, textoRespuesta: 'going to having', isCorrect: false },
			{ id: 88, textoRespuesta: 'go', isCorrect: false },
		],
	},
	{
		titulo: 'Will he ___ his project on time?',
		opciones: [
			{ id: 89, textoRespuesta: 'finishing', isCorrect: false },
			{ id: 90, textoRespuesta: `finish'ed`, isCorrect: false },
			{ id: 91, textoRespuesta: 'finish', isCorrect: true },
			{ id: 92, textoRespuesta: 'finished', isCorrect: false },
		],
	},
	{
		titulo: `___ she ___ next year?`,
		opciones: [
			{ id: 93, textoRespuesta: 'Are/going to graduate', isCorrect: false },
			{ id: 94, textoRespuesta: 'Was/going to graduate', isCorrect: false },
			{ id: 95, textoRespuesta: `Aren't/going to graduate`, isCorrect: false },
			{ id: 96, textoRespuesta: `Is/going to graduate`, isCorrect: true },
		],
	},
	{
		titulo: `___ we ___ a trip next month?`,
		opciones: [
			{ id: 97, textoRespuesta: 'Are/take', isCorrect: false },
			{ id: 98, textoRespuesta: 'Will/take', isCorrect: true },
			{ id: 99, textoRespuesta: 'Was/take', isCorrect: false },
			{ id: 100, textoRespuesta: `Wasn't/take`, isCorrect: false },
		],
	},
	{
		titulo: `___ they ___ a new house soon?`,
		opciones: [
			{ id: 101, textoRespuesta: 'Are/going to bought', isCorrect: false },
			{ id: 102, textoRespuesta: 'Are/going to buy', isCorrect: true },
			{ id: 103, textoRespuesta: `Isn't/going to buy`, isCorrect: false },
			{ id: 104, textoRespuesta: 'Was/going to buought', isCorrect: false },
		],
	},
	{
		titulo: `___ he ___ his new job next week?`,
		opciones: [
			{ id: 105, textoRespuesta: 'Will/start', isCorrect: true },
			{ id: 106, textoRespuesta: 'Do/starts', isCorrect: false },
			{ id: 107, textoRespuesta: `Aren't/starts`, isCorrect: false },
			{ id: 108, textoRespuesta: 'Will/starts', isCorrect: false },
		],
	},
	{
		titulo: `___ she ___ a baby soon?`,
		opciones: [
			{ id: 109, textoRespuesta: 'Are/going to have', isCorrect: false },
			{ id: 110, textoRespuesta: `Aren't/going to have`, isCorrect: false },
			{ id: 111, textoRespuesta: 'Will/going to have', isCorrect: false },
			{ id: 112, textoRespuesta: `Is/going to have`, isCorrect: true },
		],
	},
	{
		titulo: '___ we ___ to the concert next Saturday?',
		opciones: [
			{ id: 113, textoRespuesta: 'Will/go', isCorrect: true },
			{ id: 114, textoRespuesta: 'Will/going', isCorrect: false },
			{ id: 115, textoRespuesta: `Wasn't/going`, isCorrect: false },
			{ id: 116, textoRespuesta: 'Will/going to', isCorrect: false },
		],
	},
	{
		titulo: '___ they ___ a cruise next month?',
		opciones: [
			{ id: 117, textoRespuesta: 'Is/going to take', isCorrect: false },
			{ id: 118, textoRespuesta: 'Are/going to take', isCorrect: true },
			{ id: 119, textoRespuesta: `Isn't/going to take`, isCorrect: false },
			{ id: 120, textoRespuesta: `Isn't/go to take`, isCorrect: false },
		],
	},
	{
		titulo: '___ you use your hands to write today?',
		opciones: [
			{ id: 121, textoRespuesta: 'Going to', isCorrect: false },
			{ id: 122, textoRespuesta: `Won't`, isCorrect: true },
			{ id: 123, textoRespuesta: `Aren't`, isCorrect: false },
			{ id: 124, textoRespuesta: `Isn't`, isCorrect: false },
		],
	},
	{
		titulo: '___ they ___ their legs to walk home?',
		opciones: [
			{ id: 125, textoRespuesta: 'is/going to uses', isCorrect: false },
			{ id: 126, textoRespuesta: `Aren't/going to used`, isCorrect: false },
			{ id: 127, textoRespuesta: 'Is/going to use', isCorrect: false },
			{ id: 128, textoRespuesta: `Aren't/going to use`, isCorrect: true },
		],
	},
	{
		titulo: '___ he ___ his eyes to read that book?',
		opciones: [
			{ id: 129, textoRespuesta: 'Was/not use', isCorrect: false },
			{ id: 130, textoRespuesta: 'Will/not uses', isCorrect: false },
			{ id: 131, textoRespuesta: 'Will/not useing', isCorrect: false },
			{ id: 132, textoRespuesta: 'Will/not use', isCorrect: true },
		],
	},
	{
		titulo: '___ she ___ her mouth to speak today?',
		opciones: [
			{ id: 133, textoRespuesta: `Isn't/going to use`, isCorrect: true },
			{ id: 134, textoRespuesta: 'Are/going to use', isCorrect: false },
			{ id: 135, textoRespuesta: `Isn't/going to using`, isCorrect: false },
			{ id: 136, textoRespuesta: `Isn't/going to uses`, isCorrect: false },
		],
	},
	{
		titulo: `___ we ___ our ears to listen to the music?`,
		opciones: [
			{ id: 137, textoRespuesta: `Won't/uses`, isCorrect: false },
			{ id: 138, textoRespuesta: `Won't/using`, isCorrect: false },
			{ id: 139, textoRespuesta: `Won't/use`, isCorrect: true },
			{ id: 140, textoRespuesta: 'Are/use', isCorrect: false },
		],
	},
	{
		titulo: '___ they ___ their arms to carry that box?',
		opciones: [
			{ id: 141, textoRespuesta: `Aren't/going to use`, isCorrect: true },
			{ id: 142, textoRespuesta: `isn't/going to use`, isCorrect: false },
			{ id: 143, textoRespuesta: 'is/going to use', isCorrect: false },
			{ id: 144, textoRespuesta: `isn't/go to use`, isCorrect: false },
		],
	},
	{
		titulo: `___ he not use his nose to smell the flowers?`,
		opciones: [
			{ id: 145, textoRespuesta: 'Was', isCorrect: false },
			{ id: 146, textoRespuesta: 'Will', isCorrect: true },
			{ id: 147, textoRespuesta: `Wasn't`, isCorrect: false },
			{ id: 148, textoRespuesta: 'Are', isCorrect: false },
		],
	},
	{
		titulo: '___ she ___ her tongue to taste that food?',
		opciones: [
			{ id: 149, textoRespuesta: `Isn't/going to use`, isCorrect: true },
			{ id: 150, textoRespuesta: `Aren't/going to use`, isCorrect: false },
			{ id: 151, textoRespuesta: 'Are/going to use', isCorrect: false },
			{ id: 152, textoRespuesta: 'Will/going to use', isCorrect: false },
		],
	},
	{
		titulo: '___ we use our feet to run this afternoon?',
		opciones: [
			{ id: 153, textoRespuesta: `Wasn't`, isCorrect: false },
			{ id: 154, textoRespuesta: `Weren't`, isCorrect: false },
			{ id: 155, textoRespuesta: 'is', isCorrect: false },
			{ id: 156, textoRespuesta: `Won't`, isCorrect: true },
		],
	},
	{
		titulo: `___ they ___ their head to think about the problem?`,
		opciones: [
			{ id: 157, textoRespuesta: `Aren't/going to uses`, isCorrect: false },
			{ id: 158, textoRespuesta: `Aren't/going to use`, isCorrect: true },
			{ id: 159, textoRespuesta: 'Is/going to use', isCorrect: false },
			{ id: 160, textoRespuesta: `Isn't/going to use`, isCorrect: false },
		],
	},
];

export default preguntas;
