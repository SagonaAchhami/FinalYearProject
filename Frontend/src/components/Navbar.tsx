
type NavbarProps = {
  onProfileClick: () => void;
};

function Navbar({ onProfileClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        Abroguide<span>.</span>
      </h2>

      <div className="navbar-right">
        <button
          className="profile-nav-button"
          onClick={onProfileClick}
        >
          <span className="profile-icon">👤</span>
          My Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
