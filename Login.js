import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";



function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!username || !password) {
      setError("Username and password are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 700));
      if (username === "admin" && password === "1234") {
        navigate("/dashboard");
      } else if (username === "dharun" && password === "1234") {
        navigate("/mains");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="card"
      style={{ width: "24rem", margin: "100px auto", boxSizing: "border-box", padding: "18px" }}
      onSubmit={handleLogin}
      autoComplete="off"
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <div className="forgot-password" id="tnb-login-dropdown-reset-password" style={{ marginBottom: "10px", color: "#888", fontSize: "0.95em" }}>
        <Link to="/reset-password" style={{ color: "#007bff", textDecoration: "underline", cursor: "pointer" }}>
          Forgot your password?
        </Link>
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{ width: "100%", padding: "10px", background: loading ? "#ccc" : "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
