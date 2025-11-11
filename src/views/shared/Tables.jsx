import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Table
} from 'reactstrap';

const Tables = () => {
  const reportData = [
    { month: 'January', revenue: 45000, customers: 320, services: 1250 },
    { month: 'February', revenue: 52000, customers: 380, services: 1420 },
    { month: 'March', revenue: 48000, customers: 350, services: 1350 },
    { month: 'April', revenue: 61000, customers: 420, services: 1680 },
    { month: 'May', revenue: 58000, customers: 400, services: 1580 },
    { month: 'June', revenue: 65000, customers: 450, services: 1750 },
  ];

  // Calculate totals
  const totalRevenue = reportData.reduce((sum, row) => sum + row.revenue, 0);
  const totalCustomers = reportData.reduce((sum, row) => sum + row.customers, 0);
  const totalServices = reportData.reduce((sum, row) => sum + row.services, 0);
  const growthRate = 24; // Percentage

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
              <i className="bi bi-bar-chart-fill me-3" style={{ fontSize: '2.5rem' }}></i>
              Reports & Analytics
            </h1>
            <p className="text-white mb-0" style={{ opacity: 0.9 }}>
              View detailed business reports and analytics
            </p>
          </Col>
          <Col xs="12" md="4" className="text-md-end mt-3 mt-md-0">
            <Button color="light" size="lg">
              <i className="bi bi-download me-2"></i>
              Export Report
            </Button>
          </Col>
        </Row>
      </div>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col xl="3" lg="6" className="mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <div>
                  <h3 className="mb-0">₹{totalRevenue.toLocaleString('en-IN')}</h3>
                  <small className="text-muted">Total Revenue (6 months)</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" lg="6" className="mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <h3 className="mb-0">{totalCustomers.toLocaleString('en-IN')}</h3>
                  <small className="text-muted">Total Customers</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" lg="6" className="mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                  <i className="bi bi-tools"></i>
                </div>
                <div>
                  <h3 className="mb-0">{totalServices.toLocaleString('en-IN')}</h3>
                  <small className="text-muted">Services Completed</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" lg="6" className="mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div>
                  <h3 className="mb-0">+{growthRate}%</h3>
                  <small className="text-muted">Growth Rate</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Monthly Performance Table */}
      <Card className="shadow-sm">
        <CardBody>
          <h4 className="mb-4">
            <i className="bi bi-calendar-month me-2 text-primary"></i>
            Monthly Performance
          </h4>
          <div style={{ overflowX: 'auto' }}>
            <Table hover responsive className="mb-0">
              <thead style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', color: 'white' }}>
                <tr>
                  <th className="border-0">Month</th>
                  <th className="border-0">Revenue</th>
                  <th className="border-0">Customers</th>
                  <th className="border-0">Services</th>
                  <th className="border-0">Avg. per Customer</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.month}</strong></td>
                    <td className="text-success">
                      <i className="bi bi-currency-rupee"></i>
                      {row.revenue.toLocaleString('en-IN')}
                    </td>
                    <td>{row.customers}</td>
                    <td>{row.services}</td>
                    <td className="text-primary">
                      <i className="bi bi-currency-rupee"></i>
                      {Math.round(row.revenue / row.customers)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot style={{ background: '#f8f9fa', fontWeight: 'bold' }}>
                <tr>
                  <td>Total</td>
                  <td className="text-success">
                    <i className="bi bi-currency-rupee"></i>
                    {totalRevenue.toLocaleString('en-IN')}
                  </td>
                  <td>{totalCustomers.toLocaleString('en-IN')}</td>
                  <td>{totalServices.toLocaleString('en-IN')}</td>
                  <td className="text-primary">
                    <i className="bi bi-currency-rupee"></i>
                    {Math.round(totalRevenue / totalCustomers)}
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Tables;

