import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import ClientHeader from '../../components/ClientHeader';
import ClientFooter from '../../components/ClientFooter';

const Privacy = () => {
  return (
    <>
      <ClientHeader />

      {/* Hero Section */}
      <section className="hero-gradient-xs py-5 d-flex align-items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Privacy Policy</h1>
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
                    <h2 className="fw-bold mb-3">Introduction</h2>
                    <p className="text-muted">
                      MZ-Desk ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business management software and services.
                    </p>
                    <p className="text-muted">
                      Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">1. Information We Collect</h3>
                    
                    <h5 className="fw-semibold mt-4 mb-3">Personal Information</h5>
                    <p className="text-muted">We may collect personal information that you provide to us, including:</p>
                    <ul className="text-muted">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Business information (cafe name, address, GST number)</li>
                      <li>Account credentials (username, password)</li>
                      <li>Payment information (for subscription services)</li>
                      <li>Customer data (names, contact details, service usage)</li>
                    </ul>

                    <h5 className="fw-semibold mt-4 mb-3">Usage Data</h5>
                    <p className="text-muted">We automatically collect certain information when you use our services:</p>
                    <ul className="text-muted">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage statistics (features used, time spent, actions performed)</li>
                      <li>Log data (access times, pages viewed, errors encountered)</li>
                      <li>Performance data (system performance, response times)</li>
                    </ul>
                  </div>

                  {/* How We Use Your Information */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">2. How We Use Your Information</h3>
                    <p className="text-muted">We use the collected information for various purposes:</p>
                    <ul className="text-muted">
                      <li>To provide and maintain our services</li>
                      <li>To process your transactions and manage billing</li>
                      <li>To send you updates, notifications, and support messages</li>
                      <li>To improve and optimize our software</li>
                      <li>To detect, prevent, and address technical issues</li>
                      <li>To comply with legal obligations and regulations</li>
                      <li>To provide customer support and respond to inquiries</li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">3. Data Security</h3>
                    <p className="text-muted">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="text-muted">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Secure backup and disaster recovery procedures</li>
                      <li>Employee training on data protection</li>
                    </ul>
                    <p className="text-muted">
                      However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </p>
                  </div>

                  {/* Data Sharing */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">4. Data Sharing and Disclosure</h3>
                    <p className="text-muted">We may share your information in the following situations:</p>
                    <ul className="text-muted">
                      <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, hosting, analytics)</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                    </ul>
                    <p className="text-muted">
                      We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>

                  {/* Your Rights */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">5. Your Rights</h3>
                    <p className="text-muted">You have the following rights regarding your personal information:</p>
                    <ul className="text-muted">
                      <li><strong>Access:</strong> Request access to your personal data</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to processing of your personal data</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                    </ul>
                    <p className="text-muted">
                      To exercise these rights, please contact us at <a href="mailto:privacy@mz-desk.com">privacy@mz-desk.com</a>
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">6. Data Retention</h3>
                    <p className="text-muted">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">7. Cookies and Tracking Technologies</h3>
                    <p className="text-muted">
                      We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">8. Children's Privacy</h3>
                    <p className="text-muted">
                      Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                    </p>
                  </div>

                  {/* Changes to Policy */}
                  <div className="mb-5">
                    <h3 className="fw-bold mb-3">9. Changes to This Privacy Policy</h3>
                    <p className="text-muted">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mb-0">
                    <h3 className="fw-bold mb-3">10. Contact Us</h3>
                    <p className="text-muted">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="text-muted list-unstyled">
                      <li><i className="bi bi-envelope me-2 text-primary"></i>Email: <a href="mailto:privacy@mz-desk.com">privacy@mz-desk.com</a></li>
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

export default Privacy;

