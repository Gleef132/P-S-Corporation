const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateId = (length) => {
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

const trainings = [
	{
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/young-sports-lady-beach-make-meditation-exercises_171337-14859.jpg?w=1060&t=st=1681909246~exp=1681909846~hmac=f3d0a9c743169912e5149d1df855ba9a12008d6edfab5d0b3f6f6b6ddc738b6a',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 9,
		reviews: 35983,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Carry',
			secondaryName: 'Stephan',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/attractive-fit-man-working-out-gym_23-2149175370.jpg?w=1060&t=st=1681909266~exp=1681909866~hmac=15a5f152be310e3b607e0cb8a028752f0588a76fe7e49e9276a83ed3b2987b3e',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 7,
		reviews: 123123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'John',
			secondaryName: 'Wick',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/athletics-girls-stadium-exercises_654080-1733.jpg?w=1060&t=st=1681909294~exp=1681909894~hmac=47b30a1d5a42350612e4dca59c2406f40dfcf154df1773c6e0305309eba03621',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 9,
		reviews: 35983,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Carry',
			secondaryName: 'Stephan',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/young-fitness-couple-sportswear-doing-stretching-while-preparing-serious-exercise-modern-city-against-skyscraper_613910-18466.jpg?w=1060&t=st=1681909304~exp=1681909904~hmac=5d5775f09298b93e70108eb710f4e1019f1e102db884caf16582ade439f7e0ea',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 7,
		reviews: 123123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'John',
			secondaryName: 'Wick',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/female-athlete_654080-1601.jpg?w=1380&t=st=1681909313~exp=1681909913~hmac=f076b4bbefa7233ca446a5ae7f791be9a1f4b474517042b3233b0dba8a364c1f',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 9,
		reviews: 35983,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Carry',
			secondaryName: 'Stephan',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Cardio exercises',
		type: 'cardio',
		img: 'https://img.freepik.com/free-photo/woman-jogging-winter-time_23-2149270319.jpg?w=1060&t=st=1681909549~exp=1681910149~hmac=6a49a12fc17ccd36042c905a10a17a303a76cc857d536b281b3b8c574ab9ab03',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 7,
		reviews: 123123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'John',
			secondaryName: 'Wick',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/yoga-beautiful-woman-lifestyle-girl_1303-2461.jpg?w=1060&t=st=1681909623~exp=1681910223~hmac=37bfe2f3c595b730c91fef1aee539b699c45e22e8c011fc0b8ade0a7f0ee8a58',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/jogging-uphill-mountains-summer_651396-1966.jpg?w=1060&t=st=1681909638~exp=1681910238~hmac=ffe046e939343ff8fa752a59273ebf82bbd518c60cb49b93c6a59aeef0b665d5',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/attractive-woman-doing-exercises-nature_651396-3471.jpg?w=1060&t=st=1681909647~exp=1681910247~hmac=4cd89562b0de6e3af64ebdb5a532bc263ef3b479448ee45e449937d1adf93fc8',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/young-attractive-slim-woman-doing-sport-exercises-morning-sunrise-beach-sports-wear-healthy-lifestyle-listening-music-earphones-making-stretching_285396-5510.jpg?w=1060&t=st=1681909710~exp=1681910310~hmac=5a134701e790d7caea58343fa60338756e0d9be127645a3c8ff5eb2e2fd5deb7',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/workout-street_144627-45087.jpg?w=1060&t=st=1681909602~exp=1681910202~hmac=85208c070b7e9579fb407b4111549882c2531c0a0b0eef381fc23af840f1dcbc',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Endurance exercises',
		type: 'endurance',
		img: 'https://img.freepik.com/free-photo/woman-running-beach_23-2147802968.jpg?w=1060&t=st=1681909855~exp=1681910455~hmac=05197a806aae8f37c0ae23c5da2e7c868c585d1d8f671b55aa7373b43e64d30f',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/long-shot-woman-doing-push-ups-beach_23-2148235804.jpg?w=1060&t=st=1681909680~exp=1681910280~hmac=ec4113b7176a66e24e045ee6505c7dd759129dc667a5e071a65321c3cc6dfc9c',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/young-healthy-woman-doing-exercise-with-ropes-beach_155003-18732.jpg?w=1060&t=st=1681909978~exp=1681910578~hmac=7dc56227f22d24ab547134c3dd69582f6ef3c975200315b1fe10c2732c09ec49',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/man-doing-push-ups-activewear-by-beach_23-2148773837.jpg?w=1060&t=st=1681910069~exp=1681910669~hmac=dc205c185e03dee81c7eb9f6808b31d372fd807a6b5f54912c0f5501855647af',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/shirtless-bodybuilder-doing-side-plank-exercise_7502-4749.jpg?w=1060&t=st=1681910148~exp=1681910748~hmac=1a708db946fda7e5c9d7228eb9bf2942d8496924d3cc913c7432fb6e8005b37b',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/young-muscular-shirtless-caucasian-man-doing-pull-ups-horizontal-bar-playground-sunny-summer-s-day-training-his-upper-body-outdoors-concept-sport-workout-healthy-lifestyle-wellbeing_155003-31459.jpg?w=1060&t=st=1681909122~exp=1681909722~hmac=8cc14adb42cab122c9427102d98ae1ebdf05d309be1ff8e7da310db192545bc8',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Power exercises',
		type: 'power',
		img: 'https://img.freepik.com/free-photo/male-athlete-with-bare-torso-doing-abdominal-exercises_651396-2996.jpg?w=1060&t=st=1681909121~exp=1681909721~hmac=17bbd80819ba9571ec4604d0f0b560ff1ceba3bd7d033a6a2fe6e5fcfbeece68',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-development_231208-10353.jpg?w=1060&t=st=1681910225~exp=1681910825~hmac=bd352cba1754cb221b31436b1d4d74fafc6a69423e6b003c0e2c0de9cf41c840',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/eka-pada-rajakapotasana-riverbank_1163-3514.jpg?w=1060&t=st=1681910252~exp=1681910852~hmac=d8b7e36d501424e4cce031e7a0e71f97dd53727e17a685a609b52ff3e17338ab',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/adult-woman-practicing-yoga-home_23-2148756379.jpg?w=740&t=st=1681910236~exp=1681910836~hmac=8767d95ecea26b4ec0e08981c5c744b6606879bc60ebb7993e412d20c24ea13b',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573187.jpg?w=1060&t=st=1681910258~exp=1681910858~hmac=c84a01bf385d0f9cf77ae4a9561bc5617f487caf1cb12e77726bf0813454e760',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
	{
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/sporty-women-doing-yoga-exercises-nature_651396-3785.jpg?w=740&t=st=1681910278~exp=1681910878~hmac=c9420a3136a561785d81cea3b44c64d64df359652eb8604e9aaad5b2105e9f8e',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 213123,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Amélia',
			secondaryName: 'Rhoxane',
			date: '04.17.2023',
			commend: 'good exercises'
		}],
	}, {
		id: generateId(9),
		title: 'Yoga exercises',
		type: 'yoga',
		img: 'https://img.freepik.com/free-photo/meditating-female-is-relaxing-mountains_651396-3176.jpg?w=1380&t=st=1681910296~exp=1681910896~hmac=68b8e67a3da7220f3fabd84b73b32fecd36133dd962a693f94353c20eae82f82',
		video: '',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
		has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has
		 survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of
		 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
		 publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		amountExercise: 8,
		reviews: 919810,
		from: 'P&S Corporation',
		traningMode: '4 times a week',
		commends: [{
			firstName: 'Reinier',
			secondaryName: 'Dobrosław',
			date: '03.31.2023',
			commend: 'good exercises'
		}],
	},
]

module.exports = trainings