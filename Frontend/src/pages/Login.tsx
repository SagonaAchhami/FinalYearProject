import { useState } from "react";
import type { FormEvent } from "react";

function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password entered");

  onLogin();
};

  return (
    <div className="login-page">
      <div className="login-container">

        <h1 className="logo">Abroguide<span>.</span></h1>

        <h2>Welcome Back!</h2>
        <p className="subtitle">
          Sign in to continue your study abroad journey.
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

        </form>

        <p className="register-text">
          Don't have an account? <span>Create one soon!</span>
        </p>

      </div>
    </div>
  );
}

export default Login;
