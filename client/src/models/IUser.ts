export interface IUser {
	login: string;
	password: string;
	email: string;
	userName: string;
	path: string;
}

export interface IUserActivate {
	email: string;
	code: number;
}