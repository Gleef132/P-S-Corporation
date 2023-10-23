const Training = require("../models/Training")

class SearchController {
	async getTitles(req, res) {
		try {
			const trainings = await Training.find()
			const titles = trainings.map(t => t.title.toLowerCase())
			res.json(titles)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}
}

module.exports = new SearchController();