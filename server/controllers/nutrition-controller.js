const meals = require("../data/Nutritions");

class NutritionController {
	async getNutrition(req, res) {
		try {
			const id = req.params.id
			const result = meals.filter(item => item.type === id)
			res.json(result)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}
}

module.exports = new NutritionController();