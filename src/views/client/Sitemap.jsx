import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: 'bi-house-door',
      color: 'primary',
      links: [
        { name: 'Home', path: '/', description: 'Landing page and overview' },
        { name: 'Features', path: '/features', description: 'Explore all features' },
        { name: 'Pricing', path: '/pricing', description: 'View pricing plans' },
        { name: 'About Us', path: '/about-us', description: 'Learn about MZ-Desk' },
        { name: 'Contact Us', path: '/contact-us', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'Account',
      icon: 'bi-person-circle',
      color: 'success',
      links: [
        { name: 'Login', path: '/login', description: 'Sign in to your account' },
        { name: 'Register', path: '/register', description: 'Create a new account' }
      ]
    },
    {
      title: 'Dashboard',
      icon: 'bi-speedometer2',
      color: 'info',
      links: [
        { name: 'Admin Dashboard', path: '/admin/index', description: 'Admin control panel' },
        { name: 'Owner Dashboard', path: '/owner/index', description: 'Owner management panel' },
        { name: 'Operator Dashboard', path: '/operator/index', description: 'Operator work panel' }
      ]
    },
    {
      title: 'Legal',
      icon: 'bi-shield-check',
      color: 'warning',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation map' }
      ]
    }
  ];

  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-xs py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Sitemap</h1>
            <p className="lead">
              Navigate through all pages of MZ-Desk
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <Container>
          {/* Introduction */}
          <Row className="mb-5">
            <Col lg="8" className="mx-auto text-center">
              <h2 className="fw-bold mb-3">Quick Navigation</h2>
              <p className="text-muted lead">
                Find all the pages and sections of MZ-Desk in one place. Click on any link below to navigate directly to that page.
              </p>
            </Col>
          </Row>

          {/* Sitemap Sections */}
          <Row>
            {sitemapSections.map((section, index) => (
              <Col lg="6" className="mb-4" key={index}>
                <Card className="border-0 shadow-sm h-100 hover-lift">
                  <CardBody className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`bg-${section.color} bg-gradient text-white rounded-3 p-3 me-3 icon-box`}>
                        <i className={`bi ${section.icon} fs-4`}></i>
                      </div>
                      <h4 className="fw-bold mb-0">{section.title}</h4>
                    </div>

                    <ListGroup flush>
                      {section.links.map((link, linkIndex) => (
                        <ListGroupItem
                          key={linkIndex}
                          className="border-0 px-0 py-3"
                          style={{ borderBottom: linkIndex < section.links.length - 1 ? '1px solid var(--border-color)' : 'none' }}
                        >
                          <Link 
                            to={link.path} 
                            className="text-decoration-none d-flex align-items-start"
                          >
                            <i className="bi bi-arrow-right-circle text-primary me-3 mt-1"></i>
                            <div className="flex-grow-1">
                              <div className="fw-semibold text-dark mb-1">{link.name}</div>
                              <small className="text-muted">{link.description}</small>
                            </div>
                          </Link>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Information */}
          <Row className="mt-5">
            <Col lg="10" className="mx-auto">
              <Card className="border-0 shadow-sm card-gradient">
                <CardBody className="p-5 text-center text-white">
                  <h3 className="fw-bold mb-3">Need Help Finding Something?</h3>
                  <p className="lead mb-4">
                    Can't find what you're looking for? Our support team is here to help!
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/contact-us" className="btn btn-light btn-lg px-5">
                      <i className="bi bi-envelope me-2"></i>
                      Contact Support
                    </Link>
                    <Link to="/" className="btn btn-outline-light btn-lg px-5">
                      <i className="bi bi-house me-2"></i>
                      Back to Home
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Quick Stats */}
          <Row className="mt-5">
            <Col lg="3" md="6" className="mb-4">
              <Card className="border-0 shadow-sm text-center h-100">
                <CardBody className="p-4">
                  <div className="bg-primary bg-gradient text-white rounded-circle mx-auto mb-3 icon-circle">
                    <i className="bi bi-file-text fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-2">15+</h3>
                  <p className="text-muted mb-0">Total Pages</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <Card className="border-0 shadow-sm text-center h-100">
                <CardBody className="p-4">
                  <div className="bg-success bg-gradient text-white rounded-circle mx-auto mb-3 icon-circle">
                    <i className="bi bi-grid-3x3 fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-2">4</h3>
                  <p className="text-muted mb-0">Main Sections</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <Card className="border-0 shadow-sm text-center h-100">
                <CardBody className="p-4">
                  <div className="bg-info bg-gradient text-white rounded-circle mx-auto mb-3 icon-circle">
                    <i className="bi bi-speedometer2 fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-2">3</h3>
                  <p className="text-muted mb-0">Dashboards</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <Card className="border-0 shadow-sm text-center h-100">
                <CardBody className="p-4">
                  <div className="bg-warning bg-gradient text-white rounded-circle mx-auto mb-3 icon-circle">
                    <i className="bi bi-shield-check fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-2">3</h3>
                  <p className="text-muted mb-0">Legal Pages</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ClientFooter />

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }
      `}</style>
    </>
  );
};

export default Sitemap;

