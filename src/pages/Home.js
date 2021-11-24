import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../utils/queries';

const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_ORDERS);
    const orders = data?.orders || [];
        console.log(orders);
  
    return (
      <main>
        <div className='flex-row justify-space-between'>
          <div className='col-12 mb-3'>{/* PRINT ORDER LIST */}</div>
        </div>
      </main>
    );
  };