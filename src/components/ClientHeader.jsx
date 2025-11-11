import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody
} from 'reactstrap';

const ClientHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        color="dark"
        light
        expand="lg"
        className={`sticky-top navbar-custom ${scrolled ? 'shadow py-2 scrolled' : 'shadow-sm py-3'}`}
      >
        <Container className='d-flex '>
          {/* Brand Logo */}
          <NavbarBrand tag={Link} to="/" className="fw-bold d-flex align-items-center navbar-brand-custom">
            <div className={`bg-gradient-primary text-white rounded-3 d-flex align-items-center justify-content-center me-2 logo-icon ${scrolled ? 'scrolled' : ''}`}>
              <span className={scrolled ? 'fs-6' : 'fs-4'}>💰</span>
            </div>
            <div className="d-flex flex-column">
              <span className={`text-dark fw-bold lh-sm ${scrolled ? 'fs-5' : 'fs-4'}`}>
                <span className="gradient-text">MZ-Desk</span>
              </span>
              <small className="text-white d-none d-md-block brand-subtitle">
                Business Management System
              </small>
            </div>
          </NavbarBrand>

          {/* Mobile Toggle */}
          <NavbarToggler onClick={toggle} className="border-0 d-lg-none bg-white rounded">
            <i className="bi bi-list fs-3"></i>
          </NavbarToggler>

          {/* Desktop Navigation Menu */}
          <div className="d-none d-lg-flex ms-auto align-items-center nav-gap">
            {/* Home */}
            <Link
              to="/"
              className={`fw-semibold px-3 py-2 rounded  nav-link-custom text-decoration-none ${isActive('/') ? 'active rounded border border-1 border-white' : ''}`}
            >
              <i className="bi bi-house-door-fill me-2 text-white"></i>
              <span className='text-white'>Home</span>
            </Link>

            {/* Features */}
            <Link
              to="/features"
              className={`fw-semibold px-3 py-2 rounded nav-link-custom text-decoration-none ${isActive('/features') ? 'active rounded border border-1 border-white' : ''}`}
            >
              <i className="bi bi-stars me-2 text-white"></i>
              <span className='text-white'>Features</span>
            </Link>

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`fw-semibold px-3 py-2 rounded nav-link-custom text-decoration-none ${isActive('/pricing') ? 'active rounded border border-1 border-white' : ''}`}
            >
              <i className="bi bi-tag-fill me-2 text-white"></i>
              <span className='text-white'>Pricing</span>
            </Link>

            {/* About */}
            <Link
              to="/about-us"
              className={`fw-semibold px-3 py-2  nav-link-custom text-decoration-none ${isActive('/about-us') ? 'active rounded border border-1 border-white' : ''}`}
            >
              <i className="bi bi-info-circle-fill me-2 text-white"></i>
              <span className='text-white'>About-Us</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact-us"
              className={`fw-semibold px-3 py-2 rounded nav-link-custom text-decoration-none ${isActive('/contact-us') ? 'active rounded border border-1 border-white' : ''}`}
            >
              <i className="bi bi-envelope-fill me-2 text-white"></i>
              <span className='text-white'>Contact-Us</span>
            </Link>

            {/* Divider */}
            <div className="mx-2 nav-divider"></div>

            {/* Login Button */}
            <Button
              tag={Link}
              to="/login"
              color="primary"
              outline
              className="px-4 py-2 fw-semibold btn-custom"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              <span className='text-white'>Login</span>
            </Button>

            {/* Register Button */}
            <Button
              tag={Link}
              to="/register"
              className="bg-gradient-primary border-0 px-4 py-2 fw-semibold btn-custom-primary"
            >
              <i className="bi bi-rocket-takeoff-fill me-2"></i>
              <span className='text-white'>Register</span>
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Mobile Sidebar Menu */}
      <Offcanvas isOpen={isOpen} toggle={toggle} direction="start" className="mobile-sidebar">
        <OffcanvasHeader toggle={toggle} className="border-bottom">
          <div className="d-flex align-items-center">
            <div className="bg-gradient-primary text-white rounded-3 p-2 me-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              <span className="fs-5">💰</span>
            </div>
            <div>
              <h5 className="mb-0 fw-bold py-0 my-0">MZ-Desk</h5>
              <small className="text-muted my-0 py-0 brand-subtitle">Business Management System</small>
            </div>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody className="d-flex flex-column p-0">
          {/* Menu Items */}
          <Nav vertical className="flex-grow-1 p-3">
            <NavItem className="mb-2">
              <NavLink
                tag={Link}
                to="/"
                onClick={toggle}
                className={`d-flex align-items-center px-3 py-3 rounded mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              >
                <i className="bi bi-house-door-fill fs-5 me-3"></i>
                <span className="fw-semibold">Home</span>
              </NavLink>
            </NavItem>

            <NavItem className="mb-2">
              <NavLink
                tag={Link}
                to="/features"
                onClick={toggle}
                className={`d-flex align-items-center px-3 py-3 rounded mobile-nav-link ${isActive('/features') ? 'active' : ''}`}
              >
                <i className="bi bi-stars fs-5 me-3"></i>
                <span className="fw-semibold">Features</span>
              </NavLink>
            </NavItem>

            <NavItem className="mb-2">
              <NavLink
                tag={Link}
                to="/pricing"
                onClick={toggle}
                className={`d-flex align-items-center px-3 py-3 rounded mobile-nav-link ${isActive('/pricing') ? 'active' : ''}`}
              >
                <i className="bi bi-tag-fill fs-5 me-3"></i>
                <span className="fw-semibold">Pricing</span>
              </NavLink>
            </NavItem>

            <NavItem className="mb-2">
              <NavLink
                tag={Link}
                to="/about-us"
                onClick={toggle}
                className={`d-flex align-items-center px-3 py-3 rounded mobile-nav-link ${isActive('/about-us') ? 'active' : ''}`}
              >
                <i className="bi bi-info-circle-fill fs-5 me-3"></i>
                <span className="fw-semibold">About</span>
              </NavLink>
            </NavItem>

            <NavItem className="mb-2">
              <NavLink
                tag={Link}
                to="/contact-us"
                onClick={toggle}
                className={`d-flex align-items-center px-3 py-3 rounded mobile-nav-link ${isActive('/contact-us') ? 'active' : ''}`}
              >
                <i className="bi bi-envelope-fill fs-5 me-3"></i>
                <span className="fw-semibold">Contact</span>
              </NavLink>
            </NavItem>
          </Nav>

          {/* Bottom Buttons */}
          <div className="p-3 border-top bg-light">
            <Button
              tag={Link}
              to="/login"
              onClick={toggle}
              color="primary"
              outline
              className="w-100 mb-2 py-2 fw-semibold d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              <span>Login</span>
            </Button>
            <Button
              tag={Link}
              to="/register"
              color="primary"
              onClick={toggle}
              className="w-100 bg-white border-0 py-2 fw-semibold d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-rocket-takeoff-fill me-2 text-white"></i>
              <span>Register</span>
            </Button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default ClientHeader;

