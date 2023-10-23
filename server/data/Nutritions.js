const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateId = (length) => {
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

const nutritions = [
	{
		id: generateId(9),
		title: 'Normal portion ≈ 2700 calories',
		type: 'male',
		img: 'https://img.freepik.com/free-photo/top-view-hummus-with-assortment-vegetables-measuring-tape_23-2148562696.jpg?w=1060&t=st=1682251629~exp=1682252229~hmac=e9c40a4ad9b333ab94879840ae3d4cb16100280d4cc3f7181b7553f75e699b9f',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['boilded eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
	{
		id: generateId(9),
		title: 'Portion above average ≈ 3500 calories',
		type: 'male',
		img: 'https://img.freepik.com/free-photo/different-vegetables-seeds-fruits-table-healthy-diet-flat-lay-top-view_1150-42611.jpg?w=1060&t=st=1682251610~exp=1682252210~hmac=57d491edac9eb6470dec0cff33b1a800f0dbf9859b96c62a6e78adbb9abccf5c',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
	{
		id: generateId(9),
		title: 'Large portion ≈ 5000 calories',
		type: 'male',
		img: 'https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=1060&t=st=1682251730~exp=1682252330~hmac=ff01cb558853398aca9a5900615f5dad71a2c5e2553b5d4b0011b4ec46286d39',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
	{
		id: generateId(9),
		title: 'Normal portion ≈ 2000 calories',
		type: 'female',
		img: 'https://img.freepik.com/free-photo/bananas-is-good-way-healthy-carbs_329181-7978.jpg?w=1060&t=st=1682252068~exp=1682252668~hmac=9588b5dcbff299bab7a6455bd813e2d3b1b0415f63e78fdb8e3a637161a10043',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
	{
		id: generateId(9),
		title: 'Portion above average ≈ 2700 calories',
		type: 'female',
		img: 'https://img.freepik.com/free-photo/closeup-athletic-woman-adding-strawberries-while-making-fruit-salad-kitchen_637285-6186.jpg?w=1060&t=st=1682251959~exp=1682252559~hmac=361c15c9263575650088b45b54a31eba298cd0330e35b786cdbe62b3d2a3d87a',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
	{
		id: generateId(9),
		title: 'Large portion ≈ 4000 calories',
		type: 'female',
		img: 'https://img.freepik.com/free-photo/fitness-woman-preparing-detox-juice_23-2148207116.jpg?w=1060&t=st=1682252025~exp=1682252625~hmac=337b52b109d0c182e8f649166531133d27dc604f049e169be86c28de0dbe5eb5',
		meals: [
			{
				day: 'Monday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			},
			{
				day: 'Truesday',
				breakfast: ['scrambled eggs or porridge with fruits', 'vegetable salad', 'green or black tea'],
				lunch: ['boiled meat', 'vegetable salad', 'fruit compote'],
				dinner: ['boiled or baking fish', 'vegetable salad', 'green or black tea'],
				firstSnack: ['cup kefir or banana'],
				secondarySnack: ['green or black tea', 'diet baking']
			}
		]
	},
]

module.exports = nutritions