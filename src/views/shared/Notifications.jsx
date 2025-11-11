import { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  Badge,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import './Notifications.css';

const Notifications = () => {
  const [filter, setFilter] = useState('all'); // all, unread, read

  // Sample notifications data
  const allNotifications = [
    { id: 1, title: 'New Order Received', message: 'Order #1234 has been placed by Rajesh Kumar', time: '5 min ago', type: 'success', read: false, date: '2025-01-10' },
    { id: 2, title: 'Payment Confirmed', message: 'Payment of ₹2,500 received for Invoice #5678', time: '15 min ago', type: 'info', read: false, date: '2025-01-10' },
    { id: 3, title: 'Low Stock Alert', message: 'Product XYZ is running low. Only 5 units remaining', time: '1 hour ago', type: 'warning', read: false, date: '2025-01-10' },
    { id: 4, title: 'System Update', message: 'New features available. Check the changelog for details', time: '2 hours ago', type: 'primary', read: true, date: '2025-01-10' },
    { id: 5, title: 'Backup Completed', message: 'Daily backup completed successfully at 3:00 AM', time: '3 hours ago', type: 'success', read: true, date: '2025-01-10' },
    { id: 6, title: 'New Customer Registered', message: 'Priya Sharma has registered as a new customer', time: '4 hours ago', type: 'info', read: true, date: '2025-01-10' },
    { id: 7, title: 'Invoice Overdue', message: 'Invoice #4321 is overdue by 5 days', time: '5 hours ago', type: 'danger', read: true, date: '2025-01-10' },
    { id: 8, title: 'Operator Login', message: 'Amit Patel logged in from new device', time: '6 hours ago', type: 'warning', read: true, date: '2025-01-10' },
    { id: 9, title: 'Report Generated', message: 'Monthly sales report is ready for download', time: 'Yesterday', type: 'success', read: true, date: '2025-01-09' },
    { id: 10, title: 'Password Changed', message: 'Your password was changed successfully', time: 'Yesterday', type: 'info', read: true, date: '2025-01-09' },
  ];

  const [notifications, setNotifications] = useState(allNotifications);

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'read') return n.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'success': return 'bi-check-circle-fill';
      case 'warning': return 'bi-exclamation-triangle-fill';
      case 'danger': return 'bi-x-circle-fill';
      case 'info': return 'bi-info-circle-fill';
      default: return 'bi-bell-fill';
    }
  };

  return (
    <div className="notifications-page">
      <Container fluid>
        {/* Page Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div>
                <h1 className="page-title mb-2">
                  <i className="bi bi-bell-fill me-2"></i>
                  Notifications
                </h1>
                <p className="text-muted mb-0">
                  You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="d-flex gap-2">
                <Button color="primary" outline onClick={markAllAsRead} disabled={unreadCount === 0}>
                  <i className="bi bi-check-all me-2"></i>
                  Mark All as Read
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <CardBody className="p-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <ButtonGroup>
                    <Button 
                      color={filter === 'all' ? 'primary' : 'outline-primary'}
                      onClick={() => setFilter('all')}
                    >
                      All ({notifications.length})
                    </Button>
                    <Button 
                      color={filter === 'unread' ? 'primary' : 'outline-primary'}
                      onClick={() => setFilter('unread')}
                    >
                      Unread ({unreadCount})
                    </Button>
                    <Button 
                      color={filter === 'read' ? 'primary' : 'outline-primary'}
                      onClick={() => setFilter('read')}
                    >
                      Read ({notifications.length - unreadCount})
                    </Button>
                  </ButtonGroup>
                  <div className="text-muted">
                    <i className="bi bi-funnel me-2"></i>
                    Showing {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Notifications List */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <CardBody className="p-0">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-bell-slash fs-1 text-muted mb-3 d-block"></i>
                    <h5 className="text-muted">No notifications found</h5>
                    <p className="text-muted mb-0">
                      {filter === 'unread' && 'You have no unread notifications'}
                      {filter === 'read' && 'You have no read notifications'}
                      {filter === 'all' && 'You have no notifications'}
                    </p>
                  </div>
                ) : (
                  <ListGroup flush>
                    {filteredNotifications.map((notification) => (
                      <ListGroupItem 
                        key={notification.id} 
                        className={`notification-list-item ${!notification.read ? 'unread' : ''}`}
                      >
                        <div className="d-flex align-items-start gap-3">
                          <div className={`notification-icon-large bg-${notification.type}`}>
                            <i className={`bi ${getNotificationIcon(notification.type)}`}></i>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div>
                                <h6 className="mb-1 fw-bold">{notification.title}</h6>
                                <p className="mb-0 text-muted">{notification.message}</p>
                              </div>
                              {!notification.read && (
                                <Badge color="primary" pill className="ms-2">New</Badge>
                              )}
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                              <small className="text-muted">
                                <i className="bi bi-clock me-1"></i>
                                {notification.time}
                              </small>
                              <div className="notification-actions">
                                {!notification.read && (
                                  <Button 
                                    color="link" 
                                    size="sm" 
                                    className="text-primary p-0 me-3"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    <i className="bi bi-check2 me-1"></i>
                                    Mark as Read
                                  </Button>
                                )}
                                <Button 
                                  color="link" 
                                  size="sm" 
                                  className="text-danger p-0"
                                  onClick={() => deleteNotification(notification.id)}
                                >
                                  <i className="bi bi-trash me-1"></i>
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Notifications;

