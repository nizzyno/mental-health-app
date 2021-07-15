const { User } = require('../models/User');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        }
    },

    Mutation: {
        addUser: async () => {

        },
        login: async () => {

        }
    }
};

module.exports = resolvers;