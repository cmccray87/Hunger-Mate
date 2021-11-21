// import the gql tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql`
type Order {
    _id: ID
    orderText: String
    createdAt: String
    username: String
  }

type Query {
    orders: [Order]
  }
`;

// export the typeDefs
module.exports = typeDefs;