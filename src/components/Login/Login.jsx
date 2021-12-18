import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <h3 className="text-dark mb-4">Login</h3>
      <form>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Username"
          autoFocus
        />
      </form>
    </div>
  );
}

export default Login;
