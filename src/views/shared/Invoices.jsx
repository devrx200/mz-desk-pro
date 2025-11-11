import React, { useState } from 'react';
import './Invoices.css';

const Invoices = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const invoices = [
    { id: 'INV-001', customer: 'Rahul Verma', date: '2024-11-07', amount: 250, status: 'paid', services: 'Aadhaar, Print x5' },
    { id: 'INV-002', customer: 'Priya Singh', date: '2024-11-07', amount: 150, status: 'pending', services: 'PAN Card' },
    { id: 'INV-003', customer: 'Amit Kumar', date: '2024-11-06', amount: 320, status: 'paid', services: 'Internet 2hrs, Print x10' },
    { id: 'INV-004', customer: 'Sneha Patel', date: '2024-11-06', amount: 180, status: 'overdue', services: 'Passport Form' },
    { id: 'INV-005', customer: 'Raj Malhotra', date: '2024-11-05', amount: 95, status: 'paid', services: 'Photocopy x20' },
  ];

  const filteredInvoices = invoices.filter(inv =>
    filterStatus === 'all' || inv.status === filterStatus
  );

  const getStatusBadge = (status) => {
    const badges = {
      paid: { class: 'status-paid', text: '✓ Paid' },
      pending: { class: 'status-pending', text: '⏳ Pending' },
      overdue: { class: 'status-overdue', text: '⚠️ Overdue' }
    };
    return badges[status] || badges.pending;
  };

  const totalAmount = filteredInvoices.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="invoices-container">
      <div className="page-header">
        <div>
          <h1>📄 Invoices</h1>
          <p>Manage billing and invoices</p>
        </div>
        <button className="btn-primary">➕ Create Invoice</button>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">₹{totalAmount}</div>
          <div className="stat-label">Total Amount</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{filteredInvoices.length}</div>
          <div className="stat-label">Total Invoices</div>
        </div>
      </div>

      <div className="filter-section">
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Services</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map(inv => {
              const badge = getStatusBadge(inv.status);
              return (
                <tr key={inv.id}>
                  <td><strong>{inv.id}</strong></td>
                  <td>{inv.customer}</td>
                  <td>{new Date(inv.date).toLocaleDateString('en-IN')}</td>
                  <td>{inv.services}</td>
                  <td><strong>₹{inv.amount}</strong></td>
                  <td><span className={`status-badge ${badge.class}`}>{badge.text}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">👁️</button>
                      <button className="btn-icon" title="Print">🖨️</button>
                      <button className="btn-icon" title="Download">📥</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;

