import React, { useState } from "react";
import "./Login.css";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [successmsg, setSuccessMsg] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await logIn(email, password);
      setSuccessMsg("Credentials verified. Redirecting...");

      setTimeout(() => {
        setSuccessMsg("");
        setLoading(false);
        navigate("/dashboard", { replace: true });
      }, 2000);
    } catch (err) {
      setError("Alert! You are not authorized");
      setLoading(false);
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <>
      <section className="login-page">
        <div className="login-container">
          <div className="login-header">
            <h1>Login</h1>
            <p>Sign in to your account to continue</p>
          </div>
          <form id="loginForm" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {successmsg && (
              <Alert
                variant="success"
                style={{ fontSize: "12px", textAlign: "center" }}
              >
                {successmsg}
              </Alert>
            )}
            <div className="input-group">
              <label for="email">Email</label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
              />
              <div className="error-message" id="emailError"></div>
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                placeholder="*********"
                required
              />
              <div className="error-message" id="passwordError"></div>
            </div>
        

            {loading === true ? (
                <>
                  <button disabled className="btn btn-primary w-100 py-3">
                    Loading...
                  </button>
                </>
              ) : (
                <>
                  <button type="submit" className="btn btn-primary w-100 py-3">
                    Log in
                  </button>
                </>
            )}
            
            
          </form>
          <div className="form-footer">
            <p>
              Forgot Password? <a href="#">Reset</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
