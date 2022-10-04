const router = require('express').Router();
const { Book } = require('../../models');

router.post('/newbook', async (req, res) => {
  console.log(req.body);
  try {
    const bookData = await Book.create({...req.body, user_id: req.session.user_id});

      res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;