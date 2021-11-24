import { gql } from '@apollo/client';

export const QUERY_ORDERS = gql`
  query orders($username: String) {
    orders(username: $username) {
      _id
      orderText
      createdAt
      username
    }
  }
`;