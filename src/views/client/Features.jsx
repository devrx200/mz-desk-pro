import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Features = () => {
  const features = [
    {
      icon: '🆔',
      title: 'Aadhaar Services',
      description: 'Complete Aadhaar enrollment, update, and correction services with secure data handling',
      details: [
        'New Aadhaar enrollment',
        'Update demographic details',
        'Biometric updates',
        'Address corrections'
      ]
    },
    {
      icon: '🖨️',
      title: 'Printing & Scanning',
      description: 'High-quality printing, photocopying, and scanning services for all document types',
      details: [
        'Color & B/W printing',
        'Document scanning',
        'Photocopying services',
        'Lamination available'
      ]
    },
    {
      icon: '💳',
      title: 'Government Forms',
      description: 'PAN card, passport, and other government form filling assistance',
      details: [
        'PAN card applications',
        'Passport form filling',
        'Voter ID services',
        'Ration card assistance'
      ]
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'Track customer visits, services, and billing history efficiently',
      details: [
        'Customer database',
        'Service history tracking',
        'Automated billing',
        'Payment records'
      ]
    },
    {
      icon: '🌐',
      title: 'Service Management',
      description: 'Manage services, sessions, and hourly billing for any business',
      details: [
        'Session management',
        'Hourly rate billing',
        'Service monitoring',
        'Usage analytics'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Reports',
      description: 'Comprehensive reports and analytics for business insights',
      details: [
        'Revenue reports',
        'Service analytics',
        'Customer insights',
        'Performance metrics'
      ]
    },
    {
      icon: '💰',
      title: 'Billing System',
      description: 'Automated billing with GST compliance and invoice generation',
      details: [
        'GST-compliant invoices',
        'Multiple payment modes',
        'Discount management',
        'Receipt printing'
      ]
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Bank-grade security with regular backups and data encryption',
      details: [
        'Data encryption',
        'Regular backups',
        'Role-based access',
        'Audit logs'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Access your dashboard from any device - desktop, tablet, or mobile',
      details: [
        'Responsive design',
        'Mobile-friendly UI',
        'Cross-platform support',
        'Real-time sync'
      ]
    }
  ];

  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-sm py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Powerful Features</h1>
            <p className="lead">
              Everything you need to run a successful business
            </p>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Complete Solution for Your Business</h2>
            <p className="lead text-muted">
              Manage all aspects of your business with our comprehensive feature set
            </p>
          </div>

          <Row>
            {features.map((feature, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <CardBody className="p-4">
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-3">{feature.icon}</div>
                      <h5 className="fw-bold mb-3">{feature.title}</h5>
                      <p className="text-muted mb-4">{feature.description}</p>
                    </div>
                    <ul className="list-unstyled">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="mb-2">
                          <span className="text-success me-2">✓</span>
                          <span className="text-muted">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Card className="border-0 shadow-lg">
                <CardBody className="p-5 text-center">
                  <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
                  <p className="lead text-muted mb-4">
                    Join hundreds of business owners who trust MZ-Desk
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Button
                      color="primary"
                      size="lg"
                      tag={Link}
                      to="/register"
                      className="px-5"
                    >
                      Start Free Trial
                    </Button>
                    <Button
                      color="outline-primary"
                      size="lg"
                      tag={Link}
                      to="/pricing"
                      className="px-5"
                    >
                      View Pricing
                    </Button>
                  </div>
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

export default Features;

