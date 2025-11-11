import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { id: 1, name: 'Aadhaar Enrollment', icon: '🆔', price: 50, category: 'Government', popular: true },
    { id: 2, name: 'PAN Card Application', icon: '💳', price: 100, category: 'Government', popular: true },
    { id: 3, name: 'Passport Form', icon: '📘', price: 150, category: 'Government', popular: false },
    { id: 4, name: 'Black & White Print', icon: '🖨️', price: 2, category: 'Printing', popular: true },
    { id: 5, name: 'Color Print', icon: '🎨', price: 5, category: 'Printing', popular: true },
    { id: 6, name: 'Photocopy', icon: '📄', price: 1, category: 'Printing', popular: true },
    { id: 7, name: 'Scanning', icon: '📸', price: 5, category: 'Printing', popular: false },
    { id: 8, name: 'Internet (Per Hour)', icon: '🌐', price: 20, category: 'Internet', popular: true },
    { id: 9, name: 'Computer Usage', icon: '💻', price: 30, category: 'Internet', popular: false },
  ];

  return (
    <div className="services-container">
      <div className="page-header">
        <div>
          <h1>🛠️ Services</h1>
          <p>Manage your business services and pricing</p>
        </div>
        <button className="btn-primary">➕ Add Service</button>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            {service.popular && <span className="popular-badge">⭐ Popular</span>}
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="service-category">{service.category}</p>
            <div className="service-price">₹{service.price}</div>
            <div className="service-actions">
              <button className="btn-edit">✏️ Edit</button>
              <button className="btn-delete">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

