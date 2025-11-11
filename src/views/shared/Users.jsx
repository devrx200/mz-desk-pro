import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
  Input,
  InputGroup,
  Table
} from 'reactstrap';

const Users = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  // Demo users data
  const users = [
    { id: 1, name: 'Rishi Lomash', email: 'admin@billmaster.com', role: 'admin', phone: '+91 98765 43210', status: 'active', shopName: 'System Admin' },
    { id: 2, name: 'Rajesh Kumar', email: 'owner@cybercafe.com', role: 'owner', phone: '+91 98765 43211', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 3, name: 'Amit Patel', email: 'operator@cybercafe.com', role: 'operator', phone: '+91 98765 43212', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 4, name: 'Priya Sharma', email: 'priya@cybercafe.com', role: 'operator', phone: '+91 98765 43213', status: 'active', shopName: 'Cyber Point Mumbai' },
    { id: 5, name: 'Suresh Reddy', email: 'suresh@cybercafe.com', role: 'owner', phone: '+91 98765 43214', status: 'inactive', shopName: 'Cyber Hub Delhi' },
  ];

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role) => {
    switch(role) {
      case 'admin': return 'bi-shield-fill-check';
      case 'owner': return 'bi-building-fill';
      case 'operator': return 'bi-person-fill';
      default: return 'bi-person-fill';
    }
  };

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'admin': return 'danger';
      case 'owner': return 'primary';
      case 'operator': return 'success';
      default: return 'secondary';
    }
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
              User Management
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              Manage system users and their roles
            </p>
          </Col>
          <Col xs="12" md="4" className="text-md-end mt-3 mt-md-0">
            <Button color="light" size="lg">
              <i className="bi bi-person-plus-fill me-2"></i>
              Add New User
            </Button>
          </Col>
        </Row>
      </div>

      {/* Filters Section */}
      <Row className="mb-4">
        <Col lg="8" className="mb-3 mb-lg-0">
          <Card className="shadow-sm">
            <CardBody>
              <InputGroup>
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>
                <Input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <label className="mb-0 me-3 text-nowrap">
                  <i className="bi bi-funnel me-2"></i>
                  Filter by Role:
                </label>
                <Input
                  type="select"
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="owner">Owner</option>
                  <option value="operator">Operator</option>
                </Input>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Users Table */}
      <Card className="shadow-sm">
        <CardBody className="p-0">
          <div style={{ overflowX: 'auto' }}>
            <Table hover responsive className="mb-0">
              <thead style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', color: 'white' }}>
                <tr>
                  <th className="border-0">User</th>
                  <th className="border-0">Email</th>
                  <th className="border-0">Phone</th>
                  <th className="border-0">Role</th>
                  <th className="border-0">Shop/Location</th>
                  <th className="border-0">Status</th>
                  <th className="border-0 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(u => (
                  <tr key={u.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                          style={{
                            width: '35px',
                            height: '35px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            fontSize: '1rem'
                          }}>
                          <i className={`bi ${getRoleIcon(u.role)}`}></i>
                        </div>
                        <strong>{u.name}</strong>
                      </div>
                    </td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>
                      <Badge color={getRoleBadgeColor(u.role)} pill>
                        {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                      </Badge>
                    </td>
                    <td>{u.shopName}</td>
                    <td>
                      <Badge color={u.status === 'active' ? 'success' : 'secondary'} pill>
                        {u.status === 'active' && <i className="bi bi-check-circle me-1"></i>}
                        {u.status === 'inactive' && <i className="bi bi-x-circle me-1"></i>}
                        {u.status.charAt(0).toUpperCase() + u.status.slice(1)}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex gap-1 justify-content-center">
                        <Button color="primary" size="sm" outline title="Edit">
                          <i className="bi bi-pencil-fill"></i>
                        </Button>
                        <Button color="danger" size="sm" outline title="Delete">
                          <i className="bi bi-trash-fill"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {filteredUsers.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-inbox" style={{ fontSize: '4rem', color: '#dee2e6' }}></i>
              <h4 className="mt-3 text-muted">No users found</h4>
              <p className="text-muted">Try changing your search or filter criteria</p>
            </div>
          )}
        </CardBody>
      </Card>
    </Container>
  );
};

export default Users;

