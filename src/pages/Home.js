import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../../src/utils/queries';
import OrderList from '../components/OrderList';

const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_ORDERS);
    const orders = data?.orders || [];
        console.log(orders);
  
    return (
      <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
        <div>Loading...</div>
      ) : (
        <OrderList orders={orders} title="Check out the chow line!" />
      )}
    </div>
  </div>
</main>
    );
  };

  export default Home;