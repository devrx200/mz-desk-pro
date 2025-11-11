import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    
    const permissions = {
      admin: [
        'manage_owners',
        'manage_operators',
        'manage_customers',
        'manage_services',
        'manage_billing',
        'view_reports',
        'manage_settings',
        'system_settings',
        'view_all_data'
      ],
      owner: [
        'manage_operators',
        'manage_customers',
        'manage_services',
        'manage_billing',
        'view_reports',
        'manage_settings'
      ],
      operator: [
        'manage_customers',
        'create_bills',
        'view_services',
        'basic_operations'
      ]
    };

    return permissions[user.role]?.includes(permission) || false;
  };

  const value = {
    user,
    login,
    logout,
    hasPermission,
    loading,
    isAdmin: user?.role === 'admin',
    isOwner: user?.role === 'owner',
    isOperator: user?.role === 'operator'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

