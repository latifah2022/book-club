const router = require('express').Router();
const userRoutes = require('./userRoute');
const reviewRoutes = require('./reviewRoute');
const bookRoutes = require('./bookRoute');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);

module.exports = router;
