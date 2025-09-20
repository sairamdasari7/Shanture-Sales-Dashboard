import React from 'react';

function SalesTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((sale, idx) => (
          <tr key={idx}>
            <td>{sale.product}</td>
            <td>{sale.category}</td>
            <td>${sale.amount}</td>
            <td>{new Date(sale.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SalesTable;