import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ routes, collapsed, toggleCollapse, userRole }) => {
  const location = useLocation();
  const { user } = useAuth();

  const activeRoute = (routePath) => {
    return location.pathname.includes(routePath) ? 'active' : '';
  };

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      const fullPath = `/${userRole}${prop.path}`;

      return (
        <li key={key} className={activeRoute(prop.path)} title={collapsed ? prop.name : ''}>
          <NavLink
            to={fullPath}
            className="nav-link"
          >
            <span className="nav-icon">{prop.icon}</span>
            {!collapsed && <span className="nav-text">{prop.name}</span>}
          </NavLink>
        </li>
      );
    });
  };

  const getRoleDisplay = () => {
    if (!user) return { name: 'Guest User', role: 'Not Logged In', icon: '👤' };

    const roleConfig = {
      admin: { role: 'System Admin', icon: '👑' },
      owner: { role: 'Cafe Owner', icon: '🏢' },
      operator: { role: 'Operator', icon: '👤' }
    };

    return {
      name: user.name || 'User',
      role: roleConfig[user.role]?.role || 'User',
      icon: roleConfig[user.role]?.icon || '👤'
    };
  };

  const roleDisplay = getRoleDisplay();

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="brand-icon">💰</span>
          {!collapsed && <span className="brand-text">MZ-Desk</span>}
        </div>
<span className="primary rounded-circle ">
          <button className="collapse-btn" onClick={toggleCollapse} title={collapsed ? 'Expand' : 'Collapse'}>
          {collapsed ? '|▶' : '◀|'}
        </button>
</span>
      </div>
      <div className="sidebar-content">
        <ul className="nav-list">
          {createLinks(routes)}
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">{roleDisplay.icon}</div>
          {!collapsed && (
            <div className="user-details">
              <div className="user-name">{roleDisplay.name}</div>
              <div className="user-role">{roleDisplay.role}</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

