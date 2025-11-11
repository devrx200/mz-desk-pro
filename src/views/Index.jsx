import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const Index = () => {
  const stats = [
    { title: 'Today\'s Revenue', value: '₹2,450', change: '+15%', icon: '💰', color: 'primary' },
    { title: 'Customers Served', value: '48', change: '+8%', icon: '👥', color: 'success' },
    { title: 'Services Completed', value: '127', change: '+23%', icon: '✅', color: 'warning' },
    { title: 'Active Sessions', value: '12', change: '+5%', icon: '🌐', color: 'info' },
  ];

  const quickActions = [
    { title: 'New Customer', icon: '👤', link: '/admin/customers', color: 'primary' },
    { title: 'Create Bill', icon: '📄', link: '/admin/invoices', color: 'success' },
    { title: 'Aadhaar Service', icon: '🆔', link: '/admin/services', color: 'warning' },
    { title: 'Print Job', icon: '🖨️', link: '/admin/services', color: 'info' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>💰 Business Dashboard</h1>
        <p>Welcome back! Here's your business performance today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change">{stat.change} from yesterday</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <div className="card-header">
          <h3>⚡ Quick Actions</h3>
        </div>
        <div className="card-body">
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} className={`quick-action-btn action-${action.color}`}>
                <div className="action-icon">{action.icon}</div>
                <div className="action-title">{action.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>📋 Recent Activity</h3>
          </div>
          <div className="card-body">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🆔</div>
                <div className="activity-content">
                  <div className="activity-title">Aadhaar enrollment - Rajesh Kumar</div>
                  <div className="activity-time">5 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🖨️</div>
                <div className="activity-content">
                  <div className="activity-title">Color printing - 15 pages</div>
                  <div className="activity-time">12 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💳</div>
                <div className="activity-content">
                  <div className="activity-title">PAN card application - Priya Sharma</div>
                  <div className="activity-time">25 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🌐</div>
                <div className="activity-content">
                  <div className="activity-title">Internet session started - PC #5</div>
                  <div className="activity-time">30 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📄</div>
                <div className="activity-content">
                  <div className="activity-title">Photocopy - 25 pages</div>
                  <div className="activity-time">45 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>🖥️ Computer Status</h3>
          </div>
          <div className="card-body">
            <div className="computer-grid">
              <div className="computer-item active">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 1</div>
                <div className="computer-status">In Use</div>
              </div>
              <div className="computer-item active">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 2</div>
                <div className="computer-status">In Use</div>
              </div>
              <div className="computer-item">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 3</div>
                <div className="computer-status">Available</div>
              </div>
              <div className="computer-item active">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 4</div>
                <div className="computer-status">In Use</div>
              </div>
              <div className="computer-item">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 5</div>
                <div className="computer-status">Available</div>
              </div>
              <div className="computer-item">
                <div className="computer-icon">💻</div>
                <div className="computer-label">PC 6</div>
                <div className="computer-status">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card full-width">
        <div className="card-header">
          <h3>💵 Today's Transactions</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>John Doe</td>
                  <td>$250.00</td>
                  <td><span className="badge badge-success">Completed</span></td>
                  <td>2024-11-06</td>
                </tr>
                <tr>
                  <td>#1235</td>
                  <td>Jane Smith</td>
                  <td>$180.50</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>2024-11-06</td>
                </tr>
                <tr>
                  <td>#1236</td>
                  <td>Bob Johnson</td>
                  <td>$420.00</td>
                  <td><span className="badge badge-success">Completed</span></td>
                  <td>2024-11-05</td>
                </tr>
                <tr>
                  <td>#1237</td>
                  <td>Alice Williams</td>
                  <td>$95.75</td>
                  <td><span className="badge badge-danger">Failed</span></td>
                  <td>2024-11-05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

