export interface IMeal {
	id: string;
	title: string;
	type: string;
	img: string;
	meals: IMealWeek[];
}

export interface IMealWeek {
	day: string;
	breakfast: string[];
	lunch: string[];
	dinner: string[];
	firstSnack: string[];
	secondarySnack: string[];
}