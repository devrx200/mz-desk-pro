import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

const AdminNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNotificationModal = () => setNotificationModal(!notificationModal);
  const toggleMessageModal = () => setMessageModal(!messageModal);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Generate breadcrumb from current path
  const generateBreadcrumb = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];

    // Add Home/Dashboard
    breadcrumbs.push({
      name: 'Home',
      path: `/${user?.role}/dashboard`,
      icon: <i className="bi bi-house-door-fill"></i>
    });

    // Process path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      // Skip the role segment (admin/owner/operator)
      if (index === 0) {
        currentPath = `/${segment}`;
        return;
      }

      currentPath += `/${segment}`;

      // Format segment name (capitalize and replace hyphens)
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        name: formattedName,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  // Format date and time
  const formatDateTime = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[currentDateTime.getDay()];
    const monthName = months[currentDateTime.getMonth()];
    const date = currentDateTime.getDate();
    const year = currentDateTime.getFullYear();

    // Format time with AM/PM
    let hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');

    return {
      dayName,
      monthName,
      date,
      year,
      time: `${formattedHours}:${minutes}:${seconds}`,
      ampm,
      fullDate: `${dayName},  ${date} - ${monthName} - ${year}`
    };
  };

  const breadcrumbs = generateBreadcrumb();
  const dateTime = formatDateTime();

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
      <nav className="navbar navbar-gradient">
        <div className="navbar-container">
          <div className="navbar-left">
            <button className="mobile-menu-toggle" onClick={toggleSidebar}>
              <i className="bi bi-list fs-3"></i>
            </button>

            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  {breadcrumbs.map((crumb, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${crumb.isLast ? 'active' : ''}`}
                    >
                      {crumb.isLast ? (
                        <span className="breadcrumb-current">
                          {crumb.icon && <span className="breadcrumb-icon">{crumb.icon}</span>}
                          {crumb.name}
                        </span>
                      ) : (
                        <Link to={crumb.path} className="breadcrumb-link">
                          {crumb.icon && <span className="breadcrumb-icon">{crumb.icon}</span>}
                          {crumb.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>

          <div className="navbar-actions">
            {/* Date and Time Info */}
            <div className="datetime-info">
              <div className="datetime-row">
                <span className="datetime-icon">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <span className="datetime-text">{dateTime.fullDate}</span>
              </div>
              <div className="datetime-row">
                <span className="datetime-icon">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <span className="datetime-text time-display">
                  {dateTime.time} <span className="ampm-badge">{dateTime.ampm}</span>
                </span>
              </div>
            </div>

            <div className="navbar-icons">
              {/* Notifications */}
              <button className="icon-btn" title="Notifications" onClick={toggleNotificationModal}>
                <i className="bi bi-bell-fill fs-5"></i>
                {unreadNotifications > 0 && <span className="badge">{unreadNotifications}</span>}
              </button>

              {/* Messages */}
              <button className="icon-btn" title="Messages" onClick={toggleMessageModal}>
                <i className="bi bi-chat-dots-fill fs-5"></i>
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

