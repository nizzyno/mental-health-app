const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models/User');

db.once('open', async () => {

    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    console.log('Complete!');
    process.exit(0);
});

