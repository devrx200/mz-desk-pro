import React from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import AdminFooter from '../components/Footers/AdminFooter';
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

const Admin = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainContent.current) {
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Get routes based on user role
  const getUserRoutes = () => {
    if (!user) return [];
    return routes[user.role] || [];
  };

  const getRoutes = (userRoutes) => {
    const allRoutes = [];

    userRoutes.forEach((prop, key) => {
      // Handle routes with submenus
      if (prop.submenu) {
        prop.submenu.forEach((subItem, subKey) => {
          allRoutes.push(
            <Route path={subItem.path} element={subItem.component} key={`${key}-${subKey}`} />
          );
        });
      }
      // Handle regular routes
      else if (prop.path) {
        allRoutes.push(
          <Route path={prop.path} element={prop.component} key={key} />
        );
      }
    });

    return allRoutes;
  };

  const getBrandText = () => {
    const userRoutes = getUserRoutes();
    const currentPath = location.pathname.split('/').pop();
    const fullCurrentPath = location.pathname;

    // Check regular routes
    for (let i = 0; i < userRoutes.length; i++) {
      if (userRoutes[i].path === `/${currentPath}`) {
        return userRoutes[i].name;
      }

      // Check submenu routes
      if (userRoutes[i].submenu) {
        for (let j = 0; j < userRoutes[i].submenu.length; j++) {
          if (fullCurrentPath.includes(userRoutes[i].submenu[j].path)) {
            return userRoutes[i].submenu[j].name;
          }
        }
      }
    }
    return 'Dashboard';
  };

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const userRoutes = getUserRoutes();
  const defaultRoute = `/${user.role}/dashboard`;

  return (
    <div className="admin-layout">
      <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar
          routes={userRoutes}
          collapsed={sidebarCollapsed}
          toggleCollapse={toggleSidebarCollapse}
          userRole={user.role}
        />
      </div>
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`} ref={mainContent}>
        <AdminNavbar
          toggleSidebar={toggleSidebar}
        />
        <div className="content-wrapper">
          <Routes>
            {getRoutes(userRoutes)}
            <Route path="*" element={<Navigate to={defaultRoute} replace />} />
          </Routes>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default Admin;

