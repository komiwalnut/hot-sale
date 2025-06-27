import { Link } from "react-router-dom";
import logOutIcon from "../images/logout-icon.png";
import brandLogo from "../images/hs-logo.png"
import bagIcon from "../images/bag-icon.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={brandLogo} alt="fakeStore Logo" className="logo-img" />
        <span><strong>hot</strong><em>&</em>Sale</span>
      </div>

      <nav className="nav-links">
        <Link to="/homepage">Home</Link>
        <Link to="/marketplace">Products</Link>    
      </nav>

      <div className="icons">
        <Link to="/cart">
          <img src={bagIcon} alt="Shopping Bag" className="icon" />
        </Link>
        <Link to="/">
          <img src={logOutIcon} alt="Search" className="icon" />
        </Link>       
      </div>
    </header>
  );
}

export default Header;
