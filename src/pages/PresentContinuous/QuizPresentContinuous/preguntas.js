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
		titulo: 'Are you ___ tired?',
		opciones: [
			{ id: 73, textoRespuesta: 'not', isCorrect: false },
			{ id: 74, textoRespuesta: 'feel', isCorrect: false },
			{ id: 75, textoRespuesta: 'feeling', isCorrect: true },
			{ id: 76, textoRespuesta: 'to', isCorrect: false },
		],
	},
	{
		titulo: 'Is it ___ to rain today?',
		opciones: [
			{ id: 77, textoRespuesta: 'going', isCorrect: true },
			{ id: 78, textoRespuesta: 'go', isCorrect: false },
			{ id: 79, textoRespuesta: 'is', isCorrect: false },
			{ id: 80, textoRespuesta: 'are', isCorrect: false },
		],
	},
	{
		titulo: '___ she ___ to the concert?',
		opciones: [
			{ id: 81, textoRespuesta: 'Are/go', isCorrect: false },
			{ id: 82, textoRespuesta: 'Are/going', isCorrect: false },
			{ id: 83, textoRespuesta: 'Is/going', isCorrect: true },
			{ id: 84, textoRespuesta: 'Is/go', isCorrect: false },
		],
	},
	{
		titulo: '___ he ___ on the weekend?',
		opciones: [
			{ id: 85, textoRespuesta: 'Is/working', isCorrect: true },
			{ id: 86, textoRespuesta: `Aren't/working`, isCorrect: false },
			{ id: 87, textoRespuesta: 'Are/working', isCorrect: false },
			{ id: 88, textoRespuesta: 'Are/work', isCorrect: false },
		],
	},
	{
		titulo: '___ they ___ a trip?',
		opciones: [
			{ id: 89, textoRespuesta: `Isn't taking`, isCorrect: false },
			{ id: 90, textoRespuesta: 'Is/taking', isCorrect: false },
			{ id: 91, textoRespuesta: 'Are/taking', isCorrect: true },
			{ id: 92, textoRespuesta: 'Are/take', isCorrect: false },
		],
	},
	{
		titulo: '___ she ___ a nap?',
		opciones: [
			{ id: 93, textoRespuesta: 'Is/take', isCorrect: false },
			{ id: 94, textoRespuesta: 'Are/taking', isCorrect: false },
			{ id: 95, textoRespuesta: `Aren't/taking`, isCorrect: false },
			{ id: 96, textoRespuesta: `Isn't/taking`, isCorrect: true },
		],
	},
	{
		titulo: `___ he ___ a movie?`,
		opciones: [
			{ id: 97, textoRespuesta: `Are/watch`, isCorrect: false },
			{ id: 98, textoRespuesta: `Isn't/watching`, isCorrect: true },
			{ id: 99, textoRespuesta: `Aren't/watching`, isCorrect: false },
			{ id: 100, textoRespuesta: 'Is/watch', isCorrect: false },
		],
	},
	{
		titulo: `___ they ___ on a hike?`,
		opciones: [
			{ id: 101, textoRespuesta: 'Is/go', isCorrect: false },
			{ id: 102, textoRespuesta: `Aren't/going`, isCorrect: true },
			{ id: 103, textoRespuesta: 'Are/go', isCorrect: false },
			{ id: 104, textoRespuesta: `Isn't/go`, isCorrect: false },
		],
	},
	{
		titulo: 'The apples ___ on the tree.',
		opciones: [
			{ id: 105, textoRespuesta: 'are ripening', isCorrect: true },
			{ id: 106, textoRespuesta: 'ripening', isCorrect: false },
			{ id: 107, textoRespuesta: 'is ripen', isCorrect: false },
			{ id: 108, textoRespuesta: 'are ripen', isCorrect: false },
		],
	},
	{
		titulo: 'The carrots ___ in the garden.',
		opciones: [
			{ id: 109, textoRespuesta: 'growing', isCorrect: false },
			{ id: 110, textoRespuesta: 'is growing', isCorrect: false },
			{ id: 111, textoRespuesta: 'are grow', isCorrect: false },
			{ id: 112, textoRespuesta: 'are growing', isCorrect: true },
		],
	},
	{
		titulo: 'The heart ___ blood.',
		opciones: [
			{ id: 113, textoRespuesta: 'is pumping', isCorrect: true },
			{ id: 114, textoRespuesta: `aren't pumping`, isCorrect: false },
			{ id: 115, textoRespuesta: 'are pumping', isCorrect: false },
			{ id: 116, textoRespuesta: 'is pump', isCorrect: false },
		],
	},
	{
		titulo: 'Cars ___ on the road.',
		opciones: [
			{ id: 117, textoRespuesta: 'is driving', isCorrect: false },
			{ id: 118, textoRespuesta: 'are driving', isCorrect: true },
			{ id: 119, textoRespuesta: `isn't drive`, isCorrect: false },
			{ id: 120, textoRespuesta: 'driving', isCorrect: false },
		],
	},
	{
		titulo: 'Planes ___ in the sky.',
		opciones: [
			{ id: 121, textoRespuesta: 'are fly', isCorrect: false },
			{ id: 122, textoRespuesta: 'are flying', isCorrect: true },
			{ id: 123, textoRespuesta: `isn't flying`, isCorrect: false },
			{ id: 124, textoRespuesta: 'is flying', isCorrect: false },
		],
	},
	{
		titulo: 'Bananas ___ from the branches.',
		opciones: [
			{ id: 125, textoRespuesta: 'is hanging', isCorrect: false },
			{ id: 126, textoRespuesta: `aren't hang`, isCorrect: false },
			{ id: 127, textoRespuesta: 'are hang', isCorrect: false },
			{ id: 128, textoRespuesta: 'are hanging', isCorrect: true },
		],
	},
	{
		titulo: 'Spinach ___ harvested in the field.',
		opciones: [
			{ id: 129, textoRespuesta: 'being', isCorrect: false },
			{ id: 130, textoRespuesta: 'is been', isCorrect: false },
			{ id: 131, textoRespuesta: 'are being', isCorrect: false },
			{ id: 132, textoRespuesta: 'is being', isCorrect: true },
		],
	},
	{
		titulo: 'The lungs ___ and contracting.',
		opciones: [
			{ id: 133, textoRespuesta: 'are expanding', isCorrect: true },
			{ id: 134, textoRespuesta: 'are expand', isCorrect: false },
			{ id: 135, textoRespuesta: 'is expanding', isCorrect: false },
			{ id: 136, textoRespuesta: 'expanding', isCorrect: false },
		],
	},
	{
		titulo: 'Bicycles ___ ridden around the city.',
		opciones: [
			{ id: 137, textoRespuesta: 'been', isCorrect: false },
			{ id: 138, textoRespuesta: 'are been', isCorrect: false },
			{ id: 139, textoRespuesta: 'are being', isCorrect: true },
			{ id: 140, textoRespuesta: 'being', isCorrect: false },
		],
	},
	{
		titulo: 'Boats ___ on the sea.',
		opciones: [
			{ id: 141, textoRespuesta: 'are sailing', isCorrect: true },
			{ id: 142, textoRespuesta: 'are sail', isCorrect: false },
			{ id: 143, textoRespuesta: 'is sail', isCorrect: false },
			{ id: 144, textoRespuesta: 'is sailing', isCorrect: false },
		],
	},
	{
		titulo: 'France ___ a good weather today.',
		opciones: [
			{ id: 145, textoRespuesta: `isn't have`, isCorrect: false },
			{ id: 146, textoRespuesta: `isn't having`, isCorrect: true },
			{ id: 147, textoRespuesta: `aren't having`, isCorrect: false },
			{ id: 148, textoRespuesta: 'are having', isCorrect: false },
		],
	},
	{
		titulo: `Spain ___ the Olympics this year.`,
		opciones: [
			{ id: 149, textoRespuesta: `isn't hosting`, isCorrect: true },
			{ id: 150, textoRespuesta: `aren't hosting`, isCorrect: false },
			{ id: 151, textoRespuesta: 'are hosting', isCorrect: false },
			{ id: 152, textoRespuesta: 'is host', isCorrect: false },
		],
	},
	{
		titulo: 'Italy ___ a good economic situation.',
		opciones: [
			{ id: 153, textoRespuesta: `aren't having`, isCorrect: false },
			{ id: 154, textoRespuesta: `isn't have`, isCorrect: false },
			{ id: 155, textoRespuesta: 'is have', isCorrect: false },
			{ id: 156, textoRespuesta: `isn't having`, isCorrect: true },
		],
	},
	{
		titulo: 'The Avengers movie ___ out this month.',
		opciones: [
			{ id: 157, textoRespuesta: 'is come', isCorrect: false },
			{ id: 158, textoRespuesta: `isn't coming`, isCorrect: true },
			{ id: 159, textoRespuesta: `aren't coming`, isCorrect: false },
			{ id: 160, textoRespuesta: `isn't come`, isCorrect: false },
		],
	},
];

export default preguntas;
