import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge
} from 'reactstrap';
import ClientHeader from '../components/ClientHeader';
import ClientFooter from '../components/ClientFooter';

const Landing = () => {
  const features = [
    {
      icon: '🆔',
      title: 'Aadhaar Services',
      description: 'Complete Aadhaar enrollment, update, and correction services'
    },
    {
      icon: '🖨️',
      title: 'Printing & Scanning',
      description: 'High-quality printing, photocopying, and scanning services'
    },
    {
      icon: '💳',
      title: 'Government Forms',
      description: 'PAN card, passport, and other government form filling assistance'
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'Track customer visits, services, and billing history efficiently'
    },
    {
      icon: '🌐',
      title: 'Internet Cafe',
      description: 'Manage computer usage, internet sessions, and hourly billing'
    },
    {
      icon: '📊',
      title: 'Business Analytics',
      description: 'Real-time reports on revenue, services, and customer insights'
    }
  ];

  const pricing = [
    {
      name: 'Single Shop',
      price: '₹999',
      period: '/month',
      features: [
        '1 Business Location',
        'Up to 3 Operators',
        'Unlimited Customers',
        'All Services Included',
        'Basic Reports',
        'Email Support'
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Multi-Shop',
      price: '₹2,499',
      period: '/month',
      features: [
        'Up to 5 Locations',
        'Unlimited Operators',
        'Unlimited Customers',
        'Advanced Analytics',
        'Priority Support',
        'Custom Branding'
      ],
      popular: true,
      color: 'success'
    },
    {
      name: 'Enterprise',
      price: '₹4,999',
      period: '/month',
      features: [
        'Unlimited Locations',
        'Unlimited Users',
        'White-label Solution',
        'Dedicated Support',
        'Custom Features',
        'API Access'
      ],
      popular: false,
      color: 'info'
    }
  ];

  return (
    <>
      <ClientHeader />
      
      {/* Hero Section */}
      <section className="hero-gradient py-5 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="text-white">
              <h1 className="display-3 fw-bold mb-4">
                Manage Your Business Effortlessly
              </h1>
              <p className="lead mb-4">
                Streamline your business operations with our all-in-one platform.
                Manage billing, customers, inventory, services, and more.
              </p>
              <div className="d-flex gap-3">
                <Button
                  tag={Link}
                  to="/register"
                  color="light"
                  size="lg"
                  className="px-5"
                >
                  Get Started Free
                </Button>
                <Button
                  tag={Link}
                  to="/login"
                  color="dark text-white"
                  size="lg"
                >
                  Login Now
                </Button>
              </div>
            </Col>
            <Col lg="6" className="text-center mt-5 mt-lg-0">
              <div className="position-relative">
                {/* Animated Illustration */}
                <div className="illustration-container" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-100 h-auto">
                    {/* Background Circle */}
                    <circle cx="250" cy="200" r="180" fill="rgba(255,255,255,0.1)" />

                    {/* Computer Monitor */}
                    <rect x="150" y="120" width="200" height="140" rx="8" fill="#fff" />
                    <rect x="160" y="130" width="180" height="110" rx="4" fill="#667eea" opacity="0.2" />

                    {/* Screen Content - Dashboard */}
                    <rect x="170" y="140" width="70" height="8" rx="2" fill="#667eea" />
                    <rect x="170" y="155" width="50" height="6" rx="2" fill="#764ba2" opacity="0.5" />
                    <rect x="170" y="165" width="60" height="6" rx="2" fill="#764ba2" opacity="0.5" />

                    {/* Charts */}
                    <circle cx="300" cy="170" r="25" fill="none" stroke="#667eea" strokeWidth="4" strokeDasharray="80 20" style={{ animation: 'rotate 4s linear infinite', transformOrigin: '300px 170px' }} />
                    <rect x="260" y="200" width="8" height="30" rx="2" fill="#667eea" />
                    <rect x="275" y="190" width="8" height="40" rx="2" fill="#764ba2" />
                    <rect x="290" y="195" width="8" height="35" rx="2" fill="#667eea" />
                    <rect x="305" y="185" width="8" height="45" rx="2" fill="#764ba2" />
                    <rect x="320" y="200" width="8" height="30" rx="2" fill="#667eea" />

                    {/* Monitor Stand */}
                    <rect x="230" y="260" width="40" height="8" rx="2" fill="#fff" />
                    <rect x="200" y="268" width="100" height="4" rx="2" fill="#fff" />

                    {/* Floating Icons */}
                    <g style={{ animation: 'float 2s ease-in-out infinite' }}>
                      <circle cx="100" cy="100" r="20" fill="rgba(255,255,255,0.2)" />
                      <text x="100" y="110" fontSize="24" textAnchor="middle">💰</text>
                    </g>

                    <g style={{ animation: 'float 2.5s ease-in-out infinite' }}>
                      <circle cx="400" cy="120" r="20" fill="rgba(255,255,255,0.2)" />
                      <text x="400" y="130" fontSize="24" textAnchor="middle">📊</text>
                    </g>

                    <g style={{ animation: 'float 3s ease-in-out infinite' }}>
                      <circle cx="380" cy="280" r="20" fill="rgba(255,255,255,0.2)" />
                      <text x="380" y="290" fontSize="24" textAnchor="middle">👥</text>
                    </g>

                    <g style={{ animation: 'float 2.2s ease-in-out infinite' }}>
                      <circle cx="120" cy="300" r="20" fill="rgba(255,255,255,0.2)" />
                      <text x="120" y="310" fontSize="24" textAnchor="middle">🖨️</text>
                    </g>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Powerful Features</h2>
            <p className="lead text-muted">Everything you need to run a successful business</p>
          </div>
          <Row>
            {features.map((feature, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <CardBody className="text-center p-4">
                    <div className="fs-1 mb-3">{feature.icon}</div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Simple Pricing</h2>
            <p className="lead text-muted">Choose the plan that fits your business</p>
          </div>
          <Row>
            {pricing.map((plan, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <Card className={`h-100 border-0 shadow ${plan.popular ? 'border-success border-3' : ''}`}>
                  {plan.popular && (
                    <div className="text-center pt-3">
                      <Badge color="success" pill className="px-3 py-2">
                        ⭐ Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardBody className="text-center p-4">
                    <h4 className="fw-bold mb-3">{plan.name}</h4>
                    <div className="mb-4">
                      <span className="display-4 fw-bold">{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <span className="text-success me-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      color={plan.color}
                      size="lg"
                      block
                      tag={Link}
                      to="/register"
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Why Choose MZ-Desk?</h2>
              <p className="lead mb-4">
                Built specifically for Indian businesses, our platform understands your unique needs.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="text-primary fs-5 me-2">✓</span>
                  <strong>Indian Localization:</strong> INR currency, Aadhaar, PAN card support
                </li>
                <li className="mb-3">
                  <span className="text-primary fs-5 me-2">✓</span>
                  <strong>Easy to Use:</strong> Intuitive interface, no training required
                </li>
                <li className="mb-3">
                  <span className="text-primary fs-5 me-2">✓</span>
                  <strong>Secure & Reliable:</strong> Your data is safe with us
                </li>
                <li className="mb-3">
                  <span className="text-primary fs-5 me-2">✓</span>
                  <strong>24/7 Support:</strong> We're here to help whenever you need
                </li>
              </ul>
            </Col>
            <Col lg="6">
              <Card className="border-0 shadow-lg">
                <CardBody className="p-5 text-center">
                  <h3 className="mb-4">Ready to Get Started?</h3>
                  <p className="text-muted mb-4">
                    Join hundreds of businesses already using MZ-Desk
                  </p>
                  <Button
                    color="primary"
                    size="lg"
                    tag={Link}
                    to="/register"
                    className="px-5"
                  >
                    Start Free Trial
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ClientFooter />

      <style>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Landing;

