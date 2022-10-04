const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/newbook', async (req, res) => {
  console.log(req.body);
  try {
    const bookData = await Book.create({...req.body, user_id: req.session.user_id});

      res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        console.log('delete book')
      const bookData = await Book.destroy({
        where: {
            id: req.params.id
        }
      });
  
      if (!bookData) {
        res.status(404).json({ message: 'No book found with this id!' });
        return;
      }
  
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;