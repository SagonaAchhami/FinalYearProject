
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

      <div className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-grid">
          <div className="action-card">
            <h3>Explore Universities</h3>
            <p>Discover universities for your future studies.</p>
          </div>

          <div className="action-card">
            <h3>Explore Countries</h3>
            <p>Find the right study destination for you.</p>
          </div>

          <div className="action-card">
            <h3>Find Programmes</h3>
            <p>Explore courses that match your interests.</p>
          </div>

          <div className="action-card">
            <h3>AI Counselling</h3>
            <p>Get guidance for your study abroad journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
