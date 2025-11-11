import React from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import routes from '../routes';

const Auth = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add('auth-page');
    return () => {
      document.body.classList.remove('auth-page');
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainContent.current) {
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const getRoutes = (authRoutes) => {
    return authRoutes.map((prop, key) => {
      return (
        <Route path={prop.path} element={prop.component} key={key} />
      );
    });
  };

  return (
    <div className="auth-layout" ref={mainContent}>
      <div className="auth-container">
        <Routes>
          {getRoutes(routes.auth)}
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;

