const { Review } = require('../models');
const { faker } = require('@faker-js/faker');

const _REVIEW = [];
for (let i = 0; i < 5; i++) {
  _REVIEW.push({
    userReview: faker.lorem.paragraph(3),
    date: faker.date.between()
  });
}
// const seedReview = () => Review.bulkCreate(_REVIEW);
module.exports = _REVIEW;