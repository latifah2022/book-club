const seedUser = require("./user");
const seedBook = require("./book");
const seedReview = require("./review");
const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("=============");
    await seedUser();
    console.log("User is seeded");
    await seedBook();
    console.log("Book is seeded");
    await seedReview();
    console.log("Review is seeded");
    process.exit(0);
};
seedAll();