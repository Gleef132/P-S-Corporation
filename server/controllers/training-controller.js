// const trainings = require("../data/Trainings");
const Training = require("../models/Training")
const getDateNow = require("../helper/Date")
const User = require("../models/User")
const jwt = require('jsonwebtoken')


const quickSort = (array) => {
	if (array.length <= 1) {
		return array
	}
	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex].reviews
	let less = []
	let greater = []
	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex)
			continue
		if (array[i].reviews < pivot) {
			less.push(array[i])
		} else {
			greater.push(array[i])
		}
	}
	return [...quickSort(greater), array[pivotIndex], ...quickSort(less)]
}

class TrainingController {
	async getPopularTrainings(req, res) {
		try {
			const trainings = await Training.find()
			const trainingsSorted = quickSort(trainings)
			const result = { cardio: [], endurance: [], power: [], yoga: [] }
			let count = 0;
			trainingsSorted.forEach((item, index) => {
				if (count < 24) {
					count++;
					switch (item.type) {
						case 'cardio':
							result.cardio = [...result.cardio, item]
							break;
						case 'endurance':
							result.endurance = [...result.endurance, item]
							break;
						case 'power':
							result.power = [...result.power, item]
							break;
						case 'yoga':
							result.yoga = [...result.yoga, item]
							break;
						default:
							break;
					}
				}
			})
			res.json(result)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async getTraining(req, res) {
		try {
			const id = req.params.id
			const training = await Training.findById({ _id: id }, { 'comments': 0 })
			res.json(training)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Get error' })
		}
	}

	async getTrainings(req, res) {
		try {
			const sortBy = req.headers.sort_by || 'All'
			const sortOption = req.headers.sort_option || ''
			let { page, limit } = req.query
			page = page || 1
			limit = limit || 12
			let offset = page * limit - limit
			let trainings = await Training.find().skip(offset).limit(limit)
			let allTrainings = await Training.count()

			if (sortBy !== 'All' && sortBy !== 'Popularity') {
				trainings = await Training.find()
					.where(sortOption)
					.in(sortBy)
					.skip(offset)
					.limit(limit)
				allTrainings = await Training.find()
					.where(sortOption)
					.in(sortBy)
					.count()
			}

			if (sortBy === 'Popularity') {
				trainings = await Training.find()
					.sort({ reviews: -1 })
					.skip(offset)
					.limit(limit)
				allTrainings = await Training.find()
					.count()
			}
			// trainings.map(item => {
			// 	const training = new Training({ amountExercise: item.amountExercise, commends: item.commends, description: item.description, from: item.from, level: 'item.level', location: 'item.location', path: item.img, reviews: item.reviews, title: item.title, trainingMode: item.traningMode, type: item.type, video: 'item.video' })
			// 	training.save()
			// })
			let countPages = Math.ceil(allTrainings / limit)
			res.json({ data: trainings, countPages: countPages })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async getMyTrainings(req, res) {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const decodeIdData = jwt.verify(token, process.env.SECRET_JWT)
			const id = decodeIdData.id
			const user = await User.findById(id)

			const sortBy = req.headers.sort_by
			let { page, limit } = req.query
			page = page || 1
			limit = limit || 12
			let offset = page * limit - limit
			let trainings = await Training.find({ from: user.userName }, null, { sort: { '_id': -1 } }).skip(offset).limit(limit)
			let allTrainings = await Training.find({ from: user.userName }).count()

			if (sortBy === 'Popularity') {
				trainings = await Training.find({ from: user.userName })
					.sort({ reviews: -1 })
					.skip(offset)
					.limit(limit)
				allTrainings = await Training.find({ from: user.userName })
					.count()
			}

			const countPages = Math.floor(allTrainings / limit)
			res.json({ data: trainings, countPages: countPages })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async deleteMyTraining(req, res) {
		try {
			const _id = req.headers.id
			await Training.findByIdAndDelete(_id)
			res.json({ message: 'Training success deleted' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async getSearchTrainings(req, res) {
		try {
			const searchData = req.headers.search
			let { page, limit } = req.query
			page = page || 1
			limit = limit || 12
			let offset = page * limit - limit
			const trainings = await Training.find({
				"$or": [
					{ title: { $regex: searchData || '', $options: 'i' } },
					{ from: { $regex: searchData || '', $options: 'i' } },
				]
			}).skip(offset).limit(limit)
			const allTrainings = await Training.find({
				"$or": [
					{ title: { $regex: searchData || '', $options: 'i' } },
					{ from: { $regex: searchData || '', $options: 'i' } },
				]
			}).count()
			const countPages = Math.floor(allTrainings / limit)
			res.json({ data: trainings, countPages: countPages })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async createTraining(req, res) {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const decodeIdData = jwt.verify(token, process.env.SECRET_JWT)
			const id = decodeIdData.id
			const user = await User.findById(id)

			const { title, description, amountExercise, gender, trainingMode, level } = req.body
			const posterPath = req.files[0].fieldname === 'path' ? req.files[0].path : req.files[1].path
			const videoPath = req.files[1].fieldname === 'video' ? req.files[1].path : req.files[0].path
			const date = getDateNow()
			const from = user.userName



			const training = new Training({
				title: title, amountExercise: amountExercise, level: level, path: process.env.SERVER_URL + '/' + posterPath, video: process.env.SERVER_URL + '/' + videoPath, trainingMode: trainingMode,
				date: date, from: from, description: description, comments: [],
				reviews: 0, type: '', gender: gender
			})

			training.save()

			res.json({ message: 'Success' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async createComment(req, res) {
		try {
			const { userName, comment, path, id } = req.body
			const _id = id
			const training = await Training.findById(_id)
			const date = getDateNow()


			await Training.findByIdAndUpdate(_id, {
				$set: {
					comments: [...training.comments, { userName: userName, comment: comment, date: date, path: path }]
				}
			}, {
				new: true,
				useFindAndModify: false
			})
			res.json({ message: 'Comment created successfully' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Error' })
		}
	}

	async getComments(req, res) {
		try {
			const { id } = req.headers
			const { page, limit } = req.query
			let offset = page * limit - limit
			const _id = id

			const trainingFull = await Training.findById({ _id: _id })
			const countCommentsPages = Math.ceil(trainingFull.comments.length / limit)
			const training = await Training.findById({ _id: _id }, { comments: { $slice: [offset, Number(limit)] } },)

			// res.json(training.comments)
			res.json({ data: training.comments, countComments: trainingFull.comments.length, countCommentsPages: countCommentsPages })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: "Error" })
		}
	}

	async trainingViewed(req, res) {
		const id = req.headers.id
		const training = await Training.findById(id)

		// await Training.findByIdAndUpdate(id,reviews: training.reviews + 1)
		await Training.findByIdAndUpdate(id, {
			$set: { reviews: training.reviews + 1 }
		}, {
			new: true,
			useFindAndModify: false
		})
		res.json({ message: 'reviews updated' })
	}
}

module.exports = new TrainingController();