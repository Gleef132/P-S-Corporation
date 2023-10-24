const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mailService = require('../service/mail')
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

const generateAccessToken = (id, roles) => {
	const payload = {
		id,
		roles
	}
	return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '24h' })
}


class UserController {
	async registration(req, res) {
		try {
			const { login, password, userName, email } = req.body
			const candidate = await User.findOne({ login })
			if (candidate) {
				return res.status(400).json({ message: 'This login already exists' })
			}
			const hashPassword = bcrypt.hashSync(password, 7)
			const userRole = await Role.findOne({ value: "user" })
			const user = new User({ login, password: hashPassword, roles: [userRole.value], userName: userName, email: email })
			await user.save()
			const token = generateAccessToken(user._id, user.roles)
			return res.json({ message: "User success registered", token: token, login: login })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Registration error' })
		}
	}
	async login(req, res) {
		try {
			const { login, password } = req.body
			const user = await User.findOne({ login })
			if (!user) {
				return res.status(400).json({ message: `User ${login} not found` })
			}
			const validPassword = bcrypt.compareSync(password, user.password)
			if (!validPassword) {
				return res.status(400).json({ message: 'Wrong password entered' })
			}
			const token = generateAccessToken(user._id, user.roles)
			return res.json({ token })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Login error' })
		}
	}
	async activate(req, res) {
		try {
			const { email, code } = req.body
			await mailService.sendActivationMail(email, code)
			return res.json({ message: 'Code success sended' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Code send error' })
		}
	}
	async getUsers(req, res) {
		try {
			const users = await User.find()
			res.json(users)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Get error' })
		}
	}

	async getUser(req, res) {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const decodeIdData = jwt.verify(token, process.env.SECRET_JWT)
			const id = decodeIdData.id
			const user = await User.findById(id)
			const hashPassword = bcrypt.hash(user.password, 7)
			user.password = hashPassword
			res.json(user)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Get error' })
		}
	}

	async userChangeData(req, res) {
		try {
			const { login, password, email, userName } = req.body
			const hashPassword = bcrypt.hashSync(password, 7)
			const token = req.headers.authorization.split(' ')[1]
			const decodeIdData = jwt.verify(token, process.env.SECRET_JWT)
			const id = decodeIdData.id
			const user = await User.findById(id)
			if (user.path !== process.env.SERVER_URL + '/' + 'static/avatar.jpg' && req.file.path) {
				const unlinkPath = user.path.replace(process.env.SERVER_URL, '')
				unlinkAsync('' + unlinkPath)
			}
			await User.findByIdAndUpdate(id, {
				$set: {
					login: login ? login : user.login,
					password: password ? hashPassword : user.password,
					userName: userName ? userName : user.userName,
					email: email ? email : user.email,
					path: req.file ? process.env.SERVER_URL + '/' + req.file.path : user.path,
				}
			}, {
				new: true,
				useFindAndModify: false
			})
			res.json({ message: 'Success change data' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Get error' })
		}
	}
}

module.exports = new UserController();