const User = require('./User');
const Review = require('./Review');
const Book = require("./Book")

User.hasMany(Book, {
    foreignKey: 'user_id',
   // onDelete: 'CASCADE'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(Book, {
    foreignKey: 'book_id',
});

Book.hasMany(Review, {
    foreignKey: 'book_id',
});

Book.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Review, Book };



// Book belongs to User
// User has many Books
// Review belongs to Book
// Book can have many Reviews
// Review belongs to User
// User can have many Reviews

 // through: "books_has_reviews",
// as: "reviews_now"
//