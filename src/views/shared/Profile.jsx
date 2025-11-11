import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 98765 43210',
    shopName: user?.shopName || 'Cyber Point Mumbai',
    address: '123 Main Street, Mumbai, Maharashtra',
    gst: 'GST123456789',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <div className="page-header">
        <div>
          <h1>⚙️ Profile Settings</h1>
          <p>Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user?.role === 'admin' && '👑'}
              {user?.role === 'owner' && '🏢'}
              {user?.role === 'operator' && '👤'}
            </div>
            <h3>{user?.name}</h3>
            <p className="role-badge">{user?.role?.toUpperCase()}</p>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">45</div>
              <div className="stat-label">Days Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">₹1,25,450</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>
        </div>

        <div className="profile-main">
          <form onSubmit={handleSubmit} className="profile-form">
            <h2>Personal Information</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Shop Name</label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>GST Number</label>
              <input
                type="text"
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                💾 Save Changes
              </button>
              <button type="button" className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

