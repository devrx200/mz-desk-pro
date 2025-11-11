import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Button,
  ButtonGroup,
  Badge,
  Alert,
  Table,
  Progress,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Pagination,
  PaginationItem,
  PaginationLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Toast,
  ToastHeader,
  ToastBody
} from 'reactstrap';

const DummyForms = () => {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: '',
    date: '',
    time: '',
    color: '#5e72e4',
    range: 50,
    textarea: '',
    select: '',
    multiSelect: [],
    checkbox: false,
    radio: '',
    file: null,
    switch: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  // Advanced Table State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  // Sample table data
  const allTableData = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'Admin', status: 'Active', phone: '+91 98765 43210', city: 'Mumbai' },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', role: 'Owner', status: 'Active', phone: '+91 98765 43211', city: 'Delhi' },
    { id: 3, name: 'Amit Patel', email: 'amit@example.com', role: 'Operator', status: 'Pending', phone: '+91 98765 43212', city: 'Ahmedabad' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha@example.com', role: 'Operator', status: 'Inactive', phone: '+91 98765 43213', city: 'Hyderabad' },
    { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', role: 'Admin', status: 'Active', phone: '+91 98765 43214', city: 'Bangalore' },
    { id: 6, name: 'Anita Desai', email: 'anita@example.com', role: 'Owner', status: 'Active', phone: '+91 98765 43215', city: 'Pune' },
    { id: 7, name: 'Rahul Verma', email: 'rahul@example.com', role: 'Operator', status: 'Active', phone: '+91 98765 43216', city: 'Chennai' },
    { id: 8, name: 'Kavita Joshi', email: 'kavita@example.com', role: 'Admin', status: 'Pending', phone: '+91 98765 43217', city: 'Kolkata' },
    { id: 9, name: 'Suresh Nair', email: 'suresh@example.com', role: 'Operator', status: 'Inactive', phone: '+91 98765 43218', city: 'Kochi' },
    { id: 10, name: 'Deepa Menon', email: 'deepa@example.com', role: 'Owner', status: 'Active', phone: '+91 98765 43219', city: 'Jaipur' },
    { id: 11, name: 'Arjun Kapoor', email: 'arjun@example.com', role: 'Operator', status: 'Active', phone: '+91 98765 43220', city: 'Lucknow' },
    { id: 12, name: 'Pooja Gupta', email: 'pooja@example.com', role: 'Admin', status: 'Active', phone: '+91 98765 43221', city: 'Chandigarh' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted! Check console for data.');
  };

  // Advanced Table Functions
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredAndSortedData.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) {
      alert('Please select rows to delete');
      return;
    }
    alert(`Deleting ${selectedRows.length} selected row(s)`);
    setSelectedRows([]);
  };

  const handleExport = () => {
    alert('Exporting data to CSV...');
  };

  // Filter and search data
  const filteredAndSortedData = allTableData
    .filter(row => {
      const matchesSearch =
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.phone.includes(searchTerm) ||
        row.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = filterRole === '' || row.role === filterRole;
      const matchesStatus = filterStatus === '' || row.status === filterStatus;

      return matchesSearch && matchesRole && matchesStatus;
    })
    .sort((a, b) => {
      if (!sortField) return 0;

      const aValue = a[sortField];
      const bValue = b[sortField];

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Admin': return 'primary';
      case 'Owner': return 'info';
      case 'Operator': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'Active': return 'success';
      case 'Pending': return 'warning';
      case 'Inactive': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container fluid className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <BreadcrumbItem><a href="#home">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#components">Components</a></BreadcrumbItem>
        <BreadcrumbItem active>Dummy Forms</BreadcrumbItem>
      </Breadcrumb>

      {/* Page Header */}
      <Row className="mb-4">
        <Col>
          <h1 className="display-4 fw-bold mb-2">
            <i className="bi bi-ui-checks-grid me-3"></i>
            Bootstrap Components Library
          </h1>
          <p className="lead text-muted">
            Complete collection of all Bootstrap 5 and Reactstrap components for quick reference
          </p>
        </Col>
      </Row>

      {/* Alerts */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-primary text-white">
              <h3 className="mb-0"><i className="bi bi-exclamation-triangle me-2"></i>Alerts</h3>
            </CardHeader>
            <CardBody>
              <Alert color="primary" className="d-flex align-items-center">
                <i className="bi bi-info-circle-fill me-2"></i>
                This is a primary alert—check it out!
              </Alert>
              <Alert color="success" className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill me-2"></i>
                This is a success alert—check it out!
              </Alert>
              <Alert color="warning" className="d-flex align-items-center">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                This is a warning alert—check it out!
              </Alert>
              <Alert color="danger" className="d-flex align-items-center mb-0">
                <i className="bi bi-x-circle-fill me-2"></i>
                This is a danger alert—check it out!
              </Alert>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Form Inputs */}
      <Row className="mb-4">
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-info text-white">
              <h3 className="mb-0"><i className="bi bi-input-cursor me-2"></i>Form Inputs</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                {/* Text Input */}
                <FormGroup>
                  <Label for="text" className="fw-semibold">Text Input</Label>
                  <Input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Enter text"
                    value={formData.text}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Email Input */}
                <FormGroup>
                  <Label for="email" className="fw-semibold">Email Input</Label>
                  <InputGroup>
                    <InputGroupText>
                      <i className="bi bi-envelope"></i>
                    </InputGroupText>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormGroup>

                {/* Password Input with Eye Icon */}
                <FormGroup>
                  <Label for="password" className="fw-semibold">Password</Label>
                  <InputGroup>
                    <InputGroupText>
                      <i className="bi bi-lock"></i>
                    </InputGroupText>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <Button 
                      color="light" 
                      outline 
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      <i className={`bi bi-eye${showPassword ? '-slash' : ''}-fill`}></i>
                    </Button>
                  </InputGroup>
                </FormGroup>

                {/* Confirm Password */}
                <FormGroup>
                  <Label for="confirmPassword" className="fw-semibold">Confirm Password</Label>
                  <InputGroup>
                    <InputGroupText>
                      <i className="bi bi-lock-fill"></i>
                    </InputGroupText>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <Button 
                      color="light" 
                      outline 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      type="button"
                    >
                      <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}-fill`}></i>
                    </Button>
                  </InputGroup>
                </FormGroup>

                {/* Number Input */}
                <FormGroup>
                  <Label for="number" className="fw-semibold">Number Input</Label>
                  <Input
                    type="number"
                    id="number"
                    name="number"
                    placeholder="Enter number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Date Input */}
                <FormGroup>
                  <Label for="date" className="fw-semibold">Date Input</Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Time Input */}
                <FormGroup>
                  <Label for="time" className="fw-semibold">Time Input</Label>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Color Picker */}
                <FormGroup>
                  <Label for="color" className="fw-semibold">Color Picker</Label>
                  <Input
                    type="color"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Range Slider */}
                <FormGroup>
                  <Label for="range" className="fw-semibold">Range Slider: {formData.range}</Label>
                  <Input
                    type="range"
                    id="range"
                    name="range"
                    min="0"
                    max="100"
                    value={formData.range}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Textarea */}
                <FormGroup>
                  <Label for="textarea" className="fw-semibold">Textarea</Label>
                  <Input
                    type="textarea"
                    id="textarea"
                    name="textarea"
                    rows="3"
                    placeholder="Enter multiple lines of text"
                    value={formData.textarea}
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Submit Button */}
                <Button color="primary" size="lg" block type="submit">
                  <i className="bi bi-check-circle me-2"></i>
                  Submit Form
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Select, Checkbox, Radio */}
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-success text-white">
              <h3 className="mb-0"><i className="bi bi-ui-checks me-2"></i>Select & Checkboxes</h3>
            </CardHeader>
            <CardBody>
              <Form>
                {/* Select Dropdown */}
                <FormGroup>
                  <Label for="select" className="fw-semibold">Select Dropdown</Label>
                  <Input
                    type="select"
                    id="select"
                    name="select"
                    value={formData.select}
                    onChange={handleChange}
                  >
                    <option value="">Choose an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Input>
                </FormGroup>

                {/* Multi Select */}
                <FormGroup>
                  <Label for="multiSelect" className="fw-semibold">Multi Select</Label>
                  <Input
                    type="select"
                    id="multiSelect"
                    name="multiSelect"
                    multiple
                    value={formData.multiSelect}
                    onChange={handleChange}
                  >
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                    <option value="item4">Item 4</option>
                  </Input>
                </FormGroup>

                {/* Checkbox */}
                <FormGroup check className="mb-3">
                  <Input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={formData.checkbox}
                    onChange={handleChange}
                  />
                  <Label check for="checkbox">
                    I agree to the terms and conditions
                  </Label>
                </FormGroup>

                {/* Radio Buttons */}
                <FormGroup tag="fieldset">
                  <Label className="fw-semibold">Radio Buttons</Label>
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="radio1"
                      name="radio"
                      value="option1"
                      checked={formData.radio === 'option1'}
                      onChange={handleChange}
                    />
                    <Label check for="radio1">
                      Option 1
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="radio2"
                      name="radio"
                      value="option2"
                      checked={formData.radio === 'option2'}
                      onChange={handleChange}
                    />
                    <Label check for="radio2">
                      Option 2
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="radio3"
                      name="radio"
                      value="option3"
                      checked={formData.radio === 'option3'}
                      onChange={handleChange}
                    />
                    <Label check for="radio3">
                      Option 3
                    </Label>
                  </FormGroup>
                </FormGroup>

                {/* File Upload */}
                <FormGroup>
                  <Label for="file" className="fw-semibold">File Upload</Label>
                  <Input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* Switch */}
                <FormGroup switch className="mb-3">
                  <Input
                    type="switch"
                    id="switch"
                    name="switch"
                    checked={formData.switch}
                    onChange={handleChange}
                  />
                  <Label check for="switch">
                    Enable notifications
                  </Label>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Buttons */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-warning text-white">
              <h3 className="mb-0"><i className="bi bi-hand-index me-2"></i>Buttons</h3>
            </CardHeader>
            <CardBody>
              <Row className="mb-3">
                <Col>
                  <h5 className="fw-bold mb-3">Solid Buttons</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="success">Success</Button>
                    <Button color="info">Info</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="danger">Danger</Button>
                    <Button color="light">Light</Button>
                    <Button color="dark">Dark</Button>
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 className="fw-bold mb-3">Outline Buttons</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <Button color="primary" outline>Primary</Button>
                    <Button color="secondary" outline>Secondary</Button>
                    <Button color="success" outline>Success</Button>
                    <Button color="info" outline>Info</Button>
                    <Button color="warning" outline>Warning</Button>
                    <Button color="danger" outline>Danger</Button>
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 className="fw-bold mb-3">Button Sizes</h5>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <Button color="primary" size="lg">Large</Button>
                    <Button color="primary">Default</Button>
                    <Button color="primary" size="sm">Small</Button>
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 className="fw-bold mb-3">Button Group</h5>
                  <ButtonGroup>
                    <Button color="primary">Left</Button>
                    <Button color="primary">Middle</Button>
                    <Button color="primary">Right</Button>
                  </ButtonGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5 className="fw-bold mb-3">Icon Buttons</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <Button color="primary">
                      <i className="bi bi-download me-2"></i>Download
                    </Button>
                    <Button color="success">
                      <i className="bi bi-check-circle me-2"></i>Approve
                    </Button>
                    <Button color="danger">
                      <i className="bi bi-trash me-2"></i>Delete
                    </Button>
                    <Button color="info">
                      <i className="bi bi-pencil me-2"></i>Edit
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Badges & Progress */}
      <Row className="mb-4">
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-danger text-white">
              <h3 className="mb-0"><i className="bi bi-award me-2"></i>Badges</h3>
            </CardHeader>
            <CardBody>
              <h5 className="fw-bold mb-3">Solid Badges</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="info">Info</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="danger">Danger</Badge>
              </div>

              <h5 className="fw-bold mb-3">Pill Badges</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Badge color="primary" pill>Primary</Badge>
                <Badge color="success" pill>Success</Badge>
                <Badge color="warning" pill>Warning</Badge>
                <Badge color="danger" pill>Danger</Badge>
              </div>

              <h5 className="fw-bold mb-3">Badges in Buttons</h5>
              <div className="d-flex flex-wrap gap-2">
                <Button color="primary">
                  Notifications <Badge color="light" className="ms-2">4</Badge>
                </Button>
                <Button color="success">
                  Messages <Badge color="light" className="ms-2">12</Badge>
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-info text-white">
              <h3 className="mb-0"><i className="bi bi-bar-chart me-2"></i>Progress Bars</h3>
            </CardHeader>
            <CardBody>
              <h5 className="fw-bold mb-3">Basic Progress</h5>
              <Progress value={25} className="mb-3" />
              <Progress value={50} className="mb-3" />
              <Progress value={75} className="mb-4" />

              <h5 className="fw-bold mb-3">Colored Progress</h5>
              <Progress color="success" value={25} className="mb-3" />
              <Progress color="info" value={50} className="mb-3" />
              <Progress color="warning" value={75} className="mb-3" />
              <Progress color="danger" value={100} className="mb-4" />

              <h5 className="fw-bold mb-3">Striped & Animated</h5>
              <Progress striped value={50} className="mb-3" />
              <Progress striped animated value={75} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Simple Basic Table */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-success text-white">
              <h3 className="mb-0"><i className="bi bi-table me-2"></i>Simple Basic Table</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rajesh Kumar</td>
                      <td>rajesh@example.com</td>
                      <td><Badge color="primary">Admin</Badge></td>
                      <td><Badge color="success" pill>Active</Badge></td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Priya Sharma</td>
                      <td>priya@example.com</td>
                      <td><Badge color="info">Owner</Badge></td>
                      <td><Badge color="success" pill>Active</Badge></td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Amit Patel</td>
                      <td>amit@example.com</td>
                      <td><Badge color="secondary">Operator</Badge></td>
                      <td><Badge color="warning" pill>Pending</Badge></td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Sneha Reddy</td>
                      <td>sneha@example.com</td>
                      <td><Badge color="secondary">Operator</Badge></td>
                      <td><Badge color="danger" pill>Inactive</Badge></td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Vikram Singh</td>
                      <td>vikram@example.com</td>
                      <td><Badge color="primary">Admin</Badge></td>
                      <td><Badge color="success" pill>Active</Badge></td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Advanced Table with Search, Filter, Multi-Select, Sort, Pagination */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-primary text-white">
              <h3 className="mb-0"><i className="bi bi-grid-3x3-gap me-2"></i>Advanced Data Table</h3>
              <p className="mb-0 mt-2 small">Search, Filter, Multi-Select, Sort, Pagination</p>
            </CardHeader>
            <CardBody>
              {/* Search and Filters */}
              <Row className="mb-3">
                <Col md="4">
                  <InputGroup>
                    <InputGroupText>
                      <i className="bi bi-search"></i>
                    </InputGroupText>
                    <Input
                      type="text"
                      placeholder="Search by name, email, phone, city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md="3">
                  <Input
                    type="select"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Operator">Operator</option>
                  </Input>
                </Col>
                <Col md="3">
                  <Input
                    type="select"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </Input>
                </Col>
                <Col md="2">
                  <Input
                    type="select"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                  </Input>
                </Col>
              </Row>

              {/* Action Buttons */}
              <Row className="mb-3">
                <Col>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Badge color="info" className="me-2">
                        Total: {filteredAndSortedData.length}
                      </Badge>
                      {selectedRows.length > 0 && (
                        <Badge color="primary">
                          Selected: {selectedRows.length}
                        </Badge>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <Button
                        color="danger"
                        size="sm"
                        onClick={handleDeleteSelected}
                        disabled={selectedRows.length === 0}
                      >
                        <i className="bi bi-trash me-2"></i>
                        Delete Selected
                      </Button>
                      <Button color="success" size="sm" onClick={handleExport}>
                        <i className="bi bi-download me-2"></i>
                        Export CSV
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Table */}
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th style={{ width: '50px' }}>
                        <Input
                          type="checkbox"
                          checked={selectedRows.length === currentData.length && currentData.length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('id')}
                      >
                        # {sortField === 'id' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('name')}
                      >
                        Name {sortField === 'name' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('email')}
                      >
                        Email {sortField === 'email' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th>Phone</th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('city')}
                      >
                        City {sortField === 'city' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('role')}
                      >
                        Role {sortField === 'role' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('status')}
                      >
                        Status {sortField === 'status' && (
                          <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                        )}
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center py-4">
                          <i className="bi bi-inbox fs-1 text-muted d-block mb-2"></i>
                          <p className="text-muted mb-0">No data found</p>
                        </td>
                      </tr>
                    ) : (
                      currentData.map((row) => (
                        <tr key={row.id} className={selectedRows.includes(row.id) ? 'table-active' : ''}>
                          <td>
                            <Input
                              type="checkbox"
                              checked={selectedRows.includes(row.id)}
                              onChange={() => handleSelectRow(row.id)}
                            />
                          </td>
                          <td>{row.id}</td>
                          <td className="fw-semibold">{row.name}</td>
                          <td>{row.email}</td>
                          <td>{row.phone}</td>
                          <td>{row.city}</td>
                          <td>
                            <Badge color={getRoleBadgeColor(row.role)}>
                              {row.role}
                            </Badge>
                          </td>
                          <td>
                            <Badge color={getStatusBadgeColor(row.status)} pill>
                              {row.status}
                            </Badge>
                          </td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button color="info" title="Edit">
                                <i className="bi bi-pencil"></i>
                              </Button>
                              <Button color="success" title="View">
                                <i className="bi bi-eye"></i>
                              </Button>
                              <Button color="danger" title="Delete">
                                <i className="bi bi-trash"></i>
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Row className="mt-3">
                  <Col>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-muted small">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedData.length)} of {filteredAndSortedData.length} entries
                      </div>
                      <Pagination className="mb-0">
                        <PaginationItem disabled={currentPage === 1}>
                          <PaginationLink
                            previous
                            onClick={() => handlePageChange(currentPage - 1)}
                          />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;
                          // Show first page, last page, current page, and pages around current
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <PaginationItem key={page} active={page === currentPage}>
                                <PaginationLink onClick={() => handlePageChange(page)}>
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <PaginationItem key={page} disabled>
                                <PaginationLink>...</PaginationLink>
                              </PaginationItem>
                            );
                          }
                          return null;
                        })}

                        <PaginationItem disabled={currentPage === totalPages}>
                          <PaginationLink
                            next
                            onClick={() => handlePageChange(currentPage + 1)}
                          />
                        </PaginationItem>
                      </Pagination>
                    </div>
                  </Col>
                </Row>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Table Variations */}
      <Row className="mb-4">
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-warning text-white">
              <h3 className="mb-0"><i className="bi bi-table me-2"></i>Striped Table</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table striped className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Laptop</td>
                      <td>₹45,000</td>
                      <td><Badge color="success">In Stock</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mouse</td>
                      <td>₹500</td>
                      <td><Badge color="success">In Stock</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Keyboard</td>
                      <td>₹1,200</td>
                      <td><Badge color="warning">Low Stock</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Monitor</td>
                      <td>₹12,000</td>
                      <td><Badge color="danger">Out of Stock</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-danger text-white">
              <h3 className="mb-0"><i className="bi bi-border-all me-2"></i>Bordered Table</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table bordered className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Service</th>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Internet - 1 Hour</td>
                      <td>60 min</td>
                      <td>₹30</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Printing - Color</td>
                      <td>Per page</td>
                      <td>₹10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Scanning</td>
                      <td>Per page</td>
                      <td>₹5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Gaming - 1 Hour</td>
                      <td>60 min</td>
                      <td>₹50</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-info text-white">
              <h3 className="mb-0"><i className="bi bi-cursor me-2"></i>Hover Table</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rajesh Kumar</td>
                      <td>₹2,500</td>
                      <td><Badge color="success" pill>Paid</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Priya Sharma</td>
                      <td>₹1,800</td>
                      <td><Badge color="warning" pill>Pending</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Amit Patel</td>
                      <td>₹3,200</td>
                      <td><Badge color="success" pill>Paid</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Sneha Reddy</td>
                      <td>₹950</td>
                      <td><Badge color="danger" pill>Overdue</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-success text-white">
              <h3 className="mb-0"><i className="bi bi-grid-1x2 me-2"></i>Small Table</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table size="sm" className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Transaction</th>
                      <th>Amount</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>10 Jan</td>
                      <td>Payment Received</td>
                      <td className="text-success">+₹5,000</td>
                      <td><Badge color="success">Credit</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>09 Jan</td>
                      <td>Bill Payment</td>
                      <td className="text-danger">-₹1,200</td>
                      <td><Badge color="danger">Debit</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>08 Jan</td>
                      <td>Refund</td>
                      <td className="text-success">+₹800</td>
                      <td><Badge color="success">Credit</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>07 Jan</td>
                      <td>Purchase</td>
                      <td className="text-danger">-₹3,500</td>
                      <td><Badge color="danger">Debit</Badge></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>06 Jan</td>
                      <td>Salary</td>
                      <td className="text-success">+₹25,000</td>
                      <td><Badge color="success">Credit</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Tabs & Navigation */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-primary text-white">
              <h3 className="mb-0"><i className="bi bi-layout-three-columns me-2"></i>Tabs & Navigation</h3>
            </CardHeader>
            <CardBody>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === '1' ? 'active' : ''}
                    onClick={() => setActiveTab('1')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="bi bi-house me-2"></i>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '2' ? 'active' : ''}
                    onClick={() => setActiveTab('2')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="bi bi-person me-2"></i>Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '3' ? 'active' : ''}
                    onClick={() => setActiveTab('3')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="bi bi-gear me-2"></i>Settings
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="mt-3">
                <TabPane tabId="1">
                  <h5 className="fw-bold">Home Tab Content</h5>
                  <p className="text-muted">This is the home tab content. You can put any content here.</p>
                </TabPane>
                <TabPane tabId="2">
                  <h5 className="fw-bold">Profile Tab Content</h5>
                  <p className="text-muted">This is the profile tab content. User information goes here.</p>
                </TabPane>
                <TabPane tabId="3">
                  <h5 className="fw-bold">Settings Tab Content</h5>
                  <p className="text-muted">This is the settings tab content. Configuration options go here.</p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* List Groups & Cards */}
      <Row className="mb-4">
        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-info text-white">
              <h3 className="mb-0"><i className="bi bi-list-ul me-2"></i>List Groups</h3>
            </CardHeader>
            <CardBody className="p-0">
              <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span><i className="bi bi-inbox me-2"></i>Inbox</span>
                  <Badge color="primary" pill>14</Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span><i className="bi bi-star me-2"></i>Starred</span>
                  <Badge color="warning" pill>5</Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span><i className="bi bi-send me-2"></i>Sent</span>
                  <Badge color="success" pill>23</Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span><i className="bi bi-trash me-2"></i>Trash</span>
                  <Badge color="danger" pill>3</Badge>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-success text-white">
              <h3 className="mb-0"><i className="bi bi-card-heading me-2"></i>Card Example</h3>
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5" className="fw-bold">Card Title</CardTitle>
              <CardText>
                This is a sample card with some text content. Cards are flexible content containers with multiple variants and options.
              </CardText>
              <Button color="primary">
                <i className="bi bi-arrow-right me-2"></i>Learn More
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Pagination */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-warning text-white">
              <h3 className="mb-0"><i className="bi bi-skip-forward me-2"></i>Pagination</h3>
            </CardHeader>
            <CardBody>
              <Pagination>
                <PaginationItem disabled>
                  <PaginationLink previous />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next />
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Dropdown, Modal, Spinner */}
      <Row className="mb-4">
        <Col lg="4">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-danger text-white">
              <h3 className="mb-0"><i className="bi bi-menu-button me-2"></i>Dropdown</h3>
            </CardHeader>
            <CardBody>
              <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                <DropdownToggle color="primary" caret>
                  Dropdown Menu
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Action 1</DropdownItem>
                  <DropdownItem>Action 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-primary text-white">
              <h3 className="mb-0"><i className="bi bi-window me-2"></i>Modal</h3>
            </CardHeader>
            <CardBody>
              <Button color="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  This is a modal dialog. You can put any content here including forms, images, or text.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => setModalOpen(false)}>
                    Save Changes
                  </Button>
                  <Button color="secondary" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="shadow-sm h-100">
            <CardHeader className="bg-gradient-info text-white">
              <h3 className="mb-0"><i className="bi bi-arrow-repeat me-2"></i>Spinners</h3>
            </CardHeader>
            <CardBody>
              <div className="d-flex flex-wrap gap-3">
                <Spinner color="primary" />
                <Spinner color="success" />
                <Spinner color="warning" />
                <Spinner color="danger" />
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="success" />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Toast */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <CardHeader className="bg-gradient-success text-white">
              <h3 className="mb-0"><i className="bi bi-chat-square-text me-2"></i>Toast Notification</h3>
            </CardHeader>
            <CardBody>
              <Button color="primary" onClick={() => setToastOpen(true)}>
                Show Toast
              </Button>
              <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
                <Toast isOpen={toastOpen}>
                  <ToastHeader toggle={() => setToastOpen(false)}>
                    <i className="bi bi-bell-fill me-2"></i>
                    Notification
                  </ToastHeader>
                  <ToastBody>
                    This is a toast notification message!
                  </ToastBody>
                </Toast>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DummyForms;

