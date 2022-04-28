
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const usersController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');
const questionController = require('../controllers/question.controller');

router.get('/', indexController.index);
router.get('/register', usersController.formRegister);
router.post('/register', usersController.register);
router.get('/login', usersController.formLogin);
router.post('/login', authController.authUser);
router.get('/first-question', questionController.firstsQuestions);
router.get('/first-question/:username', usersController.pointsEarned1);
router.get('/second-question', questionController.secondsQuestions);
router.get('/second-question/:username', usersController.pointsEarned2);
router.get('/third-question', questionController.thirdsQuestions);
router.get('/third-question/:username', usersController.pointsEarned3);
router.get('/fourth-question', questionController.fourthsQuestions);
router.get('/fourth-question/:username', usersController.pointsEarned4);
router.get('/fifth-question', questionController.fifthsQuestions);
router.get('/fifth-question/:username', usersController.pointsEarned5);
router.get('/youlose', questionController.youLose);
router.get('/withdraw', questionController.withdraw);
router.get('/youwin', questionController.youWin);

module.exports = router;