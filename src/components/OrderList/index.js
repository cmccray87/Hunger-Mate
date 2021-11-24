import React from 'react';

const OrderList = ({ orders, title }) => {
  if (!orders.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {orders &&
        orders.map(order => (
          <div key={order._id} className="card mb-3">
            <p className="card-header">
              {order.username}
              order on {order.createdAt}
            </p>
            <div className="card-body">
              <p>{order.orderText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;