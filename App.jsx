import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights/Highlights.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Marketplace from "./components/Marketplace.jsx";
import CartPage from "./components/CartPage";
import Login from "./components/Login"; 

import heroBg from "./images/hero-brown.png";
import highlights from "./data.js";
import products from "./products.js";
import { CartProvider } from "./components/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route
          path="/homepage"
          element={
            <>
              <Hero image={heroBg} />
              <Highlights data={highlights} />
              <Shop data={products} />
            </>
          }
        />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Login />} />
      </Routes>

      {!isLoginPage && <Footer />}

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
