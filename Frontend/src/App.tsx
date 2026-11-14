
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      {currentPage === "login" ? (
        <div>
          <Login onLogin={() => setCurrentPage("dashboard")} />

          <p style={{ textAlign: "center", marginTop: "-30px" }}>
            New to Abroguide?{" "}
            <button onClick={() => setCurrentPage("register")}>
              Create an account
            </button>
          </p>
        </div>
      ) : currentPage === "register" ? (
        <div>
          <Register />

          <p style={{ textAlign: "center", marginTop: "-30px" }}>
            Already have an account?{" "}
            <button onClick={() => setCurrentPage("login")}>
              Sign in
            </button>
          </p>
        </div>
      ) : currentPage === "profile" ? (
        <div>
          <Profile />

          <button
            onClick={() => setCurrentPage("dashboard")}
            style={{ margin: "20px" }}
          >
            Back to Dashboard
          </button>
        </div>
     ) : (
  <div>
    <Navbar onProfileClick={() => setCurrentPage("profile")} />
    <Dashboard />
  </div>
)}
    </>
  );
}

export default App;
