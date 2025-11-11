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
      icon: "📊",
      component: <AdminDashboard />,
    },
    {
      path: "/users",
      name: "User Management",
      icon: "👥",
      component: <Users />,
    },
    {
      path: "/customers",
      name: "All Customers",
      icon: "👤",
      component: <Customers />,
    },
    {
      path: "/services",
      name: "Services",
      icon: "🛠️",
      component: <Services />,
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: "📄",
      component: <Invoices />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: "�",
      component: <Tables />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "🔔",
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: "💬",
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: "🎨",
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "⚙️",
      component: <Profile />,
    },
  ],
  owner: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "📊",
      component: <OwnerDashboard />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: "👥",
      component: <Customers />,
    },
    {
      path: "/services",
      name: "Services",
      icon: "🛠️",
      component: <Services />,
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: "📄",
      component: <Invoices />,
    },
    {
      path: "/operators",
      name: "Operators",
      icon: "👤",
      component: <Users />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: "�",
      component: <Tables />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "🔔",
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: "💬",
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: "🎨",
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "⚙️",
      component: <Profile />,
    },
  ],
  operator: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "�",
      component: <OperatorDashboard />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: "👥",
      component: <Customers />,
    },
    {
      path: "/services",
      name: "Services",
      icon: "🛠️",
      component: <Services />,
    },
    {
      path: "/invoices",
      name: "Invoices",
      icon: "📄",
      component: <Invoices />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "🔔",
      component: <Notifications />,
      hideFromSidebar: true,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: "💬",
      component: <Messages />,
      hideFromSidebar: true,
    },
    {
      path: "/dummy-forms",
      name: "Components",
      icon: "🎨",
      component: <DummyForms />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "⚙️",
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

