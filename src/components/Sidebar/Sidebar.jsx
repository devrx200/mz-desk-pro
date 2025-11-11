import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import './Sidebar.css';

const Sidebar = ({ routes, collapsed, toggleCollapse, userRole }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const activeRoute = (routePath) => {
    return location.pathname.includes(routePath) ? 'active' : '';
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isSubmenuActive = (submenu) => {
    return submenu.some(item => location.pathname.includes(item.path));
  };

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      // Skip hidden routes
      if (prop.hideFromSidebar) return null;

      // Handle submenu items
      if (prop.submenu) {
        const isOpen = openSubmenus[key];
        const hasActiveChild = isSubmenuActive(prop.submenu);

        return (
          <li key={key} className={`nav-item ${hasActiveChild ? 'active' : ''}`}>
            <div
              className={`nav-link submenu-toggle ${hasActiveChild ? 'active' : ''}`}
              onClick={() => toggleSubmenu(key)}
              title={collapsed ? prop.name : ''}
            >
              <span className="nav-icon">{prop.icon}</span>
              {!collapsed && (
                <>
                  <span className="nav-text">{prop.name}</span>
                  <i className={`bi bi-chevron-${isOpen ? 'down' : 'right'} submenu-arrow`}></i>
                </>
              )}
            </div>
            {!collapsed && isOpen && (
              <ul className="submenu-list">
                {prop.submenu.map((subItem, subKey) => {
                  const fullPath = `/${userRole}${subItem.path}`;
                  return (
                    <li key={subKey} className={activeRoute(subItem.path)}>
                      <NavLink to={fullPath} className="nav-link submenu-link">
                        <span className="nav-icon">{subItem.icon}</span>
                        <span className="nav-text">{subItem.name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      }

      // Handle regular menu items
      const fullPath = `/${userRole}${prop.path}`;
      return (
        <li key={key} className={`nav-item ${activeRoute(prop.path)}`} title={collapsed ? prop.name : ''}>
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

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5e72e4',
      cancelButtonColor: '#f5365c',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate('/login');
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          confirmButtonColor: '#5e72e4',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const getRoleDisplay = () => {
    if (!user) return {
      name: 'Guest User',
      role: 'Not Logged In',
      userId: 'N/A',
      icon: <i className="bi bi-person-circle"></i>
    };

    const roleConfig = {
      admin: {
        role: 'System Admin',
        icon: <i className="bi bi-shield-fill-check"></i>
      },
      owner: {
        role: 'Cafe Owner',
        icon: <i className="bi bi-building-fill"></i>
      },
      operator: {
        role: 'Operator',
        icon: <i className="bi bi-person-badge-fill"></i>
      }
    };

    return {
      name: user.name || 'User',
      role: roleConfig[user.role]?.role || 'User',
      userId: user.id || user.email || 'N/A',
      icon: roleConfig[user.role]?.icon || <i className="bi bi-person-circle"></i>
    };
  };

  const roleDisplay = getRoleDisplay();

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="brand-icon">
            <i className="fas fa-wallet"></i>
          </span>
          {!collapsed && <span className="brand-text">MZ-Desk</span>}
        </div>
        <span className="primary rounded-circle">
          <button className="collapse-btn" onClick={toggleCollapse} title={collapsed ? 'Expand' : 'Collapse'}>
            <i className={`bi bi-chevron-${collapsed ? 'right' : 'left'}`}></i>
          </button>
        </span>
      </div>
      <div className="sidebar-content">
        <ul className="nav-list">
          {createLinks(routes)}
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className={`user-info ${showProfileMenu ? 'active' : ''}`} onClick={toggleProfileMenu}>
          <div className="user-avatar">{roleDisplay.icon}</div>
          {!collapsed && (
            <>
              <div className="user-details">
                <div className="user-name">{roleDisplay.name}</div>
                <div className="user-role">{roleDisplay.role}</div>
                <div className="user-id">ID: {roleDisplay.userId}</div>
              </div>
              <i className={`bi bi-chevron-${showProfileMenu ? 'up' : 'down'} profile-arrow`}></i>
            </>
          )}
        </div>
        {!collapsed && showProfileMenu && (
          <div className="profile-menu">
            <button className="profile-menu-item logout-btn" onClick={(e) => { e.stopPropagation(); handleLogout(); }}>
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;

