import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Pricing = () => {
  const plans = [
    {
      name: 'Single Shop',
      price: '₹999',
      period: '/month',
      description: 'Perfect for single business location',
      features: [
        '1 Business Location',
        'Up to 3 Operators',
        'Unlimited Customers',
        'All Services Included',
        'Basic Reports & Analytics',
        'Email Support',
        'Mobile App Access',
        'Data Backup'
      ],
      popular: false,
      color: 'primary',
      buttonText: 'Get Started'
    },
    {
      name: 'Multi-Shop',
      price: '₹2,499',
      period: '/month',
      description: 'Best for growing business chains',
      features: [
        'Up to 5 Locations',
        'Unlimited Operators',
        'Unlimited Customers',
        'Advanced Analytics',
        'Priority Support',
        'Custom Branding',
        'API Access',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'success',
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '₹4,999',
      period: '/month',
      description: 'For large business networks',
      features: [
        'Unlimited Locations',
        'Unlimited Users',
        'White-label Solution',
        'Dedicated Support 24/7',
        'Custom Features',
        'API Access & Webhooks',
        'Advanced Security',
        'On-premise Deployment'
      ],
      popular: false,
      color: 'info',
      buttonText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely! There are no long-term contracts. You can cancel your subscription anytime with no questions asked.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Get 2 months free when you pay annually. That\'s a 16% discount on all plans.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! We use bank-level encryption and store all data securely. Regular backups ensure your data is never lost.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can change your plan anytime. Upgrades are instant, and downgrades take effect at the next billing cycle.'
    }
  ];

  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-sm py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Simple Pricing</h1>
            <p className="lead">
              Choose the plan that fits your business needs
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Transparent Pricing</h2>
            <p className="lead text-muted">
              No hidden fees. No surprises. Just simple, honest pricing.
            </p>
          </div>

          <Row className="justify-content-center">
            {plans.map((plan, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <Card className={`h-100 border-0 shadow-lg ${plan.popular ? 'border-success border-3' : ''} position-relative`}>
                  {plan.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <Badge color="success" pill className="px-4 py-2 shadow">
                        ⭐ Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardBody className="p-4 text-center">
                    <h3 className="fw-bold mb-2">{plan.name}</h3>
                    <p className="text-muted small mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="display-4 fw-bold text-primary">{plan.price}</span>
                      <span className="text-muted fs-5">{plan.period}</span>
                    </div>

                    <ListGroup flush className="mb-4 text-start">
                      {plan.features.map((feature, idx) => (
                        <ListGroupItem key={idx} className="border-0 px-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{feature}</span>
                        </ListGroupItem>
                      ))}
                    </ListGroup>

                    <Button
                      color={plan.color}
                      size="lg"
                      block
                      tag={Link}
                      to="/register"
                      className="py-3 fw-semibold"
                    >
                      {plan.buttonText}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <p className="text-muted mb-3">
              <i className="bi bi-shield-check text-success me-2"></i>
              All plans include 14-day free trial • No credit card required
            </p>
            <p className="text-muted">
              <i className="bi bi-award text-warning me-2"></i>
              Save 16% with annual billing
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted">
              Got questions? We've got answers.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg="8">
              {faqs.map((faq, index) => (
                <Card className="border-0 shadow-sm mb-3" key={index}>
                  <CardBody className="p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="bi bi-question-circle text-primary me-2"></i>
                      {faq.question}
                    </h5>
                    <p className="text-muted mb-0">{faq.answer}</p>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>

          <div className="text-center mt-5">
            <p className="text-muted mb-3">Still have questions?</p>
            <Button
              color="primary"
              size="lg"
              tag={Link}
              to="/contact-us"
              className="px-5"
            >
              Contact Our Team
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg="8" className="text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">Ready to Transform Your Business?</h2>
              <p className="lead mb-0">
                Start your 14-day free trial today. No credit card required.
              </p>
            </Col>
            <Col lg="4" className="text-center text-lg-end">
              <Button
                color="light"
                size="lg"
                tag={Link}
                to="/register"
                className="px-5 py-3 fw-semibold"
              >
                Get Started Free
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <ClientFooter />
    </>
  );
};

export default Pricing;

