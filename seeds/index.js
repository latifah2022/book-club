const sequelize = require("../config/connection");
const seedUser = require("./user");
const bookData = require("./bookData.json");
const {Book, Review} = require("../models")
const reviewData = require("./review");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("=============");
    const users = await seedUser();
    console.log("User is seeded");
    const books = []
    for (const book of bookData) {
        const tempBook = await Book.create({
          ...book,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
        books.push (tempBook)
      }
    for (const review of reviewData) {
        await Review.create({
          ...review,
          user_id: users[Math.floor(Math.random() * users.length)].id,
          book_id: books[Math.floor(Math.random() * books.length)].id,
        });
      }
    console.log("Review is seeded");
    process.exit(0);
};
seedAll();