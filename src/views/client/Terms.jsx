import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Terms = () => {
  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-xs py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Terms of Service</h1>
            <p className="lead">
              Last updated: January 10, 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <Card className="border-0 shadow-sm">
                <CardBody className="p-5">
                  {/* Introduction */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3">Agreement to Terms</h2>
                    <p className="text-muted">
                      These Terms of Service ("Terms") govern your use of MZ-Desk business management software and services ("Service"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                  </div>

                  {/* Accounts */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">1. Accounts and Registration</h3>
                    <p className="text-muted">
                      When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
                    </p>
                    <ul className="text-muted">
                      <li>You are responsible for safeguarding your account password</li>
                      <li>You must not share your account credentials with others</li>
                      <li>You are responsible for all activities under your account</li>
                      <li>You must notify us immediately of any unauthorized access</li>
                      <li>We reserve the right to refuse service or terminate accounts</li>
                    </ul>
                  </div>

                  {/* Subscription and Payment */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">2. Subscription and Payment</h3>
                    
                    <h5 className="fw-semibold mt-4 mb-3">Subscription Plans</h5>
                    <p className="text-muted">
                      MZ-Desk offers various subscription plans with different features and pricing. You can choose the plan that best suits your needs.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Billing</h5>
                    <ul className="text-muted">
                      <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                      <li>All fees are in Indian Rupees (INR) unless otherwise stated</li>
                      <li>Payment is due immediately upon subscription</li>
                      <li>We accept various payment methods including credit cards, debit cards, and UPI</li>
                      <li>Fees are non-refundable except as required by law</li>
                    </ul>

                    <h5 className="fw-semibold mt-4 mb-3">Auto-Renewal</h5>
                    <p className="text-muted">
                      Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel your subscription at any time from your account settings.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Price Changes</h5>
                    <p className="text-muted">
                      We reserve the right to modify subscription fees. We will provide you with reasonable notice of any price changes. Continued use of the Service after the price change constitutes your agreement to pay the modified amount.
                    </p>
                  </div>

                  {/* Acceptable Use */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">3. Acceptable Use Policy</h3>
                    <p className="text-muted">You agree not to use the Service to:</p>
                    <ul className="text-muted">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights of others</li>
                      <li>Transmit harmful code, viruses, or malware</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt the Service</li>
                      <li>Use the Service for any illegal or unauthorized purpose</li>
                      <li>Harass, abuse, or harm other users</li>
                      <li>Collect or store personal data of other users without consent</li>
                    </ul>
                  </div>

                  {/* Intellectual Property */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">4. Intellectual Property Rights</h3>
                    
                    <h5 className="fw-semibold mt-4 mb-3">Our Rights</h5>
                    <p className="text-muted">
                      The Service and its original content, features, and functionality are owned by MZ-Desk and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Your Rights</h5>
                    <p className="text-muted">
                      You retain all rights to the data you input into the Service. By using the Service, you grant us a license to use, store, and process your data solely for the purpose of providing the Service to you.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">License to Use</h5>
                    <p className="text-muted">
                      We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your business purposes, subject to these Terms.
                    </p>
                  </div>

                  {/* Data and Privacy */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">5. Data and Privacy</h3>
                    <p className="text-muted">
                      Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                    </p>
                    <ul className="text-muted">
                      <li>You are responsible for the accuracy of data you input</li>
                      <li>You must comply with applicable data protection laws</li>
                      <li>You must obtain necessary consents from your customers</li>
                      <li>We implement security measures to protect your data</li>
                      <li>You are responsible for backing up your critical data</li>
                    </ul>
                  </div>

                  {/* Service Availability */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">6. Service Availability and Support</h3>
                    
                    <h5 className="fw-semibold mt-4 mb-3">Uptime</h5>
                    <p className="text-muted">
                      We strive to maintain high availability of the Service but do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Support</h5>
                    <p className="text-muted">
                      We provide customer support via email and phone during business hours. Premium support options may be available with certain subscription plans.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Updates</h5>
                    <p className="text-muted">
                      We regularly update the Service with new features, improvements, and bug fixes. Some updates may be automatic, while others may require your action.
                    </p>
                  </div>

                  {/* Termination */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">7. Termination</h3>
                    
                    <h5 className="fw-semibold mt-4 mb-3">By You</h5>
                    <p className="text-muted">
                      You may terminate your account at any time by contacting us or using the account cancellation feature. Upon termination, your right to use the Service will immediately cease.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">By Us</h5>
                    <p className="text-muted">
                      We may terminate or suspend your account immediately, without prior notice, if you breach these Terms or for any other reason at our sole discretion.
                    </p>

                    <h5 className="fw-semibold mt-4 mb-3">Effect of Termination</h5>
                    <ul className="text-muted">
                      <li>You will lose access to the Service and your data</li>
                      <li>We may delete your data after a reasonable period</li>
                      <li>You remain liable for any fees incurred before termination</li>
                      <li>Provisions that should survive termination will remain in effect</li>
                    </ul>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">8. Limitation of Liability</h3>
                    <p className="text-muted">
                      To the maximum extent permitted by law, MZ-Desk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.
                    </p>
                    <p className="text-muted">
                      Our total liability to you for all claims arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">9. Disclaimer of Warranties</h3>
                    <p className="text-muted">
                      The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
                    </p>
                    <ul className="text-muted">
                      <li>The Service will be uninterrupted or error-free</li>
                      <li>Defects will be corrected</li>
                      <li>The Service is free of viruses or harmful components</li>
                      <li>Results obtained from the Service will be accurate or reliable</li>
                    </ul>
                  </div>

                  {/* Indemnification */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">10. Indemnification</h3>
                    <p className="text-muted">
                      You agree to indemnify and hold harmless MZ-Desk and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                    </p>
                    <ul className="text-muted">
                      <li>Your use of the Service</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any rights of another party</li>
                      <li>Your violation of applicable laws or regulations</li>
                    </ul>
                  </div>

                  {/* Governing Law */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">11. Governing Law and Jurisdiction</h3>
                    <p className="text-muted">
                      These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">12. Changes to Terms</h3>
                    <p className="text-muted">
                      We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mb-0">
                    <h3 className="fw-bold mb-3">13. Contact Us</h3>
                    <p className="text-muted">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <ul className="text-muted list-unstyled">
                      <li><i className="bi bi-envelope me-2 text-primary"></i>Email: <a href="mailto:support@mz-desk.com">support@mz-desk.com</a></li>
                      <li><i className="bi bi-phone me-2 text-primary"></i>Phone: +91 98765 43210</li>
                      <li><i className="bi bi-geo-alt me-2 text-primary"></i>Address: MZ-Desk, 123 Tech Park, Mumbai, Maharashtra, India - 400001</li>
                    </ul>
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

export default Terms;

