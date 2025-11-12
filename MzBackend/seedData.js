import { connectDB } from './config/database.js';
import { User, Customer, Service } from './models/index.js';

const seedData = async () => {
  try {
    console.log('🌱 Seeding database...\n');

    // Connect to database
    await connectDB();

    // Create Admin User
    console.log('Creating admin user...');
    const admin = await User.create({
      username: 'admin',
      email: 'admin@mzdesk.com',
      password: 'admin123',
      fullName: 'Admin User',
      phone: '9876543210',
      role: 'admin',
    });
    console.log('✅ Admin user created');

    // Create Owner User
    console.log('Creating owner user...');
    await User.create({
      username: 'owner',
      email: 'owner@mzdesk.com',
      password: 'owner123',
      fullName: 'Owner User',
      phone: '9876543211',
      role: 'owner',
    });
    console.log('✅ Owner user created');

    // Create Operator User
    console.log('Creating operator user...');
    await User.create({
      username: 'operator',
      email: 'operator@mzdesk.com',
      password: 'operator123',
      fullName: 'Operator User',
      phone: '9876543212',
      role: 'operator',
    });
    console.log('✅ Operator user created\n');

    // Create Sample Customers
    console.log('Creating sample customers...');
    await Customer.bulkCreate([
      {
        name: 'Rajesh Kumar',
        email: 'rajesh@example.com',
        phone: '9876543213',
        address: 'Andheri, Mumbai, Maharashtra',
        aadhaarNumber: '1234-5678-9012',
        panNumber: 'ABCDE1234F',
        customerType: 'regular',
      },
      {
        name: 'Priya Sharma',
        email: 'priya@example.com',
        phone: '9876543214',
        address: 'Bandra, Mumbai, Maharashtra',
        customerType: 'vip',
      },
      {
        name: 'Tech Solutions Pvt Ltd',
        email: 'contact@techsolutions.com',
        phone: '9876543215',
        address: 'Powai, Mumbai, Maharashtra',
        customerType: 'corporate',
      },
    ]);
    console.log('✅ Sample customers created\n');

    // Create Services
    console.log('Creating services...');
    await Service.bulkCreate([
      // Printing Services
      {
        serviceName: 'Black & White Printing',
        category: 'printing',
        description: 'A4 size B&W printing',
        basePrice: 2.00,
        unit: 'per_page',
        taxRate: 18.00,
      },
      {
        serviceName: 'Color Printing',
        category: 'printing',
        description: 'A4 size color printing',
        basePrice: 5.00,
        unit: 'per_page',
        taxRate: 18.00,
      },
      // Scanning Services
      {
        serviceName: 'Document Scanning',
        category: 'scanning',
        description: 'A4 size document scanning',
        basePrice: 3.00,
        unit: 'per_page',
        taxRate: 18.00,
      },
      // Xerox Services
      {
        serviceName: 'Xerox Copy',
        category: 'xerox',
        description: 'A4 size xerox copy',
        basePrice: 1.50,
        unit: 'per_page',
        taxRate: 18.00,
      },
      // Lamination
      {
        serviceName: 'Lamination A4',
        category: 'lamination',
        description: 'A4 size lamination',
        basePrice: 20.00,
        unit: 'per_item',
        taxRate: 18.00,
      },
      // Binding
      {
        serviceName: 'Spiral Binding',
        category: 'binding',
        description: 'Spiral binding for documents',
        basePrice: 50.00,
        unit: 'per_item',
        taxRate: 18.00,
      },
      // Government Forms
      {
        serviceName: 'Passport Form',
        category: 'government_forms',
        description: 'Passport application form filling',
        basePrice: 100.00,
        unit: 'per_form',
        taxRate: 18.00,
      },
      // Aadhaar Services
      {
        serviceName: 'Aadhaar Print',
        category: 'aadhaar_services',
        description: 'Aadhaar card printing',
        basePrice: 10.00,
        unit: 'per_item',
        taxRate: 18.00,
      },
      {
        serviceName: 'Aadhaar Update',
        category: 'aadhaar_services',
        description: 'Aadhaar details update',
        basePrice: 50.00,
        unit: 'per_service',
        taxRate: 18.00,
      },
      // PAN Services
      {
        serviceName: 'PAN Card Application',
        category: 'pan_services',
        description: 'New PAN card application',
        basePrice: 150.00,
        unit: 'per_application',
        taxRate: 18.00,
      },
      // Internet Cafe
      {
        serviceName: 'Internet Usage',
        category: 'internet_cafe',
        description: 'Computer with internet access',
        basePrice: 30.00,
        unit: 'per_hour',
        taxRate: 18.00,
      },
    ]);
    console.log('✅ Services created\n');

    console.log('🎉 Database seeded successfully!\n');
    console.log('📝 Login Credentials:');
    console.log('   Admin:    admin@mzdesk.com / admin123');
    console.log('   Owner:    owner@mzdesk.com / owner123');
    console.log('   Operator: operator@mzdesk.com / operator123\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();

