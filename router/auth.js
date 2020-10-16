const router = require('express').Router();
const auth = require('../controller/auth');

router.get('/register', auth.register);
router.get('/login', auth.login);

module.exports = router;