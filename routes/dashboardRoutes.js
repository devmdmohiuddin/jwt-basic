const router = require("express").Router();
const { dashboard } = require('../controllers/dashboardController')
const { protected } = require('../middleware/authMiddleware')

router.route('/').get(protected, dashboard)

module.exports = router;
