
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Abroguide!</h1>

      <p>Your journey to studying abroad starts here.</p>

      <div className="dashboard-welcome">
        <h2>Plan Your Study Abroad Journey</h2>

        <p>
          Explore universities, discover study destinations,
          and find opportunities that match your goals.
        </p>

        <button>Get Started</button>
      </div>

      <div className="profile-card">
        <h2>Student Profile</h2>

        <p><strong>Name:</strong> Student Name</p>
        <p><strong>Email:</strong> student@example.com</p>
        <p><strong>Study Interest:</strong> Not added yet</p>

        <button>Complete Profile</button>
      </div>
    </div>
  );
}

export default Dashboard;
