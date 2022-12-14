import express from 'express';
const { getUser, setUser, updateUser, deleteUser } = require('../controllers/UserController')

const router = express.Router();

router.get('/user/login', getUser)

router.post('/user/login', setUser)

router.put('/user/login', updateUser)

router.delete('/user/login', deleteUser)

module.exports = router;