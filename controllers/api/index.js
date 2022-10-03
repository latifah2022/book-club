// adding file so that it will come through github
const router = require('express').Router();
const userRoutes = require('./userRoute');
const reviewRoutes = require('./reviewRoute');

router.use('/user', userRoute);
router.use('/review', reviewRoute);

module.exports = router;
