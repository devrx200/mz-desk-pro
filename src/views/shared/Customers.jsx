import React, { useState } from 'react';
import './Customers.css';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    { id: 1, name: 'Rahul Verma', email: 'rahul@email.com', phone: '+91 98765 11111', aadhaar: '1234 5678 9012', visits: 45, lastVisit: '2024-11-06' },
    { id: 2, name: 'Priya Singh', email: 'priya@email.com', phone: '+91 98765 22222', aadhaar: '2345 6789 0123', visits: 32, lastVisit: '2024-11-05' },
    { id: 3, name: 'Amit Kumar', email: 'amit@email.com', phone: '+91 98765 33333', aadhaar: '3456 7890 1234', visits: 28, lastVisit: '2024-11-04' },
    { id: 4, name: 'Sneha Patel', email: 'sneha@email.com', phone: '+91 98765 44444', aadhaar: '4567 8901 2345', visits: 56, lastVisit: '2024-11-07' },
  ];

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="customers-container">
      <div className="page-header">
        <div>
          <h1>👥 Customers</h1>
          <p>Manage your customer database</p>
        </div>
        <button className="btn-primary">➕ Add Customer</button>
      </div>

      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Aadhaar</th>
              <th>Total Visits</th>
              <th>Last Visit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(c => (
              <tr key={c.id}>
                <td><strong>{c.name}</strong></td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.aadhaar}</td>
                <td><span className="badge-info">{c.visits} visits</span></td>
                <td>{new Date(c.lastVisit).toLocaleDateString('en-IN')}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon" title="View">👁️</button>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

