import logo from "../assets/logo/logo1.webp";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav gap-5">
          <li className="nav-item" role="button">
            <img src={logo} alt="" className="logo my-1" />
          </li>
          <li className="nav-item" role="button">
            Money Envelope
          </li>
          <li className="nav-item" role="button">
            Wedding invite video
          </li>
          <li className="nav-item" role="button">
            Hamper Note
          </li>
          <li className="nav-item" role="button">
            Itinerary
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
