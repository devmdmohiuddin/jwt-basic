const router = require("express").Router();
const { register } = require('../controllers/userControllers')

router.route('/register').post(register)

module.exports = router;
