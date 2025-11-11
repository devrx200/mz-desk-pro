import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const OwnerDashboard = () => {
  const stats = [
    { title: 'Today\'s Revenue', value: '₹3,450', change: '+18%', icon: '💰', color: 'primary' },
    { title: 'Customers Served', value: '62', change: '+12%', icon: '👥', color: 'success' },
    { title: 'Services Completed', value: '145', change: '+25%', icon: '✅', color: 'warning' },
    { title: 'Active Operators', value: '5', change: '0%', icon: '👤', color: 'info' },
  ];

  const quickActions = [
    { title: 'New Customer', icon: '👤', link: '/owner/customers', color: 'primary' },
    { title: 'Create Bill', icon: '📄', link: '/owner/invoices', color: 'success' },
    { title: 'Add Operator', icon: '👥', link: '/owner/operators', color: 'warning' },
    { title: 'View Reports', icon: '📊', link: '/owner/reports', color: 'info' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>
          <i className="bi bi-building-fill"></i>
          Owner Dashboard
        </h1>
        <p>Welcome back! Here's your cyber cafe performance today - Track your business growth</p>
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
            <h3>📋 Today's Activity</h3>
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
                  <div className="activity-title">Internet session - PC #5</div>
                  <div className="activity-time">30 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>👥 Operator Performance</h3>
          </div>
          <div className="card-body">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🥇</div>
                <div className="activity-content">
                  <div className="activity-title">Amit Patel</div>
                  <div className="activity-time">45 customers served</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🥈</div>
                <div className="activity-content">
                  <div className="activity-title">Sneha Reddy</div>
                  <div className="activity-time">38 customers served</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🥉</div>
                <div className="activity-content">
                  <div className="activity-title">Rahul Singh</div>
                  <div className="activity-time">32 customers served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;

