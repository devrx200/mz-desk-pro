import './AdminFooter.css';

const AdminFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-text">
            © {new Date().getFullYear()} Modern Dashboard
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-text">Made with ❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;

