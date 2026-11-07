
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      {currentPage === "login" ? (
        <div>
          <Login />
          <p style={{ textAlign: "center", marginTop: "-30px" }}>
            New to Abroguide?{" "}
            <button onClick={() => setCurrentPage("register")}>
              Create an account
            </button>
          </p>
        </div>
      ) : (
        <div>
          <Register />
          <p style={{ textAlign: "center", marginTop: "-30px" }}>
            Already have an account?{" "}
            <button onClick={() => setCurrentPage("login")}>
              Sign in
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default App;
