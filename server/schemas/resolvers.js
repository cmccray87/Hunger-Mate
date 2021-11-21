const { User, Order } = require("../models");

const resolvers = {
    Query: {
      orders: async () => {
        return Order.find().sort({ createdAt: -1 });
      }
    }
  };
  module.exports = resolvers;