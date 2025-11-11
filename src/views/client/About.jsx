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

const About = () => {
  const team = [
    {
      name: 'Rishi Lomash',
      role: 'Founder & CEO',
      icon: '👨‍💼',
      description: 'Passionate about helping businesses grow and succeed'
    },
    {
      name: 'Tech Team',
      role: 'Development',
      icon: '💻',
      description: 'Building cutting-edge solutions for business management'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      icon: '🎧',
      description: '24/7 support to ensure your success'
    }
  ];

  return (
    <>
      <ClientHeader />
      
      {/* Hero Section */}
      <section className="hero-gradient-md py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">About MZ-Desk</h1>
            <p className="lead">
              Empowering businesses across India with modern management tools
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                To revolutionize business management in India by providing
                affordable, easy-to-use, and powerful software solutions.
              </p>
              <p className="text-muted">
                We understand the unique challenges faced by business owners -
                from managing multiple services, inventory, and billing,
                to tracking customers and generating reports.
                Our platform is built to address all your business needs.
              </p>
            </Col>
            <Col lg="6">
              <Card className="border-0 shadow-lg">
                <CardBody className="p-5">
                  <h4 className="fw-bold mb-4">Why We Built This</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <span className="text-primary fs-5 me-2">✓</span>
                      Simplify daily operations
                    </li>
                    <li className="mb-3">
                      <span className="text-primary fs-5 me-2">✓</span>
                      Increase revenue tracking
                    </li>
                    <li className="mb-3">
                      <span className="text-primary fs-5 me-2">✓</span>
                      Better customer management
                    </li>
                    <li className="mb-3">
                      <span className="text-primary fs-5 me-2">✓</span>
                      Real-time business insights
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Team</h2>
            <p className="lead text-muted">Dedicated professionals working for your success</p>
          </div>
          <Row>
            {team.map((member, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <CardBody className="p-4">
                    <div className="fs-1 mb-3">{member.icon}</div>
                    <h5 className="fw-bold mb-2">{member.name}</h5>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted mb-0">{member.description}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md="3" className="mb-4">
              <div className="display-4 fw-bold text-primary">500+</div>
              <p className="text-muted">Active Businesses</p>
            </Col>
            <Col md="3" className="mb-4">
              <div className="display-4 fw-bold text-primary">10K+</div>
              <p className="text-muted">Daily Transactions</p>
            </Col>
            <Col md="3" className="mb-4">
              <div className="display-4 fw-bold text-primary">50K+</div>
              <p className="text-muted">Customers Served</p>
            </Col>
            <Col md="3" className="mb-4">
              <div className="display-4 fw-bold text-primary">99.9%</div>
              <p className="text-muted">Uptime</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Card className="border-0 shadow-lg card-gradient">
            <CardBody className="p-5 text-center text-white">
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="lead mb-4">
                Join hundreds of businesses already using MZ-Desk
              </p>
              <div className="d-flex gap-3 justify-content-center">
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
                  color="outline-light"
                  size="lg"
                >
                  Login
                </Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </section>

      <ClientFooter />
    </>
  );
};

export default About;

