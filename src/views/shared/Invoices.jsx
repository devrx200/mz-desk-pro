import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  ButtonGroup
} from 'reactstrap';

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    { id: 'INV-001', customer: 'Rahul Verma', customerId: 1, date: '2024-11-07', amount: 250, status: 'paid', services: 'Aadhaar, Print x5', paymentMethod: 'Cash' },
    { id: 'INV-002', customer: 'Priya Singh', customerId: 2, date: '2024-11-07', amount: 150, status: 'pending', services: 'PAN Card', paymentMethod: 'UPI' },
    { id: 'INV-003', customer: 'Amit Kumar', customerId: 3, date: '2024-11-06', amount: 320, status: 'paid', services: 'Internet 2hrs, Print x10', paymentMethod: 'Card' },
    { id: 'INV-004', customer: 'Sneha Patel', customerId: 4, date: '2024-11-06', amount: 180, status: 'overdue', services: 'Passport Form', paymentMethod: 'Cash' },
    { id: 'INV-005', customer: 'Raj Malhotra', customerId: 5, date: '2024-11-05', amount: 95, status: 'paid', services: 'Photocopy x20', paymentMethod: 'UPI' },
  ]);

  const [modal, setModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [newInvoice, setNewInvoice] = useState({
    customer: '',
    services: '',
    amount: '',
    paymentMethod: 'Cash',
    status: 'pending'
  });

  const toggleModal = () => setModal(!modal);
  const toggleViewModal = () => setViewModal(!viewModal);

  const handleAddInvoice = () => {
    const invoice = {
      ...newInvoice,
      id: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      amount: parseFloat(newInvoice.amount)
    };
    setInvoices([...invoices, invoice]);
    setNewInvoice({ customer: '', services: '', amount: '', paymentMethod: 'Cash', status: 'pending' });
    toggleModal();
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    toggleViewModal();
  };

  const handleDeleteInvoice = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      setInvoices(invoices.filter(inv => inv.id !== id));
    }
  };

  const filteredInvoices = invoices.filter(inv =>
    filterStatus === 'all' || inv.status === filterStatus
  );

  const getStatusColor = (status) => {
    const colors = {
      paid: 'success',
      pending: 'warning',
      overdue: 'danger'
    };
    return colors[status] || 'secondary';
  };

  const totalAmount = filteredInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = filteredInvoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = filteredInvoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <Container fluid className="p-0">
      {/* Page Header */}
      <div className="mb-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        borderRadius: '0 0 1rem 1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <Row className="align-items-center">
          <Col xs="12" md="8">
            <h1 className="text-white mb-2 d-flex align-items-center">
              <i className="bi bi-receipt-cutoff me-3" style={{ fontSize: '2.5rem' }}></i>
              Invoice Management
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              Create, manage, and track customer invoices and payments
            </p>
          </Col>
          <Col xs="12" md="4" className="text-md-end mt-3 mt-md-0">
            <Button color="light" size="lg" onClick={toggleModal} className="shadow">
              <i className="bi bi-plus-circle-fill me-2"></i>
              Create Invoice
            </Button>
          </Col>
        </Row>
      </div>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md="4">
          <Card className="shadow-sm" style={{ borderLeft: '4px solid #5e72e4' }}>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Total Amount</p>
                  <h3 className="mb-0 text-primary">₹{totalAmount}</h3>
                </div>
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                  }}>
                  <i className="bi bi-currency-rupee" style={{ fontSize: '1.5rem' }}></i>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow-sm" style={{ borderLeft: '4px solid #2dce89' }}>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Paid Amount</p>
                  <h3 className="mb-0 text-success">₹{paidAmount}</h3>
                </div>
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #2dce89 0%, #2dcecc 100%)',
                    color: 'white'
                  }}>
                  <i className="bi bi-check-circle-fill" style={{ fontSize: '1.5rem' }}></i>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow-sm" style={{ borderLeft: '4px solid #fb6340' }}>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Pending Amount</p>
                  <h3 className="mb-0 text-warning">₹{pendingAmount}</h3>
                </div>
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #fb6340 0%, #fbb140 100%)',
                    color: 'white'
                  }}>
                  <i className="bi bi-clock-history" style={{ fontSize: '1.5rem' }}></i>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Filter Section */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <Label className="mb-0 me-3">
                  <i className="bi bi-funnel me-2"></i>
                  Filter by Status:
                </Label>
                <ButtonGroup>
                  <Button
                    color={filterStatus === 'all' ? 'primary' : 'outline-primary'}
                    onClick={() => setFilterStatus('all')}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    color={filterStatus === 'paid' ? 'success' : 'outline-success'}
                    onClick={() => setFilterStatus('paid')}
                    size="sm"
                  >
                    Paid
                  </Button>
                  <Button
                    color={filterStatus === 'pending' ? 'warning' : 'outline-warning'}
                    onClick={() => setFilterStatus('pending')}
                    size="sm"
                  >
                    Pending
                  </Button>
                  <Button
                    color={filterStatus === 'overdue' ? 'danger' : 'outline-danger'}
                    onClick={() => setFilterStatus('overdue')}
                    size="sm"
                  >
                    Overdue
                  </Button>
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Invoices Table */}
      <Card className="shadow-sm">
        <CardBody className="p-0">
          <div style={{ overflowX: 'auto' }}>
            <Table hover responsive className="mb-0">
              <thead style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', color: 'white' }}>
                <tr>
                  <th className="border-0">Invoice ID</th>
                  <th className="border-0">Customer</th>
                  <th className="border-0">Date</th>
                  <th className="border-0">Services</th>
                  <th className="border-0">Payment Method</th>
                  <th className="border-0">Amount</th>
                  <th className="border-0">Status</th>
                  <th className="border-0 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map(invoice => (
                  <tr key={invoice.id}>
                    <td>
                      <strong className="text-primary">{invoice.id}</strong>
                    </td>
                    <td>{invoice.customer}</td>
                    <td>{new Date(invoice.date).toLocaleDateString('en-IN')}</td>
                    <td>
                      <small className="text-muted">{invoice.services}</small>
                    </td>
                    <td>
                      <Badge color="info" pill>
                        {invoice.paymentMethod}
                      </Badge>
                    </td>
                    <td>
                      <strong className="text-success">₹{invoice.amount}</strong>
                    </td>
                    <td>
                      <Badge color={getStatusColor(invoice.status)} pill>
                        {invoice.status === 'paid' && <i className="bi bi-check-circle me-1"></i>}
                        {invoice.status === 'pending' && <i className="bi bi-clock me-1"></i>}
                        {invoice.status === 'overdue' && <i className="bi bi-exclamation-triangle me-1"></i>}
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex gap-1 justify-content-center">
                        <Button
                          color="info"
                          size="sm"
                          outline
                          onClick={() => handleViewInvoice(invoice)}
                          title="View Invoice"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Button>
                        <Button
                          color="primary"
                          size="sm"
                          outline
                          onClick={() => window.print()}
                          title="Print Invoice"
                        >
                          <i className="bi bi-printer-fill"></i>
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          outline
                          onClick={() => handleDeleteInvoice(invoice.id)}
                          title="Delete"
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {filteredInvoices.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-inbox" style={{ fontSize: '4rem', color: '#dee2e6' }}></i>
              <h4 className="mt-3 text-muted">No invoices found</h4>
              <p className="text-muted">Try changing your filter criteria</p>
            </div>
          )}
        </CardBody>
      </Card>

      {/* Create Invoice Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          <i className="bi bi-plus-circle-fill me-2"></i>
          Create New Invoice
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="invoiceCustomer">
                    <i className="bi bi-person me-2"></i>
                    Customer Name
                  </Label>
                  <Input
                    type="text"
                    id="invoiceCustomer"
                    placeholder="Enter customer name"
                    value={newInvoice.customer}
                    onChange={(e) => setNewInvoice({ ...newInvoice, customer: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="invoiceAmount">
                    <i className="bi bi-currency-rupee me-2"></i>
                    Amount
                  </Label>
                  <Input
                    type="number"
                    id="invoiceAmount"
                    placeholder="Enter amount"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="invoiceServices">
                <i className="bi bi-list-check me-2"></i>
                Services
              </Label>
              <Input
                type="textarea"
                id="invoiceServices"
                placeholder="Enter services provided"
                rows="3"
                value={newInvoice.services}
                onChange={(e) => setNewInvoice({ ...newInvoice, services: e.target.value })}
              />
            </FormGroup>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="invoicePayment">
                    <i className="bi bi-credit-card me-2"></i>
                    Payment Method
                  </Label>
                  <Input
                    type="select"
                    id="invoicePayment"
                    value={newInvoice.paymentMethod}
                    onChange={(e) => setNewInvoice({ ...newInvoice, paymentMethod: e.target.value })}
                  >
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                    <option value="Net Banking">Net Banking</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="invoiceStatus">
                    <i className="bi bi-toggle-on me-2"></i>
                    Status
                  </Label>
                  <Input
                    type="select"
                    id="invoiceStatus"
                    value={newInvoice.status}
                    onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })}
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            <i className="bi bi-x-circle me-2"></i>
            Cancel
          </Button>
          <Button color="primary" onClick={handleAddInvoice} disabled={!newInvoice.customer || !newInvoice.amount}>
            <i className="bi bi-check-circle me-2"></i>
            Create Invoice
          </Button>
        </ModalFooter>
      </Modal>

      {/* View Invoice Modal */}
      <Modal isOpen={viewModal} toggle={toggleViewModal} size="lg">
        <ModalHeader toggle={toggleViewModal}>
          <i className="bi bi-receipt-cutoff me-2"></i>
          Invoice Details
        </ModalHeader>
        <ModalBody>
          {selectedInvoice && (
            <div>
              <Row className="mb-4">
                <Col md="6">
                  <h5 className="text-muted mb-3">Invoice Information</h5>
                  <p className="mb-2">
                    <strong>Invoice ID:</strong> <Badge color="primary">{selectedInvoice.id}</Badge>
                  </p>
                  <p className="mb-2">
                    <strong>Date:</strong> {new Date(selectedInvoice.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="mb-2">
                    <strong>Status:</strong>{' '}
                    <Badge color={getStatusColor(selectedInvoice.status)} pill>
                      {selectedInvoice.status.charAt(0).toUpperCase() + selectedInvoice.status.slice(1)}
                    </Badge>
                  </p>
                </Col>
                <Col md="6">
                  <h5 className="text-muted mb-3">Customer Information</h5>
                  <p className="mb-2">
                    <i className="bi bi-person me-2 text-primary"></i>
                    <strong>Name:</strong> {selectedInvoice.customer}
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-credit-card me-2 text-success"></i>
                    <strong>Payment Method:</strong> {selectedInvoice.paymentMethod}
                  </p>
                </Col>
              </Row>
              <Card className="mb-3">
                <CardBody>
                  <h6 className="text-muted mb-3">
                    <i className="bi bi-list-check me-2"></i>
                    Services Provided
                  </h6>
                  <p className="mb-0">{selectedInvoice.services}</p>
                </CardBody>
              </Card>
              <Card style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Total Amount</h4>
                    <h2 className="mb-0">₹{selectedInvoice.amount}</h2>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => window.print()}>
            <i className="bi bi-printer-fill me-2"></i>
            Print Invoice
          </Button>
          <Button color="secondary" onClick={toggleViewModal}>
            <i className="bi bi-x-circle me-2"></i>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Invoices;

