import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Owners', value: '45', change: '+12%', icon: '🏢', color: 'primary' },
    { title: 'Total Operators', value: '156', change: '+8%', icon: '👤', color: 'success' },
    { title: 'Total Revenue', value: '₹1,25,450', change: '+23%', icon: '💰', color: 'warning' },
    { title: 'Active Shops', value: '42', change: '+5%', icon: '🏪', color: 'info' },
  ];

  const quickActions = [
    { title: 'Add Owner', icon: '🏢', link: '/admin/users', color: 'primary' },
    { title: 'System Settings', icon: '⚙️', link: '/admin/settings', color: 'success' },
    { title: 'View Reports', icon: '📊', link: '/admin/reports', color: 'warning' },
    { title: 'Manage Users', icon: '👥', link: '/admin/users', color: 'info' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>
          <i className="bi bi-shield-fill-check"></i>
          Admin Dashboard
        </h1>
        <p>System-wide overview and management - Control your entire business ecosystem</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change">{stat.change} from last month</div>
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
                <div className="activity-icon">🏢</div>
                <div className="activity-content">
                  <div className="activity-title">New owner registered - Rajesh Kumar</div>
                  <div className="activity-time">5 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">👤</div>
                <div className="activity-content">
                  <div className="activity-title">Operator added - Amit Patel</div>
                  <div className="activity-time">12 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-content">
                  <div className="activity-title">Payment received - ₹5,000</div>
                  <div className="activity-time">25 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">⚙️</div>
                <div className="activity-content">
                  <div className="activity-title">System settings updated</div>
                  <div className="activity-time">1 hour ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>🏢 Top Performing Shops</h3>
          </div>
          <div className="card-body">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🥇</div>
                <div className="activity-content">
                  <div className="activity-title">Cyber Point Mumbai</div>
                  <div className="activity-time">₹45,000 this month</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🥈</div>
                <div className="activity-content">
                  <div className="activity-title">Digital Hub Delhi</div>
                  <div className="activity-time">₹38,500 this month</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🥉</div>
                <div className="activity-content">
                  <div className="activity-title">Tech Cafe Bangalore</div>
                  <div className="activity-time">₹32,000 this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

