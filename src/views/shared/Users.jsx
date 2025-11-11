import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Users.css';

const Users = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  // Demo users data
  const users = [
    { id: 1, name: 'Rishi Lomash', email: 'admin@billmaster.com', role: 'admin', phone: '+91 98765 43210', status: 'active', shopName: 'System Admin' },
    { id: 2, name: 'Rajesh Kumar', email: 'owner@cybercafe.com', role: 'owner', phone: '+91 98765 43211', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 3, name: 'Amit Patel', email: 'operator@cybercafe.com', role: 'operator', phone: '+91 98765 43212', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 4, name: 'Priya Sharma', email: 'priya@cybercafe.com', role: 'operator', phone: '+91 98765 43213', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 5, name: 'Suresh Reddy', email: 'suresh@cybercafe.com', role: 'owner', phone: '+91 98765 43214', status: 'inactive', shopName: 'Cyber Hub Delhi' },
  ];

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role) => {
    switch(role) {
      case 'admin': return '👑';
      case 'owner': return '🏢';
      case 'operator': return '👤';
      default: return '👤';
    }
  };

  const getRoleBadgeClass = (role) => {
    switch(role) {
      case 'admin': return 'badge-admin';
      case 'owner': return 'badge-owner';
      case 'operator': return 'badge-operator';
      default: return 'badge-default';
    }
  };

  return (
    <div className="users-container">
      <div className="page-header">
        <div>
          <h1>👥 User Management</h1>
          <p>Manage system users and their roles</p>
        </div>
        <button className="btn-primary">
          ➕ Add New User
        </button>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Filter by Role:</label>
          <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
            <option value="operator">Operator</option>
          </select>
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Shop/Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => (
              <tr key={u.id}>
                <td>
                  <div className="user-info">
                    <span className="user-icon">{getRoleIcon(u.role)}</span>
                    <span className="user-name">{u.name}</span>
                  </div>
                </td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <span className={`role-badge ${getRoleBadgeClass(u.role)}`}>
                    {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                  </span>
                </td>
                <td>{u.shopName}</td>
                <td>
                  <span className={`status-badge ${u.status === 'active' ? 'status-active' : 'status-inactive'}`}>
                    {u.status === 'active' ? '✓ Active' : '✗ Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="no-data">
          <p>No users found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Users;

