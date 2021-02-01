const postsResolvers = require("./posts");

const usersResolvers = require("./users");

const kidsResolvers = require("./kids");

const commentsResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...usersResolvers.Query,
    ...postsResolvers.Query,
    ...kidsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...kidsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
