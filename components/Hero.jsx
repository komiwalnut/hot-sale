import { Link } from "react-router-dom";

function Hero({ image, showButton = true, imageClass = "" }) {
  return (
    <section className="hero-container">
      <img src={image} alt="Hero Background" className={`hero-img ${imageClass}`} />
      {showButton && (
        <Link to="/marketplace">
          <button className="shop-button">SHOP NOW</button>
        </Link>
      )}
    </section>
  );
}

export default Hero;
