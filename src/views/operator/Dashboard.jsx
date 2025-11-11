import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const OperatorDashboard = () => {
  const stats = [
    { title: 'My Sales Today', value: '₹2,450', change: '+15%', icon: '💰', color: 'primary' },
    { title: 'Customers Served', value: '28', change: '+8%', icon: '👥', color: 'success' },
    { title: 'Services Done', value: '67', change: '+20%', icon: '✅', color: 'warning' },
    { title: 'Pending Bills', value: '3', change: '-2', icon: '📄', color: 'info' },
  ];

  const quickActions = [
    { title: 'New Customer', icon: '👤', link: '/operator/customers', color: 'primary' },
    { title: 'Create Bill', icon: '📄', link: '/operator/invoices', color: 'success' },
    { title: 'Aadhaar Service', icon: '🆔', link: '/operator/services', color: 'warning' },
    { title: 'Print Job', icon: '🖨️', link: '/operator/services', color: 'info' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>👤 Operator Dashboard</h1>
        <p>Welcome! Here's your performance today.</p>
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
            <h3>📋 My Recent Activity</h3>
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
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>🎯 Today's Tasks</h3>
          </div>
          <div className="card-body">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">⏰</div>
                <div className="activity-content">
                  <div className="activity-title">Complete pending bills</div>
                  <div className="activity-time">3 bills pending</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📞</div>
                <div className="activity-content">
                  <div className="activity-title">Follow up with customers</div>
                  <div className="activity-time">5 customers to call</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🖨️</div>
                <div className="activity-content">
                  <div className="activity-title">Check printer supplies</div>
                  <div className="activity-time">Low on color ink</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;

