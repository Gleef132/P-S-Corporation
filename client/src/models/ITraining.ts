export interface ITraining {
	_id: string,
	title: string,
	type: string,
	path: string | File,
	video: string | File,
	description: string,
	amountExercise: string,
	reviews: number,
	from: string,
	traningMode: string,
}
export interface IComment {
	userName: string,
	date: string,
	comment: string,
	path: string,
	_id?: string
}