const meals = require("../data/Nutritions");

class NutritionController {
	async getNutrition(req, res) {
		try {
			// const result = { male: [], female: [] }
			const id = req.params.id
			const result = meals.filter(item => item.type === id)
			// meals.forEach(item => item.type === 'male' ? result.male.push(item) : result.female.push(item))
			res.json(result)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}
}

module.exports = new NutritionController();