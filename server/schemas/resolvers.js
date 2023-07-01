// import error handling from apollo-server-express
const { AuthenticationError } = require('apollo-server-express');
// import book and user models
const { Book, User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('books');
        }
        throw new AuthenticationError('You need to be logged in!');
        },
    }
}