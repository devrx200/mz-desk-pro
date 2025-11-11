import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const ClientFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="py-5">
        <Container>
          <Row>
            {/* Brand Section */}
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-gradient-primary text-white rounded-3 p-2 me-2 d-flex align-items-center justify-content-center icon-box">
                  <span className="fs-5">💰</span>
                </div>
                <h5 className="fw-bold mb-0 text-white">MZ-Desk</h5>
              </div>
              <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Complete business management solution for billing, customer management,
                and inventory. Built for Indian business owners.
              </p>
              <div className="d-flex gap-2">
                <Button color="primary" size="sm" className="rounded-circle icon-box">
                  <i className="bi bi-facebook"></i>
                </Button>
                <Button color="info" size="sm" className="rounded-circle icon-box">
                  <i className="bi bi-twitter"></i>
                </Button>
                <Button color="danger" size="sm" className="rounded-circle icon-box">
                  <i className="bi bi-instagram"></i>
                </Button>
                <Button color="success" size="sm" className="rounded-circle icon-box">
                  <i className="bi bi-whatsapp"></i>
                </Button>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg="2" md="6" className="mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-chevron-right me-1"></i> Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/features" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-chevron-right me-1"></i> Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/pricing" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-chevron-right me-1"></i> Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about-us" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-chevron-right me-1"></i> About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact-us" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-chevron-right me-1"></i> Contact Us
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Services */}
            <Col lg="3" md="6" className="mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3 text-white">Our Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-check-circle text-success me-2"></i> Billing Management
                  </span>
                </li>
                <li className="mb-2">
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-check-circle text-success me-2"></i> Customer Management
                  </span>
                </li>
                <li className="mb-2">
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <i className="bi bi-check-circle text-success me-2"></i> Inventory Management
                  </span>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg="3" md="6" className="mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3 text-white">Get In Touch</h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-envelope-fill text-primary me-2 mt-1"></i>
                    <div>
                      <a href="mailto:support@mz-desk.com" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        support@mz-desk.com
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-telephone-fill text-success me-2 mt-1"></i>
                    <div>
                      <a href="tel:+919876543210" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-geo-alt-fill text-danger me-2 mt-1"></i>
                    <div>
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Near Dubsa Talab Raipura Chowk, Raipur C.G. 492013
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="border-top py-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1) !important' }}>
        <Container>
          <Row className="align-items-center">
            <Col md="6" className="text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Product Of <a  href="http://marutiitzone.com" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none fw-bold">Maruti IT Zone</a>
                {' '} © {currentYear} <span className="text-white fw-semibold">MZ-Desk</span>. All Rights Reserved.
              </p>
            </Col>
            <Col md="6" className="text-center text-md-end">
              <Link to="/privacy" className="text-decoration-none me-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-decoration-none me-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Sitemap
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default ClientFooter;

