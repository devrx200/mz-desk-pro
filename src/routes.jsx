import React from "react";

// Public Views
import Landing from "./views/Landing";

// Client Views (Auth & Public)
import Login from "./views/client/Login";
import Register from "./views/client/Register";
import About from "./views/client/About";
import Contact from "./views/client/Contact";

// Admin Views
import AdminDashboard from "./views/admin/Dashboard";

// Owner Views
import OwnerDashboard from "./views/owner/Dashboard";

// Operator Views
import OperatorDashboard from "./views/operator/Dashboard";

// Shared Views
import Users from "./views/shared/Users";
import Customers from "./views/shared/Customers";
import Services from "./views/shared/Services";
import Invoices from "./views/shared/Invoices";
import Tables from "./views/shared/Tables";
import Profile from "./views/shared/Profile";
import Notifications from "./views/shared/Notifications";
import Messages from "./views/shared/Messages";
import DummyForms from "./views/shared/DummyForms";


// Role-based routes configuration
const routes = {
  admin: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i className="bi bi-speedometer2"></i>,
      component: <AdminDashboard />,
    },
    {
      path: "/users",
      name: "User Management",
      icon: <i className="bi bi-people-fill"></i>,
      component: <Users />,
    },
    {
      name: "Customer Management",
      icon: <i className="fas fa-users"></i>,
      submenu: [
        {
          path: "/customers",
          name: "All Customers",
          icon: <i className="bi bi-person-lines-fill"></i>,
          component: <Customers />,
        },
        {
          path: "/customers/active",
          name: "Active Customers",
          icon: <i className="bi bi-person-check-fill"></i>,
          component: <Customers />,
        },
        {
          path: "/customers/inactive",
          name: "Inactive Customers",
          icon: <i className="bi bi-person-x-fill"></i>,
          component: <Customers />,
        },
      ],
    },
    {
      name: "Services",
      icon: <i className="fas fa-cogs"></i>,
      submenu: [
        {
          path: "/services",
          name: "All Services",
          icon: <i className="bi bi-gear-fill"></i>,
          component: <Services />,
        },
        {
          path: "/services/active",
          name: "Active Services",
          icon: <i className="bi bi-check-circle-fill"></i>,
          component: <Services />,
        },
        {
          path: "/services/categories",
          name: "Categories",
          icon: <i className="bi bi-grid-fill"></i>,
          component: <Services />,
        },
      ],
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: <i className="bi bi-file-earmark-text-fill"></i>,
      component: <Invoices />,
    },
    {
      name: "Reports",
      icon: <i className="fas fa-chart-line"></i>,
      submenu: [
        {
          path: "/reports",
          name: "All Reports",
          icon: <i className="bi bi-bar-chart-fill"></i>,
          component: <Tables />,
        },
        {
          path: "/reports/sales",
          name: "Sales Report",
          icon: <i className="bi bi-graph-up"></i>,
          component: <Tables />,
        },
        {
          path: "/reports/revenue",
          name: "Revenue Report",
          icon: <i className="bi bi-cash-stack"></i>,
          component: <Tables />,
        },
      ],
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <i className="bi bi-bell-fill"></i>,
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <i className="bi bi-chat-dots-fill"></i>,
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: <i className="bi bi-palette-fill"></i>,
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <i className="bi bi-gear-wide-connected"></i>,
      component: <Profile />,
    },
  ],
  owner: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i className="bi bi-speedometer2"></i>,
      component: <OwnerDashboard />,
    },
    {
      name: "Customer Management",
      icon: <i className="fas fa-users"></i>,
      submenu: [
        {
          path: "/customers",
          name: "All Customers",
          icon: <i className="bi bi-person-lines-fill"></i>,
          component: <Customers />,
        },
        {
          path: "/customers/active",
          name: "Active Customers",
          icon: <i className="bi bi-person-check-fill"></i>,
          component: <Customers />,
        },
      ],
    },
    {
      path: "/services",
      name: "Services",
      icon: <i className="fas fa-cogs"></i>,
      component: <Services />,
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: <i className="bi bi-file-earmark-text-fill"></i>,
      component: <Invoices />,
    },
    {
      path: "/operators",
      name: "Operators",
      icon: <i className="bi bi-person-badge-fill"></i>,
      component: <Users />,
    },
    {
      name: "Reports",
      icon: <i className="fas fa-chart-line"></i>,
      submenu: [
        {
          path: "/reports",
          name: "All Reports",
          icon: <i className="bi bi-bar-chart-fill"></i>,
          component: <Tables />,
        },
        {
          path: "/reports/sales",
          name: "Sales Report",
          icon: <i className="bi bi-graph-up"></i>,
          component: <Tables />,
        },
      ],
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <i className="bi bi-bell-fill"></i>,
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <i className="bi bi-chat-dots-fill"></i>,
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: <i className="bi bi-palette-fill"></i>,
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <i className="bi bi-gear-wide-connected"></i>,
      component: <Profile />,
    },
  ],
  operator: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i className="bi bi-speedometer2"></i>,
      component: <OperatorDashboard />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <i className="fas fa-users"></i>,
      component: <Customers />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <i className="fas fa-cogs"></i>,
      component: <Services />,
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: <i className="bi bi-file-earmark-text-fill"></i>,
      component: <Invoices />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <i className="bi bi-bell-fill"></i>,
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <i className="bi bi-chat-dots-fill"></i>,
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: <i className="bi bi-palette-fill"></i>,
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <i className="bi bi-gear-wide-connected"></i>,
      component: <Profile />,
    },
  ],
  auth: [
    {
      path: "/login",
      name: "Login",
      component: <Login />,
    },
    {
      path: "/register",
      name: "Register",
      component: <Register />,
    },
  ],
  public: [
    {
      path: "/",
      name: "Home",
      component: <Landing />,
    },
    {
      path: "/about",
      name: "About",
      component: <About />,
    },
    {
      path: "/contact",
      name: "Contact",
      component: <Contact />,
    },
  ],
};

export default routes;

