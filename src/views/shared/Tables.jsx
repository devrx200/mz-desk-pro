import React from 'react';
import './Tables.css';

const Tables = () => {
  const reportData = [
    { month: 'January', revenue: 45000, customers: 320, services: 1250 },
    { month: 'February', revenue: 52000, customers: 380, services: 1420 },
    { month: 'March', revenue: 48000, customers: 350, services: 1350 },
    { month: 'April', revenue: 61000, customers: 420, services: 1680 },
    { month: 'May', revenue: 58000, customers: 400, services: 1580 },
    { month: 'June', revenue: 65000, customers: 450, services: 1750 },
  ];

  return (
    <div className="tables-container">
      <div className="page-header">
        <div>
          <h1>📊 Reports & Analytics</h1>
          <p>View detailed business reports and analytics</p>
        </div>
        <button className="btn-primary">📥 Export Report</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-value">₹3,29,000</div>
          <div className="stat-label">Total Revenue (6 months)</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-value">2,320</div>
          <div className="stat-label">Total Customers</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🛠️</div>
          <div className="stat-value">9,030</div>
          <div className="stat-label">Services Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-value">+24%</div>
          <div className="stat-label">Growth Rate</div>
        </div>
      </div>

      <div className="table-container">
        <h2>Monthly Performance</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Customers</th>
              <th>Services</th>
              <th>Avg. per Customer</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr key={index}>
                <td><strong>{row.month}</strong></td>
                <td>₹{row.revenue.toLocaleString('en-IN')}</td>
                <td>{row.customers}</td>
                <td>{row.services}</td>
                <td>₹{Math.round(row.revenue / row.customers)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;

