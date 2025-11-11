import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
  Alert,
  Badge
} from 'reactstrap';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cafeName: '',
    address: '',
    city: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      login({
        name: formData.fullName,
        email: formData.email,
        role: 'owner'
      });
      navigate('/owner/dashboard');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-sm py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Create Your Account</h1>
            <p className="lead">
              Start managing your business today
            </p>
          </div>
        </Container>
      </section>

      {/* Register Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="11" xl="10">
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <CardBody className="p-0">
                  <Row className="g-0">
                    <Col lg="7" className="p-5">
                      <div className="mb-4">
                        <h3 className="fw-bold mb-2">Register</h3>
                        <p className="text-muted mb-0">Fill in your details to get started</p>
                      </div>

                      {error && (
                        <Alert color="danger" className="mb-4 d-flex align-items-center">
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          <span>{error}</span>
                        </Alert>
                      )}

                      {success && (
                        <Alert color="success" className="mb-4 d-flex align-items-center">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          <span>Registration successful! Redirecting to dashboard...</span>
                        </Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="fullName" className="fw-semibold mb-2">
                                Full Name
                              </Label>
                              <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="email" className="fw-semibold mb-2">
                                Email Address
                              </Label>
                              <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="phone" className="fw-semibold mb-2">
                                Phone Number
                              </Label>
                              <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 XXXXX XXXXX"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="cafeName" className="fw-semibold mb-2">
                                Business Name
                              </Label>
                              <Input
                                type="text"
                                id="cafeName"
                                name="cafeName"
                                placeholder="Enter business name"
                                value={formData.cafeName}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="address" className="fw-semibold mb-2">
                                Shop Address
                              </Label>
                              <Input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter shop address"
                                value={formData.address}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="city" className="fw-semibold mb-2">
                                City
                              </Label>
                              <Input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter city"
                                value={formData.city}
                                onChange={handleChange}
                                className="form-control-lg"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="password" className="fw-semibold mb-2">
                                Password
                              </Label>
                              <InputGroup size="lg">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  id="password"
                                  name="password"
                                  placeholder="Create a password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  required
                                />
                                <Button
                                  color="light"
                                  outline
                                  onClick={() => setShowPassword(!showPassword)}
                                  type="button"
                                >
                                  <i className={`bi bi-eye${showPassword ? '-slash' : ''}-fill`}></i>
                                </Button>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="mb-4">
                              <Label for="confirmPassword" className="fw-semibold mb-2">
                                Confirm Password
                              </Label>
                              <InputGroup size="lg">
                                <Input
                                  type={showConfirmPassword ? "text" : "password"}
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  placeholder="Confirm your password"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  required
                                />
                                <Button
                                  color="light"
                                  outline
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  type="button"
                                >
                                  <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}-fill`}></i>
                                </Button>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button
                          color="primary"
                          size="lg"
                          block
                          type="submit"
                          className="mb-4 py-3 fw-semibold"
                          disabled={success}
                        >
                          {success ? 'Creating Account...' : 'Create Account'}
                        </Button>

                        <div className="text-center">
                          <span className="text-muted">Already have an account? </span>
                          <Link to="/login" className="fw-semibold text-decoration-none">
                            Sign In
                          </Link>
                        </div>
                      </Form>
                    </Col>

                    <Col lg="5" className="bg-light p-5 d-none d-lg-flex flex-column">
                      <div className="mb-4">
                        <Badge color="success" pill className="mb-3 px-3 py-2">
                          <i className="bi bi-star-fill me-1"></i> What You Get
                        </Badge>
                        <h5 className="fw-bold mb-4">Everything You Need</h5>
                      </div>

                      <div className="d-flex flex-column gap-4 mb-4">
                        <div className="d-flex align-items-start">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                            <i className="bi bi-speedometer2 text-primary fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">Real-time Monitoring</h6>
                            <p className="text-muted small mb-0">
                              Track all computers and sessions in real-time
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start">
                          <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                            <i className="bi bi-receipt text-success fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">Automated Billing</h6>
                            <p className="text-muted small mb-0">
                              Generate bills automatically with detailed reports
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start">
                          <div className="bg-info bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                            <i className="bi bi-people text-info fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">Customer Management</h6>
                            <p className="text-muted small mb-0">
                              Manage customers and track their usage history
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start">
                          <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                            <i className="bi bi-graph-up text-warning fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">Analytics & Reports</h6>
                            <p className="text-muted small mb-0">
                              Detailed insights and revenue analytics
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="bg-white rounded-3 p-4 border">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                              <h6 className="fw-bold mb-0">Free Trial</h6>
                              <small className="text-muted">No credit card required</small>
                            </div>
                            <Badge color="success" className="px-3 py-2">
                              ₹0
                            </Badge>
                          </div>
                          <p className="small text-muted mb-0">
                            <i className="bi bi-shield-check text-success me-1"></i>
                            Secure & encrypted data storage
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ClientFooter />
    </>
  );
};

export default Register;
