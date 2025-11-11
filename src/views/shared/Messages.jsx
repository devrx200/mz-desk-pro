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
  ListGroupItem,
  Input,
  InputGroup
} from 'reactstrap';

const Messages = () => {
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [searchQuery, setSearchQuery] = useState('');

  // Sample messages data
  const allMessages = [
    { 
      id: 1, 
      sender: 'Rajesh Kumar', 
      message: 'Can you help me with the billing issue? I need to update my invoice details.', 
      time: '10 min ago', 
      avatar: '👤', 
      read: false,
      date: '2025-01-10',
      role: 'Customer'
    },
    { 
      id: 2, 
      sender: 'Priya Sharma', 
      message: 'Thank you for the quick service! The product quality is excellent.', 
      time: '30 min ago', 
      avatar: '👩', 
      read: false,
      date: '2025-01-10',
      role: 'Customer'
    },
    { 
      id: 3, 
      sender: 'Admin Team', 
      message: 'System maintenance scheduled for tonight at 11:00 PM. Expected downtime: 30 minutes.', 
      time: '1 hour ago', 
      avatar: '⚙️', 
      read: true,
      date: '2025-01-10',
      role: 'Admin'
    },
    { 
      id: 4, 
      sender: 'Amit Patel', 
      message: 'Invoice #5678 has been sent successfully to the customer.', 
      time: '2 hours ago', 
      avatar: '👨', 
      read: true,
      date: '2025-01-10',
      role: 'Operator'
    },
    { 
      id: 5, 
      sender: 'Sneha Reddy', 
      message: 'Can I get a discount on bulk orders? I need to purchase 50 units.', 
      time: '3 hours ago', 
      avatar: '👩', 
      read: true,
      date: '2025-01-10',
      role: 'Customer'
    },
    { 
      id: 6, 
      sender: 'Support Team', 
      message: 'Your ticket #1234 has been resolved. Please check and confirm.', 
      time: '4 hours ago', 
      avatar: '🎧', 
      read: true,
      date: '2025-01-10',
      role: 'Support'
    },
    { 
      id: 7, 
      sender: 'Vikram Singh', 
      message: 'Payment of ₹5,000 has been processed successfully.', 
      time: '5 hours ago', 
      avatar: '👨', 
      read: true,
      date: '2025-01-10',
      role: 'Customer'
    },
    { 
      id: 8, 
      sender: 'Marketing Team', 
      message: 'New promotional campaign starts next week. Check the details in the dashboard.', 
      time: 'Yesterday', 
      avatar: '📢', 
      read: true,
      date: '2025-01-09',
      role: 'Marketing'
    },
  ];

  const [messages, setMessages] = useState(allMessages);

  const filteredMessages = messages.filter(m => {
    const matchesFilter = filter === 'all' || (filter === 'unread' && !m.read) || (filter === 'read' && m.read);
    const matchesSearch = m.sender.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         m.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = messages.filter(m => !m.read).length;

  const markAsRead = (id) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, read: true } : m
    ));
  };

  const markAllAsRead = () => {
    setMessages(messages.map(m => ({ ...m, read: true })));
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Admin': return 'danger';
      case 'Operator': return 'info';
      case 'Support': return 'warning';
      case 'Marketing': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="messages-page">
      <Container fluid>
        {/* Page Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div>
                <h1 className="page-title mb-2">
                  <i className="bi bi-chat-dots-fill me-2"></i>
                  Messages
                </h1>
                <p className="text-muted mb-0">
                  You have {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
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

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <CardBody className="p-3">
                <Row className="align-items-center g-3">
                  <Col md={6}>
                    <InputGroup>
                      <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                      </span>
                      <Input
                        type="text"
                        placeholder="Search messages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <ButtonGroup>
                        <Button 
                          color={filter === 'all' ? 'primary' : 'outline-primary'}
                          onClick={() => setFilter('all')}
                          size="sm"
                        >
                          All ({messages.length})
                        </Button>
                        <Button 
                          color={filter === 'unread' ? 'primary' : 'outline-primary'}
                          onClick={() => setFilter('unread')}
                          size="sm"
                        >
                          Unread ({unreadCount})
                        </Button>
                        <Button 
                          color={filter === 'read' ? 'primary' : 'outline-primary'}
                          onClick={() => setFilter('read')}
                          size="sm"
                        >
                          Read ({messages.length - unreadCount})
                        </Button>
                      </ButtonGroup>
                      <small className="text-muted">
                        {filteredMessages.length} message{filteredMessages.length !== 1 ? 's' : ''}
                      </small>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Messages List */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <CardBody className="p-0">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-chat-slash fs-1 text-muted mb-3 d-block"></i>
                    <h5 className="text-muted">No messages found</h5>
                    <p className="text-muted mb-0">
                      {searchQuery ? 'Try a different search term' : 
                       filter === 'unread' ? 'You have no unread messages' :
                       filter === 'read' ? 'You have no read messages' :
                       'You have no messages'}
                    </p>
                  </div>
                ) : (
                  <ListGroup flush>
                    {filteredMessages.map((message) => (
                      <ListGroupItem 
                        key={message.id} 
                        className={`message-list-item ${!message.read ? 'unread' : ''}`}
                      >
                        <div className="d-flex align-items-start gap-3">
                          <div className="message-avatar-large">
                            <span className="avatar-emoji-large">{message.avatar}</span>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                  <h6 className="mb-0 fw-bold">{message.sender}</h6>
                                  <Badge color={getRoleBadgeColor(message.role)} pill className="badge-sm">
                                    {message.role}
                                  </Badge>
                                  {!message.read && (
                                    <Badge color="primary" pill className="badge-sm">New</Badge>
                                  )}
                                </div>
                                <p className="mb-0 text-muted message-text">{message.message}</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                              <small className="text-muted">
                                <i className="bi bi-clock me-1"></i>
                                {message.time}
                              </small>
                              <div className="message-actions">
                                {!message.read && (
                                  <Button 
                                    color="link" 
                                    size="sm" 
                                    className="text-primary p-0 me-3"
                                    onClick={() => markAsRead(message.id)}
                                  >
                                    <i className="bi bi-check2 me-1"></i>
                                    Mark as Read
                                  </Button>
                                )}
                                <Button 
                                  color="link" 
                                  size="sm" 
                                  className="text-success p-0 me-3"
                                >
                                  <i className="bi bi-reply me-1"></i>
                                  Reply
                                </Button>
                                <Button 
                                  color="link" 
                                  size="sm" 
                                  className="text-danger p-0"
                                  onClick={() => deleteMessage(message.id)}
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

export default Messages;

