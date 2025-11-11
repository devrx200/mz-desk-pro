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
  InputGroup,
  InputGroupText,
  ButtonGroup
} from 'reactstrap';

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Rahul Verma',
      email: 'rahul@email.com',
      phone: '+91 98765 11111',
      aadhaar: '1234 5678 9012',
      address: 'Mumbai, Maharashtra',
      status: 'Active',
      totalSpent: 5000,
      visits: 45,
      lastVisit: '2024-11-06'
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priya@email.com',
      phone: '+91 98765 22222',
      aadhaar: '2345 6789 0123',
      address: 'Delhi, India',
      status: 'Active',
      totalSpent: 3200,
      visits: 32,
      lastVisit: '2024-11-05'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@email.com',
      phone: '+91 98765 33333',
      aadhaar: '3456 7890 1234',
      address: 'Ahmedabad, Gujarat',
      status: 'Inactive',
      totalSpent: 1500,
      visits: 28,
      lastVisit: '2024-11-04'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      email: 'sneha@email.com',
      phone: '+91 98765 44444',
      aadhaar: '4567 8901 2345',
      address: 'Hyderabad, Telangana',
      status: 'Active',
      totalSpent: 7800,
      visits: 56,
      lastVisit: '2024-11-07'
    },
  ]);

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    aadhaar: '',
    address: '',
    status: 'Active'
  });

  const toggleModal = () => setModal(!modal);
  const toggleEditModal = () => setEditModal(!editModal);
  const toggleViewModal = () => setViewModal(!viewModal);

  const handleAddCustomer = () => {
    const customer = {
      ...newCustomer,
      id: customers.length + 1,
      totalSpent: 0,
      visits: 0,
      lastVisit: new Date().toISOString().split('T')[0]
    };
    setCustomers([...customers, customer]);
    setNewCustomer({ name: '', phone: '', email: '', aadhaar: '', address: '', status: 'Active' });
    toggleModal();
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    toggleEditModal();
  };

  const handleUpdateCustomer = () => {
    setCustomers(customers.map(c => c.id === selectedCustomer.id ? selectedCustomer : c));
    toggleEditModal();
  };

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    toggleViewModal();
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.phone.includes(searchTerm) ||
                         c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.aadhaar.includes(searchTerm);
    const matchesStatus = filterStatus === 'All' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? 'success' : 'secondary';
  };

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
              <i className="bi bi-people-fill me-3" style={{ fontSize: '2.5rem' }}></i>
              Customer Management
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              Manage customer information, track visits, and monitor spending
            </p>
          </Col>
          <Col xs="12" md="4" className="text-md-end mt-3 mt-md-0">
            <Button color="light" size="lg" onClick={toggleModal} className="shadow">
              <i className="bi bi-person-plus-fill me-2"></i>
              Add New Customer
            </Button>
          </Col>
        </Row>
      </div>

      {/* Search and Filter */}
      <Row className="mb-4">
        <Col md="8">
          <Card className="shadow-sm">
            <CardBody>
              <InputGroup>
                <InputGroupText>
                  <i className="bi bi-search"></i>
                </InputGroupText>
                <Input
                  type="text"
                  placeholder="Search by name, phone, email, or Aadhaar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow-sm">
            <CardBody>
              <ButtonGroup className="w-100">
                <Button
                  color={filterStatus === 'All' ? 'primary' : 'outline-primary'}
                  onClick={() => setFilterStatus('All')}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  color={filterStatus === 'Active' ? 'success' : 'outline-success'}
                  onClick={() => setFilterStatus('Active')}
                  size="sm"
                >
                  Active
                </Button>
                <Button
                  color={filterStatus === 'Inactive' ? 'secondary' : 'outline-secondary'}
                  onClick={() => setFilterStatus('Inactive')}
                  size="sm"
                >
                  Inactive
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Customers Table */}
      <Card className="shadow-sm">
        <CardBody className="p-0">
          <div style={{ overflowX: 'auto' }}>
            <Table hover responsive className="mb-0">
              <thead style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', color: 'white' }}>
                <tr>
                  <th className="border-0">Customer Name</th>
                  <th className="border-0">Email</th>
                  <th className="border-0">Phone</th>
                  <th className="border-0">Aadhaar</th>
                  <th className="border-0">Status</th>
                  <th className="border-0">Visits</th>
                  <th className="border-0">Total Spent</th>
                  <th className="border-0">Last Visit</th>
                  <th className="border-0 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map(customer => (
                  <tr key={customer.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-2"
                          style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            fontWeight: 'bold'
                          }}>
                          {customer.name.charAt(0)}
                        </div>
                        <strong>{customer.name}</strong>
                      </div>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>
                      <code style={{ fontSize: '0.875rem' }}>{customer.aadhaar}</code>
                    </td>
                    <td>
                      <Badge color={getStatusColor(customer.status)} pill>
                        {customer.status}
                      </Badge>
                    </td>
                    <td>
                      <Badge color="info" pill>
                        {customer.visits} visits
                      </Badge>
                    </td>
                    <td>
                      <strong className="text-success">₹{customer.totalSpent}</strong>
                    </td>
                    <td>{new Date(customer.lastVisit).toLocaleDateString('en-IN')}</td>
                    <td>
                      <div className="d-flex gap-1 justify-content-center">
                        <Button
                          color="info"
                          size="sm"
                          outline
                          onClick={() => handleViewCustomer(customer)}
                          title="View Details"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Button>
                        <Button
                          color="primary"
                          size="sm"
                          outline
                          onClick={() => handleEditCustomer(customer)}
                          title="Edit"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          outline
                          onClick={() => handleDeleteCustomer(customer.id)}
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
          {filteredCustomers.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-inbox" style={{ fontSize: '4rem', color: '#dee2e6' }}></i>
              <h4 className="mt-3 text-muted">No customers found</h4>
              <p className="text-muted">Try changing your search or filter criteria</p>
            </div>
          )}
        </CardBody>
      </Card>

      {/* Add Customer Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          <i className="bi bi-person-plus-fill me-2"></i>
          Add New Customer
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="customerName">
                    <i className="bi bi-person me-2"></i>
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="customerName"
                    placeholder="Enter full name"
                    value={newCustomer.name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="customerPhone">
                    <i className="bi bi-telephone me-2"></i>
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="customerPhone"
                    placeholder="+91 98765 43210"
                    value={newCustomer.phone}
                    onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="customerEmail">
                    <i className="bi bi-envelope me-2"></i>
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="customerEmail"
                    placeholder="customer@example.com"
                    value={newCustomer.email}
                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="customerAadhaar">
                    <i className="bi bi-credit-card me-2"></i>
                    Aadhaar Number
                  </Label>
                  <Input
                    type="text"
                    id="customerAadhaar"
                    placeholder="1234 5678 9012"
                    value={newCustomer.aadhaar}
                    onChange={(e) => setNewCustomer({ ...newCustomer, aadhaar: e.target.value })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="customerAddress">
                <i className="bi bi-geo-alt me-2"></i>
                Address
              </Label>
              <Input
                type="textarea"
                id="customerAddress"
                placeholder="Enter full address"
                rows="3"
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="customerStatus">
                <i className="bi bi-toggle-on me-2"></i>
                Status
              </Label>
              <Input
                type="select"
                id="customerStatus"
                value={newCustomer.status}
                onChange={(e) => setNewCustomer({ ...newCustomer, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            <i className="bi bi-x-circle me-2"></i>
            Cancel
          </Button>
          <Button color="primary" onClick={handleAddCustomer} disabled={!newCustomer.name || !newCustomer.phone}>
            <i className="bi bi-check-circle me-2"></i>
            Add Customer
          </Button>
        </ModalFooter>
      </Modal>

      {/* Edit Customer Modal */}
      <Modal isOpen={editModal} toggle={toggleEditModal} size="lg">
        <ModalHeader toggle={toggleEditModal}>
          <i className="bi bi-pencil-square me-2"></i>
          Edit Customer
        </ModalHeader>
        <ModalBody>
          {selectedCustomer && (
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="editCustomerName">
                      <i className="bi bi-person me-2"></i>
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="editCustomerName"
                      value={selectedCustomer.name}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, name: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="editCustomerPhone">
                      <i className="bi bi-telephone me-2"></i>
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="editCustomerPhone"
                      value={selectedCustomer.phone}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, phone: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="editCustomerEmail">
                      <i className="bi bi-envelope me-2"></i>
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="editCustomerEmail"
                      value={selectedCustomer.email}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="editCustomerAadhaar">
                      <i className="bi bi-credit-card me-2"></i>
                      Aadhaar Number
                    </Label>
                    <Input
                      type="text"
                      id="editCustomerAadhaar"
                      value={selectedCustomer.aadhaar}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, aadhaar: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="editCustomerAddress">
                  <i className="bi bi-geo-alt me-2"></i>
                  Address
                </Label>
                <Input
                  type="textarea"
                  id="editCustomerAddress"
                  rows="3"
                  value={selectedCustomer.address}
                  onChange={(e) => setSelectedCustomer({ ...selectedCustomer, address: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="editCustomerStatus">
                  <i className="bi bi-toggle-on me-2"></i>
                  Status
                </Label>
                <Input
                  type="select"
                  id="editCustomerStatus"
                  value={selectedCustomer.status}
                  onChange={(e) => setSelectedCustomer({ ...selectedCustomer, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Input>
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleEditModal}>
            <i className="bi bi-x-circle me-2"></i>
            Cancel
          </Button>
          <Button color="primary" onClick={handleUpdateCustomer}>
            <i className="bi bi-check-circle me-2"></i>
            Update Customer
          </Button>
        </ModalFooter>
      </Modal>

      {/* View Customer Modal */}
      <Modal isOpen={viewModal} toggle={toggleViewModal} size="lg">
        <ModalHeader toggle={toggleViewModal}>
          <i className="bi bi-eye-fill me-2"></i>
          Customer Details
        </ModalHeader>
        <ModalBody>
          {selectedCustomer && (
            <div>
              <Row className="mb-4">
                <Col className="text-center">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontSize: '3rem',
                      fontWeight: 'bold'
                    }}>
                    {selectedCustomer.name.charAt(0)}
                  </div>
                  <h3>{selectedCustomer.name}</h3>
                  <Badge color={getStatusColor(selectedCustomer.status)} pill className="mb-2">
                    {selectedCustomer.status}
                  </Badge>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Card className="mb-3">
                    <CardBody>
                      <h6 className="text-muted mb-3">
                        <i className="bi bi-person-lines-fill me-2"></i>
                        Contact Information
                      </h6>
                      <p className="mb-2">
                        <i className="bi bi-envelope me-2 text-primary"></i>
                        <strong>Email:</strong> {selectedCustomer.email}
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-telephone me-2 text-success"></i>
                        <strong>Phone:</strong> {selectedCustomer.phone}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-credit-card me-2 text-info"></i>
                        <strong>Aadhaar:</strong> <code>{selectedCustomer.aadhaar}</code>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="mb-3">
                    <CardBody>
                      <h6 className="text-muted mb-3">
                        <i className="bi bi-graph-up me-2"></i>
                        Statistics
                      </h6>
                      <p className="mb-2">
                        <i className="bi bi-calendar-check me-2 text-primary"></i>
                        <strong>Total Visits:</strong> <Badge color="info" pill>{selectedCustomer.visits}</Badge>
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-currency-rupee me-2 text-success"></i>
                        <strong>Total Spent:</strong> <strong className="text-success">₹{selectedCustomer.totalSpent}</strong>
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-clock me-2 text-warning"></i>
                        <strong>Last Visit:</strong> {new Date(selectedCustomer.lastVisit).toLocaleDateString('en-IN')}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Card>
                <CardBody>
                  <h6 className="text-muted mb-3">
                    <i className="bi bi-geo-alt me-2"></i>
                    Address
                  </h6>
                  <p className="mb-0">{selectedCustomer.address}</p>
                </CardBody>
              </Card>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleViewModal}>
            <i className="bi bi-x-circle me-2"></i>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Customers;

