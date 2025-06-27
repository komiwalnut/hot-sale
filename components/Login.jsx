import "./login.css";
import loginBg from "../images/login-page.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/homepage");
      }
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <main className="login-page">
      <img src={loginBg} alt="Hero Background" className="hero-img" />

      <div className="login-overlay">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign in</h2>

          <button className="google-btn" type="button">
            Continue with Google
          </button>

          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className="password-field">
            Your password
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="hide-text"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ cursor: "pointer", fontSize: "12px" }}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </label>

          <button type="button" className="forgot-password">
            Forgot your password?
          </button>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>

          <p className="sign-up-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </main>
  );
}
