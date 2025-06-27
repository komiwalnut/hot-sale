import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Hot & Sale</h3>
          <p className="footer-text">
            Your destination for the hottest deals and 
            unbeatable value, all in one place.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <Link to="/marketplace"> 
              <li>Products</li>
            </Link>            
            <Link to="/cart"> 
              <li>Bag</li>
            </Link>
          </ul>
        </div>

        

        {/*Wag kalimutan yung icons */}
        <div className="footer-column">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><img src="../../images/fb-logo.png" alt="Facebook" /></a>
            <a href="#"><img src="../../images/ig-logo.png" alt="Instagram" /></a>
            <a href="#"><img src="../../images/twitter-logo.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hot & Sale. All rights reserved.</p>
      </div>
    </footer>
  );
}
