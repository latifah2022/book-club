const router = require('express').Router();
const userRoutes = require('./userRoute');
const reviewRoutes = require('./reviewRoute');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
