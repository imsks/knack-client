const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a className="navbar__logo__link" href="/">
          Knack
        </a>
      </div>
      <div className="navbar__links">
        <a href="/survey/create">
          <button className="btn btn-sm navbar__links__button">
            Create survey
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
