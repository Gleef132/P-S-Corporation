require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/index')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT
const URI = process.env.DATABASE_URI
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use(fileUpload({}))
app.use('/static', express.static(path.join(__dirname, 'static')))
const start = async () => {
	try {
		await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()