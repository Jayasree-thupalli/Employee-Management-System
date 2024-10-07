import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email not valid";
    }

    if (!formData.password || formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(validationErrors);

    if (isValid) {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");
        const users = response.data;
        const user = users.find((user) => user.email === formData.email);

        if (user) {
          if (user.password === formData.password) {
            alert("Login successfull");
            sessionStorage.setItem("username", user.username);
            navigate("/home");
          } else {
            setErrors({ password: "Wrong password" });
          }
        } else {
          setErrors({ email: "User not found" });
        }
      } catch (error) {
        setErrors({ email: "Error logging in. Please try again later." });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleStyle = {
    cursor: "pointer",
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#007bff", // Skyblue color for the eye icon
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h4 className="text-primary">Welcome back!</h4>

          <p
            style={{ fontSize: "15px", fontWeight: "normal", color: "initial" }}
          >
            Please login using your account{" "}
          </p>

          <div className="input">
            {/* Email */}
            <div className="mb-3 col-md-12 form-group">
              <label className="label">EMAIL/PHONENO/EMPID</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            {/* Password */}
            <div className="input mb-3 col-md-12 form-group">
              <label className="label">PASSWORD</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  style={toggleStyle}
                  className="togglePassword"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    style={{ color: "#007bff" }} // Skyblue color for the eye icon
                  />
                </span>
              </div>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="col-md-12 mt-2">
              <button className="btn btn-primary">LOGIN</button>
            </div>
          </div>
          <p className="text-left mt-3 text-secondary">
            <Link to="/registration" className="signup-link">
              Already have an Account signup?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
