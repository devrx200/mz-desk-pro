import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import './AdminNavbar.css';

const AdminNavbar = ({ brandText, toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNotificationModal = () => setNotificationModal(!notificationModal);
  const toggleMessageModal = () => setMessageModal(!messageModal);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Sample notifications data
  const notifications = [
    { id: 1, title: 'New Order Received', message: 'Order #1234 has been placed', time: '5 min ago', type: 'success', read: false },
    { id: 2, title: 'Payment Confirmed', message: 'Payment of ₹2,500 received', time: '15 min ago', type: 'info', read: false },
    { id: 3, title: 'Low Stock Alert', message: 'Product XYZ is running low', time: '1 hour ago', type: 'warning', read: false },
    { id: 4, title: 'System Update', message: 'New features available', time: '2 hours ago', type: 'primary', read: true },
    { id: 5, title: 'Backup Completed', message: 'Daily backup successful', time: '3 hours ago', type: 'success', read: true },
  ];

  // Sample messages data
  const messages = [
    { id: 1, sender: 'Rajesh Kumar', message: 'Can you help me with the billing issue?', time: '10 min ago', avatar: '👤', read: false },
    { id: 2, sender: 'Priya Sharma', message: 'Thank you for the quick service!', time: '30 min ago', avatar: '👩', read: false },
    { id: 3, sender: 'Admin Team', message: 'System maintenance scheduled for tonight', time: '1 hour ago', avatar: '⚙️', read: true },
    { id: 4, sender: 'Amit Patel', message: 'Invoice sent successfully', time: '2 hours ago', avatar: '👨', read: true },
  ];

  const unreadNotifications = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => !m.read).length;

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="navbar-container">
          <div className="navbar-left">
            <button className="mobile-menu-toggle" onClick={toggleSidebar}>
              <i className="bi bi-list fs-3"></i>
            </button>
            <div className="navbar-brand">
              <h2 className="navbar-title text-white">{"|| "}{ brandText || 'Dashboard'} {">"}</h2>
            </div>
          </div>
          <div className="navbar-actions">
            <div className="navbar-icons">
              {/* Notifications */}
              <button className="icon-btn bg-primary" title="Notifications" onClick={toggleNotificationModal}>
                <i className="bi bi-bell-fill fs-5 text-white"></i>
                {unreadNotifications > 0 && <span className="badge">{unreadNotifications}</span>}
              </button>

              {/* Messages */}
              <button className="icon-btn bg-info " title="Messages" onClick={toggleMessageModal}>
                <i className="bi bi-chat-dots-fill fs-5 text-white"></i>
                {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
              </button>

              {/* User Dropdown */}
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="user-dropdown">
                <DropdownToggle tag="div" className="user-profile-link">
                  <div className="user-avatar-small">
                    <i className="bi bi-person-fill"></i>
                  </div>
                </DropdownToggle>
                <DropdownMenu end className="user-dropdown-menu">
                  <DropdownItem header className="user-dropdown-header">
                    <div className="d-flex align-items-center">
                      <div className="user-avatar-dropdown me-3">
                        <i className="bi bi-person-fill fs-4"></i>
                      </div>
                      <div>
                        <div className="fw-bold">{user?.name || 'User'}</div>
                        <small className="text-muted">{user?.email || 'user@example.com'}</small>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to={`/${user?.role}/user-profile`}>
                    <i className="bi bi-person me-2"></i>
                    My Profile
                  </DropdownItem>
                  <DropdownItem tag={Link} to={`/${user?.role}/settings`}>
                    <i className="bi bi-gear me-2"></i>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={handleLogout} className="text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>

      {/* Notifications Modal */}
      <Modal isOpen={notificationModal} toggle={toggleNotificationModal} size="lg" className="notification-modal">
        <ModalHeader toggle={toggleNotificationModal}>
          <i className="bi bi-bell-fill me-2"></i>
          Notifications
          {unreadNotifications > 0 && (
            <Badge color="danger" className="ms-2">{unreadNotifications} New</Badge>
          )}
        </ModalHeader>
        <ModalBody className="p-0">
          <ListGroup flush>
            {notifications.map((notification) => (
              <ListGroupItem
                key={notification.id}
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
                action
              >
                <div className="d-flex align-items-start">
                  <div className={`notification-icon bg-${notification.type} me-3`}>
                    <i className={`bi bi-${
                      notification.type === 'success' ? 'check-circle-fill' :
                      notification.type === 'warning' ? 'exclamation-triangle-fill' :
                      notification.type === 'info' ? 'info-circle-fill' :
                      'bell-fill'
                    }`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h6 className="mb-1 fw-bold">{notification.title}</h6>
                      <small className="text-muted">{notification.time}</small>
                    </div>
                    <p className="mb-0 text-muted">{notification.message}</p>
                  </div>
                  {!notification.read && <div className="unread-dot"></div>}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="modal-footer-actions p-3 text-center border-top">
            <Link to={`/${user?.role}/notifications`} className="text-primary text-decoration-none fw-semibold">
              View All Notifications <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </ModalBody>
      </Modal>

      {/* Messages Modal */}
      <Modal isOpen={messageModal} toggle={toggleMessageModal} size="lg" className="message-modal">
        <ModalHeader toggle={toggleMessageModal}>
          <i className="bi bi-chat-dots-fill me-2 "></i>
          Messages
          {unreadMessages > 0 && (
            <Badge color="danger" className="ms-2">{unreadMessages} New</Badge>
          )}
        </ModalHeader>
        <ModalBody className="p-0">
          <ListGroup flush>
            {messages.map((message) => (
              <ListGroupItem
                key={message.id}
                className={`message-item ${!message.read ? 'unread' : ''}`}
                action
              >
                <div className="d-flex align-items-start">
                  <div className="message-avatar me-3">
                    <span className="avatar-emoji">{message.avatar}</span>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h6 className="mb-1 fw-bold">{message.sender}</h6>
                      <small className="text-muted">{message.time}</small>
                    </div>
                    <p className="mb-0 text-muted">{message.message}</p>
                  </div>
                  {!message.read && <div className="unread-dot"></div>}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="modal-footer-actions p-3 text-center border-top">
            <Link to={`/${user?.role}/messages`} className="text-primary text-decoration-none fw-semibold">
              View All Messages <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AdminNavbar;

