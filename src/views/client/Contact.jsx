import { useState } from 'react';
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
  Button,
  Alert
} from 'reactstrap';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <ClientHeader />
      
      {/* Hero Section */}
      <section className="hero-gradient-sm py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Contact Us</h1>
            <p className="lead">
              We're here to help! Get in touch with our team
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="8" className="mb-4">
              <Card className="border-0 shadow-lg">
                <CardBody className="p-5">
                  <h3 className="fw-bold mb-4">Send us a Message</h3>
                  
                  {submitted && (
                    <Alert color="success">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="name" className="fw-bold">Full Name</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="email" className="fw-bold">Email Address</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="phone" className="fw-bold">Phone Number</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="subject" className="fw-bold">Subject</Label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What is this about?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="message" className="fw-bold">Message</Label>
                      <Input
                        type="textarea"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <Button 
                      color="primary" 
                      size="lg" 
                      block 
                      type="submit"
                      className="mt-3"
                    >
                      Send Message
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col lg="4">
              <Card className="border-0 shadow-sm mb-4">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">📧 Email</h5>
                  <p className="text-muted mb-0">support@mz-desk.com</p>
                  <p className="text-muted">sales@mz-desk.com</p>
                </CardBody>
              </Card>

              <Card className="border-0 shadow-sm mb-4">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">📞 Phone</h5>
                  <p className="text-muted mb-0">+91 98765 43210</p>
                  <p className="text-muted">+91 98765 43211</p>
                  <p className="text-muted small">Mon-Sat: 9 AM - 6 PM IST</p>
                </CardBody>
              </Card>

              <Card className="border-0 shadow-sm mb-4">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">📍 Address</h5>
                  <p className="text-muted mb-0">
                    MZ-Desk<br />
                    123 Tech Park<br />
                    Mumbai, Maharashtra<br />
                    India - 400001
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card className="border-0 shadow-sm card-gradient">
                <CardBody className="p-4 text-white text-center">
                  <h5 className="fw-bold mb-3">Need Immediate Help?</h5>
                  <p className="mb-3">Chat with our support team</p>
                  <Button color="light" size="lg" block>
                    Start Live Chat
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
          </div>
          <Row>
            <Col lg="6" className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">How do I get started?</h5>
                  <p className="text-muted mb-0">
                    Simply register for a free account, and you can start using 
                    all features immediately. No credit card required for trial.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">What payment methods do you accept?</h5>
                  <p className="text-muted mb-0">
                    We accept all major credit/debit cards, UPI, net banking, 
                    and digital wallets for your convenience.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">Is my data secure?</h5>
                  <p className="text-muted mb-0">
                    Yes! We use industry-standard encryption and security measures 
                    to protect your data. Your information is safe with us.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-4">
                  <h5 className="fw-bold mb-3">Can I cancel anytime?</h5>
                  <p className="text-muted mb-0">
                    Absolutely! There are no long-term contracts. You can cancel 
                    your subscription anytime with no questions asked.
                  </p>
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

export default Contact;

