const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	login: { type: String, unique: true, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isActivated: { type: Boolean, default: true },
	userName: { type: String, required: true, unique: true },
	roles: [{ type: String, ref: 'Role', required: true }],
	path: { type: String, required: true, default: process.env.SERVER_URL + '/' + 'static/avatar.jpg' }
})

module.exports = model('User', UserSchema)