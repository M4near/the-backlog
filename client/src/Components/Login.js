import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div class="login-bg">
      <h1 class="login-label"> Log In:</h1>
    <form onSubmit={handleSubmit}>
      <formField>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </formField>
      <formField>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </formField>
      <formField>
        <button class="btn btn-primary btn-block btn-large" variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </formField>
      <formField>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </formField>
    </form>

    <h2 class="signup-label">If you do not have an account, please click the below button to sign up!</h2>

    <Link to="/signup"><button>Sign Up</button></Link>
   
    </div>
    
  );
}

export default Login;