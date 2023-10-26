const Router = require('express');
const router = new Router();
const userController = require('../controllers/user-controller')
const trainingController = require('../controllers/training-controller')
const nutritionController = require('../controllers/nutrition-controller')
const fileMiddleware = require('../middleware/file');
const searchController = require('../controllers/search-controller');


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/user-check', userController.checkUserExist)
router.post('/username-check', userController.checkUserNameExist)
router.post('/activate', userController.activate)
router.get('/users', userController.getUsers)
router.get('/user', userController.getUser)
router.put('/user-change', fileMiddleware.single('avatar'), userController.userChangeData)
router.get('/trainings-popular', trainingController.getPopularTrainings)
router.get('/trainings', trainingController.getTrainings)
router.get('/trainings/:id', trainingController.getTraining)
router.put('/training-viewed', trainingController.trainingViewed)
router.get('/my-trainings', trainingController.getMyTrainings)
router.get('/search-trainings', trainingController.getSearchTrainings)
router.get('/nutrition/:id', nutritionController.getNutrition)
router.put('/create-comment', trainingController.createComment)
router.post('/create-training', fileMiddleware.any(), trainingController.createTraining)
router.delete('/delete-training', trainingController.deleteMyTraining)
router.get('/titles', searchController.getTitles)

router.get('/comments', trainingController.getComments)


module.exports = router