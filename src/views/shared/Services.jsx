import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
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
  ButtonGroup,
  InputGroup,
  InputGroupText
} from 'reactstrap';

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Aadhaar Enrollment', icon: 'bi-person-vcard-fill', price: 50, category: 'Government', popular: true, status: 'active' },
    { id: 2, name: 'PAN Card Application', icon: 'bi-credit-card-fill', price: 100, category: 'Government', popular: true, status: 'active' },
    { id: 3, name: 'Passport Form', icon: 'bi-passport-fill', price: 150, category: 'Government', popular: false, status: 'active' },
    { id: 4, name: 'Black & White Print', icon: 'bi-printer-fill', price: 2, category: 'Printing', popular: true, status: 'active' },
    { id: 5, name: 'Color Print', icon: 'bi-palette-fill', price: 5, category: 'Printing', popular: true, status: 'active' },
    { id: 6, name: 'Photocopy', icon: 'bi-files', price: 1, category: 'Printing', popular: true, status: 'active' },
    { id: 7, name: 'Scanning', icon: 'bi-upc-scan', price: 5, category: 'Printing', popular: false, status: 'active' },
    { id: 8, name: 'Internet (Per Hour)', icon: 'bi-wifi', price: 20, category: 'Internet', popular: true, status: 'active' },
    { id: 9, name: 'Computer Usage', icon: 'bi-laptop', price: 30, category: 'Internet', popular: false, status: 'active' },
  ]);

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [newService, setNewService] = useState({
    name: '',
    icon: 'bi-gear-fill',
    price: '',
    category: 'Government',
    popular: false,
    status: 'active'
  });

  const toggleModal = () => setModal(!modal);
  const toggleEditModal = () => setEditModal(!editModal);

  const categories = ['All', 'Government', 'Printing', 'Internet'];

  const filteredServices = filterCategory === 'All'
    ? services
    : services.filter(s => s.category === filterCategory);

  const handleAddService = () => {
    const service = {
      ...newService,
      id: services.length + 1,
      price: parseFloat(newService.price)
    };
    setServices([...services, service]);
    setNewService({ name: '', icon: 'bi-gear-fill', price: '', category: 'Government', popular: false, status: 'active' });
    toggleModal();
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    toggleEditModal();
  };

  const handleUpdateService = () => {
    setServices(services.map(s => s.id === selectedService.id ? selectedService : s));
    toggleEditModal();
  };

  const handleDeleteService = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Government': 'primary',
      'Printing': 'success',
      'Internet': 'info'
    };
    return colors[category] || 'secondary';
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
              <i className="bi bi-gear-wide-connected me-3" style={{ fontSize: '2.5rem' }}></i>
              Services Management
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              Manage your business services, pricing, and categories
            </p>
          </Col>
          <Col xs="12" md="4" className="text-md-end mt-3 mt-md-0">
            <Button color="light" size="lg" onClick={toggleModal} className="shadow">
              <i className="bi bi-plus-circle me-2"></i>
              Add New Service
            </Button>
          </Col>
        </Row>
      </div>

      {/* Filter Buttons */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <h5 className="mb-3 mb-md-0">
                  <i className="bi bi-funnel me-2"></i>
                  Filter by Category
                </h5>
                <ButtonGroup>
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      color={filterCategory === cat ? 'primary' : 'outline-primary'}
                      onClick={() => setFilterCategory(cat)}
                      size="sm"
                    >
                      {cat}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Services Grid */}
      <Row>
        {filteredServices.map(service => (
          <Col key={service.id} xs="12" sm="6" lg="4" xl="3" className="mb-4">
            <Card className="h-100 shadow-sm" style={{
              transition: 'all 0.3s ease',
              border: service.popular ? '2px solid #ffc107' : '1px solid #dee2e6'
            }}>
              <CardBody className="d-flex flex-column">
                {service.popular && (
                  <Badge color="warning" className="position-absolute" style={{ top: '10px', right: '10px' }}>
                    <i className="bi bi-star-fill me-1"></i>
                    Popular
                  </Badge>
                )}

                <div className="text-center mb-3">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, var(--bs-${getCategoryColor(service.category)}) 0%, var(--bs-${getCategoryColor(service.category)}-dark, var(--bs-${getCategoryColor(service.category)})) 100%)`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                    <i className={`bi ${service.icon} text-white`} style={{ fontSize: '2rem' }}></i>
                  </div>
                  <CardTitle tag="h5" className="mb-2">{service.name}</CardTitle>
                  <Badge color={getCategoryColor(service.category)} pill className="mb-2">
                    {service.category}
                  </Badge>
                </div>

                <div className="text-center mb-3">
                  <h3 className="text-primary mb-0">
                    ₹{service.price}
                    <small className="text-muted" style={{ fontSize: '0.875rem' }}>
                      {service.category === 'Internet' ? '/hour' : '/service'}
                    </small>
                  </h3>
                </div>

                <div className="mt-auto">
                  <div className="d-grid gap-2">
                    <Button color="primary" size="sm" outline onClick={() => handleEditService(service)}>
                      <i className="bi bi-pencil-square me-2"></i>
                      Edit
                    </Button>
                    <Button color="danger" size="sm" outline onClick={() => handleDeleteService(service.id)}>
                      <i className="bi bi-trash me-2"></i>
                      Delete
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredServices.length === 0 && (
        <Row>
          <Col>
            <Card className="text-center py-5">
              <CardBody>
                <i className="bi bi-inbox" style={{ fontSize: '4rem', color: '#dee2e6' }}></i>
                <h4 className="mt-3 text-muted">No services found</h4>
                <p className="text-muted">Try changing the filter or add a new service</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      {/* Add Service Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          <i className="bi bi-plus-circle me-2"></i>
          Add New Service
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="serviceName">
                    <i className="bi bi-tag me-2"></i>
                    Service Name
                  </Label>
                  <Input
                    type="text"
                    id="serviceName"
                    placeholder="Enter service name"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="serviceCategory">
                    <i className="bi bi-folder me-2"></i>
                    Category
                  </Label>
                  <Input
                    type="select"
                    id="serviceCategory"
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  >
                    <option value="Government">Government</option>
                    <option value="Printing">Printing</option>
                    <option value="Internet">Internet</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="servicePrice">
                    <i className="bi bi-currency-rupee me-2"></i>
                    Price (₹)
                  </Label>
                  <InputGroup>
                    <InputGroupText>₹</InputGroupText>
                    <Input
                      type="number"
                      id="servicePrice"
                      placeholder="0.00"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="serviceIcon">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Icon
                  </Label>
                  <Input
                    type="select"
                    id="serviceIcon"
                    value={newService.icon}
                    onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                  >
                    <option value="bi-gear-fill">Gear</option>
                    <option value="bi-person-vcard-fill">ID Card</option>
                    <option value="bi-credit-card-fill">Credit Card</option>
                    <option value="bi-passport-fill">Passport</option>
                    <option value="bi-printer-fill">Printer</option>
                    <option value="bi-palette-fill">Palette</option>
                    <option value="bi-files">Files</option>
                    <option value="bi-upc-scan">Scanner</option>
                    <option value="bi-wifi">WiFi</option>
                    <option value="bi-laptop">Laptop</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input
                type="checkbox"
                id="servicePopular"
                checked={newService.popular}
                onChange={(e) => setNewService({ ...newService, popular: e.target.checked })}
              />
              <Label check for="servicePopular">
                <i className="bi bi-star-fill me-2 text-warning"></i>
                Mark as Popular
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            <i className="bi bi-x-circle me-2"></i>
            Cancel
          </Button>
          <Button color="primary" onClick={handleAddService} disabled={!newService.name || !newService.price}>
            <i className="bi bi-check-circle me-2"></i>
            Add Service
          </Button>
        </ModalFooter>
      </Modal>

      {/* Edit Service Modal */}
      <Modal isOpen={editModal} toggle={toggleEditModal} size="lg">
        <ModalHeader toggle={toggleEditModal}>
          <i className="bi bi-pencil-square me-2"></i>
          Edit Service
        </ModalHeader>
        <ModalBody>
          {selectedService && (
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="editServiceName">
                      <i className="bi bi-tag me-2"></i>
                      Service Name
                    </Label>
                    <Input
                      type="text"
                      id="editServiceName"
                      value={selectedService.name}
                      onChange={(e) => setSelectedService({ ...selectedService, name: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="editServiceCategory">
                      <i className="bi bi-folder me-2"></i>
                      Category
                    </Label>
                    <Input
                      type="select"
                      id="editServiceCategory"
                      value={selectedService.category}
                      onChange={(e) => setSelectedService({ ...selectedService, category: e.target.value })}
                    >
                      <option value="Government">Government</option>
                      <option value="Printing">Printing</option>
                      <option value="Internet">Internet</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="editServicePrice">
                      <i className="bi bi-currency-rupee me-2"></i>
                      Price (₹)
                    </Label>
                    <InputGroup>
                      <InputGroupText>₹</InputGroupText>
                      <Input
                        type="number"
                        id="editServicePrice"
                        value={selectedService.price}
                        onChange={(e) => setSelectedService({ ...selectedService, price: parseFloat(e.target.value) })}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="editServiceIcon">
                      <i className="bi bi-emoji-smile me-2"></i>
                      Icon
                    </Label>
                    <Input
                      type="select"
                      id="editServiceIcon"
                      value={selectedService.icon}
                      onChange={(e) => setSelectedService({ ...selectedService, icon: e.target.value })}
                    >
                      <option value="bi-gear-fill">Gear</option>
                      <option value="bi-person-vcard-fill">ID Card</option>
                      <option value="bi-credit-card-fill">Credit Card</option>
                      <option value="bi-passport-fill">Passport</option>
                      <option value="bi-printer-fill">Printer</option>
                      <option value="bi-palette-fill">Palette</option>
                      <option value="bi-files">Files</option>
                      <option value="bi-upc-scan">Scanner</option>
                      <option value="bi-wifi">WiFi</option>
                      <option value="bi-laptop">Laptop</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input
                  type="checkbox"
                  id="editServicePopular"
                  checked={selectedService.popular}
                  onChange={(e) => setSelectedService({ ...selectedService, popular: e.target.checked })}
                />
                <Label check for="editServicePopular">
                  <i className="bi bi-star-fill me-2 text-warning"></i>
                  Mark as Popular
                </Label>
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleEditModal}>
            <i className="bi bi-x-circle me-2"></i>
            Cancel
          </Button>
          <Button color="primary" onClick={handleUpdateService}>
            <i className="bi bi-check-circle me-2"></i>
            Update Service
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Services;

