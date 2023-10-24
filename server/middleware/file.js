const fs = require('fs')
const multer = require('multer')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		if (!fs.existsSync('static')) {
			fs.mkdirSync('static')
		}
		cb(null, 'static/')
	},
	filename(req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
	}
})


module.exports = multer({ storage })