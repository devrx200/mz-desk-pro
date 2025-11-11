import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 98765 43210',
    shopName: user?.shopName || 'Cyber Point Mumbai',
    address: '123 Main Street, Mumbai, Maharashtra',
    gst: 'GST123456789',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const getRoleIcon = (role) => {
    const icons = {
      admin: 'bi-shield-fill-check',
      owner: 'bi-building-fill',
      operator: 'bi-person-fill'
    };
    return icons[role] || 'bi-person-fill';
  };

  const getRoleColor = (role) => {
    const colors = {
      admin: 'danger',
      owner: 'primary',
      operator: 'success'
    };
    return colors[role] || 'secondary';
  };

  return (
    <Container fluid className="p-0">
      {/* Page Header */}
      <div className="mb-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        borderRadius: '0 0 1rem 1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <Row className="align-items-center">
          <Col xs="12">
            <h1 className="text-white mb-2 d-flex align-items-center">
              <i className="bi bi-person-circle me-3" style={{ fontSize: '2.5rem' }}></i>
              Profile Settings
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              Manage your account settings and preferences
            </p>
          </Col>
        </Row>
      </div>

      <Row>
        {/* Profile Sidebar */}
        <Col lg="4" className="mb-4">
          <Card className="shadow-sm">
            <CardBody className="text-center">
              <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '3.5rem'
                }}>
                <i className={`bi ${getRoleIcon(user?.role)}`}></i>
              </div>
              <h3 className="mb-2">{user?.name}</h3>
              <Badge color={getRoleColor(user?.role)} pill className="mb-3" style={{ fontSize: '0.875rem' }}>
                {user?.role?.toUpperCase()}
              </Badge>
              <p className="text-muted mb-0">
                <i className="bi bi-envelope me-2"></i>
                {user?.email}
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-sm mt-3">
            <CardBody>
              <h6 className="text-muted mb-3">
                <i className="bi bi-graph-up me-2"></i>
                Account Statistics
              </h6>
              <div className="mb-3 pb-3" style={{ borderBottom: '1px solid #dee2e6' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Days Active</span>
                  <Badge color="info" pill>45 days</Badge>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Total Revenue</span>
                  <strong className="text-success">₹1,25,450</strong>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* Profile Main Content */}
        <Col lg="8">
          {/* Personal Information */}
          <Card className="shadow-sm mb-4">
            <CardBody>
              <h5 className="mb-4">
                <i className="bi bi-person-lines-fill me-2 text-primary"></i>
                Personal Information
              </h5>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="name">
                        <i className="bi bi-person me-2"></i>
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="email">
                        <i className="bi bi-envelope me-2"></i>
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="phone">
                        <i className="bi bi-telephone me-2"></i>
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="shopName">
                        <i className="bi bi-shop me-2"></i>
                        Shop Name
                      </Label>
                      <Input
                        type="text"
                        id="shopName"
                        name="shopName"
                        value={formData.shopName}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address">
                    <i className="bi bi-geo-alt me-2"></i>
                    Address
                  </Label>
                  <Input
                    type="textarea"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="gst">
                    <i className="bi bi-file-text me-2"></i>
                    GST Number
                  </Label>
                  <Input
                    type="text"
                    id="gst"
                    name="gst"
                    value={formData.gst}
                    onChange={handleChange}
                  />
                </FormGroup>
                <div className="d-flex gap-2">
                  <Button color="primary" type="submit">
                    <i className="bi bi-check-circle me-2"></i>
                    Save Changes
                  </Button>
                  <Button color="secondary" type="button">
                    <i className="bi bi-x-circle me-2"></i>
                    Cancel
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>

          {/* Change Password */}
          <Card className="shadow-sm">
            <CardBody>
              <h5 className="mb-4">
                <i className="bi bi-shield-lock me-2 text-warning"></i>
                Change Password
              </h5>
              <Form onSubmit={handlePasswordSubmit}>
                <FormGroup>
                  <Label for="currentPassword">
                    <i className="bi bi-key me-2"></i>
                    Current Password
                  </Label>
                  <Input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Enter current password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="newPassword">
                        <i className="bi bi-lock me-2"></i>
                        New Password
                      </Label>
                      <Input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter new password"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="confirmPassword">
                        <i className="bi bi-lock-fill me-2"></i>
                        Confirm Password
                      </Label>
                      <Input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm new password"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button color="warning" type="submit" disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}>
                  <i className="bi bi-shield-check me-2"></i>
                  Change Password
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

