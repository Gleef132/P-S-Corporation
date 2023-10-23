// const jwt = require('jsonwebtoken')
// const tokenModel = require('../models/Token')

// class TokenService {
// 	generateTokens(payload) {
// 		const accessToken = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '30m' })
// 		const refresToken = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '30d' })
// 		return {
// 			accessToken,
// 			refresToken
// 		}
// 	}

// 	async saveToken(userId, refresToken) {
// 		const tokenData = await tokenModel.findOne({ user: userId })
// 	}
// }
