const { Book } = require('../models');

const bookData = require('./seeds/bookData.json');

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;