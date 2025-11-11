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

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.emailOrPhone && formData.password) {
      let role = 'operator';
      let email = formData.emailOrPhone;
      let name = 'User';

      // Check if input is email or phone
      if (formData.emailOrPhone.includes('@')) {
        // It's an email
        if (formData.emailOrPhone.includes('admin')) {
          role = 'admin';
        } else if (formData.emailOrPhone.includes('owner')) {
          role = 'owner';
        }
        name = formData.emailOrPhone.split('@')[0];
      } else {
        // It's a phone number
        // For demo: check phone patterns
        if (formData.emailOrPhone.includes('9999') || formData.emailOrPhone === '9999999999') {
          role = 'admin';
          email = 'admin@cybercafe.com';
          name = 'Admin User';
        } else if (formData.emailOrPhone.includes('8888') || formData.emailOrPhone === '8888888888') {
          role = 'owner';
          email = 'owner@cybercafe.com';
          name = 'Cafe Owner';
        } else {
          role = 'operator';
          email = 'operator@cybercafe.com';
          name = 'Operator';
        }
      }

      login({
        name: name,
        email: email,
        role: role
      });

      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'owner') {
        navigate('/owner/dashboard');
      } else {
        navigate('/operator/dashboard');
      }
    } else {
      setError('Please enter both email/phone and password');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleQuickLogin = (role) => {
    const credentials = {
      admin: { email: 'admin@cybercafe.com', name: 'Admin User' },
      owner: { email: 'owner@cybercafe.com', name: 'Cafe Owner' },
      operator: { email: 'operator@cybercafe.com', name: 'Operator' }
    };

    login({
      ...credentials[role],
      role: role
    });

    navigate(`/${role}/dashboard`);
  };

  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-sm py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Welcome Back</h1>
            <p className="lead">
              Sign in to access your MZ-Desk dashboard
            </p>
          </div>
        </Container>
      </section>

      {/* Login Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="11" xl="10">
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <CardBody className="p-0">
                  <Row className="g-0">
                    <Col lg="7" className="p-5">
                      <div className="mb-4">
                        <h3 className="fw-bold mb-2">Sign In</h3>
                        <p className="text-muted mb-0">Enter your credentials to continue</p>
                      </div>

                      {error && (
                        <Alert color="danger" className="mb-4 d-flex align-items-center">
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          <span>{error}</span>
                        </Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-4">
                          <Label for="emailOrPhone" className="fw-semibold mb-2">
                            Email Address or Mobile Number
                          </Label>
                          <Input
                            type="text"
                            id="emailOrPhone"
                            name="emailOrPhone"
                            placeholder="name@example.com or +91 XXXXX XXXXX"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            className="form-control-lg"
                            required
                          />
                        </FormGroup>

                        <FormGroup className="mb-4">
                          <Label for="password" className="fw-semibold mb-2">
                            Password
                          </Label>
                          <InputGroup size="lg">
                            <Input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              placeholder="Enter your password"
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

                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <FormGroup check className="mb-0">
                            <Input type="checkbox" id="remember" />
                            <Label check for="remember" className="text-muted">
                              Remember me
                            </Label>
                          </FormGroup>
                          <Link to="/forgot-password" className="text-decoration-none small fw-semibold">
                            Forgot Password?
                          </Link>
                        </div>

                        <Button
                          color="primary"
                          size="lg"
                          block
                          type="submit"
                          className="mb-4 py-3 fw-semibold"
                        >
                          Sign In
                        </Button>

                        <div className="text-center">
                          <span className="text-muted">Don't have an account? </span>
                          <Link to="/register" className="fw-semibold text-decoration-none">
                            Create Account
                          </Link>
                        </div>
                      </Form>
                    </Col>

                    <Col lg="5" className="bg-light p-5 d-none d-lg-flex flex-column">
                      <div className="mb-4">
                        <Badge color="primary" pill className="mb-3 px-3 py-2">
                          <i className="bi bi-lightning-fill me-1"></i> Quick Access
                        </Badge>
                        <h5 className="fw-bold mb-3">Demo Accounts</h5>
                        <p className="text-muted small mb-4">
                          Try the system instantly with email or phone
                        </p>
                      </div>

                      <div className="d-grid gap-3 mb-4">
                        <Button
                          color="danger"
                          outline
                          onClick={() => handleQuickLogin('admin')}
                          className="text-start py-3 px-4"
                        >
                          <div className="d-flex align-items-center">
                            <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                              <i className="bi bi-shield-check text-danger fs-5"></i>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-bold mb-1">Admin Access</div>
                              <small className="text-muted d-block">
                                <i className="bi bi-envelope me-1"></i>admin@cybercafe.com
                              </small>
                              <small className="text-muted d-block">
                                <i className="bi bi-phone me-1"></i>+91 9999999999
                              </small>
                            </div>
                          </div>
                        </Button>

                        <Button
                          color="primary"
                          outline
                          onClick={() => handleQuickLogin('owner')}
                          className="text-start py-3 px-4"
                        >
                          <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                              <i className="bi bi-building text-primary fs-5"></i>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-bold mb-1">Owner Access</div>
                              <small className="text-muted d-block">
                                <i className="bi bi-envelope me-1"></i>owner@cybercafe.com
                              </small>
                              <small className="text-muted d-block">
                                <i className="bi bi-phone me-1"></i>+91 8888888888
                              </small>
                            </div>
                          </div>
                        </Button>

                        <Button
                          color="info"
                          outline
                          onClick={() => handleQuickLogin('operator')}
                          className="text-start py-3 px-4"
                        >
                          <div className="d-flex align-items-center">
                            <div className="bg-info bg-opacity-10 rounded-circle p-2 me-3">
                              <i className="bi bi-person-workspace text-info fs-5"></i>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-bold mb-1">Operator Access</div>
                              <small className="text-muted d-block">
                                <i className="bi bi-envelope me-1"></i>operator@cybercafe.com
                              </small>
                              <small className="text-muted d-block">
                                <i className="bi bi-phone me-1"></i>+91 7777777777
                              </small>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </Col>
                    <Col lg="12">
                                          <div className="mt-auto">
                        <div className="bg-dark rounded-3  text-center py-3 border">
                          <i className="bi bi-headset fs-3 text-primary mb-2 d-block"></i>
                          <p className="small text-muted mb-3">Need assistance?</p>
                          <Button
                            color="info"
                            size="sm"
                            tag={Link}
                            to="/contact"
                            className="px-4"
                          >
                            Contact Support
                          </Button>
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

export default Login;
