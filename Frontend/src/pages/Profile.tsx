
function Profile() {
  return (
    <div className="dashboard">
      <h1>Student Profile</h1>
      <p>Manage your academic information and study preferences.</p>

      <div className="profile-card">
        <h2>Personal Information</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="profile-card">
        <h2>Academic Information</h2>

        <div className="form-group">
          <label>Highest Qualification</label>
          <select defaultValue="">
            <option value="" disabled>Select qualification</option>
            <option>SEE</option>
            <option>+2 / Higher Secondary</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Study Programme</label>
          <input
            type="text"
            placeholder="e.g. Computer Science"
          />
        </div>

        <button className="login-button" type="button">
          Save Profile
        </button>
      </div>
      
<div className="profile-card">
  <h2>Study Preferences</h2>

  <div className="form-group">
    <label>Preferred Study Country</label>
    <select defaultValue="">
      <option value="" disabled>Select a country</option>
      <option>Australia</option>
      <option>United Kingdom</option>
      <option>Canada</option>
      <option>USA</option>
      <option>Germany</option>
      <option>New Zealand</option>
    </select>
  </div>

  <div className="form-group">
    <label>Preferred Intake</label>
    <select defaultValue="">
      <option value="" disabled>Select intake</option>
      <option>January</option>
      <option>May</option>
      <option>September</option>
    </select>
  </div>

  <div className="form-group">
    <label>Estimated Annual Budget (NPR)</label>
    <select defaultValue="">
      <option value="" disabled>Select your budget</option>
      <option>Below 15 Lakhs</option>
      <option>15–25 Lakhs</option>
      <option>25–40 Lakhs</option>
      <option>40–60 Lakhs</option>
      <option>Above 60 Lakhs</option>
    </select>
  </div>

  <button className="login-button" type="button">
    Save Preferences
  </button>
</div>

    </div>
  );
}

export default Profile;
