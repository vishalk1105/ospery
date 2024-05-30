import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.webp";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <img src={logo} alt="" className="logo my-1" />
            </li>
            <li role="button">
              <Link className="nav-item" to={"/"}>
                Money Envelope
              </Link>
            </li>
            <li role="button">
              <Link to={"/wedding-video"} className="nav-item ">
                Wedding invite video
              </Link>
            </li>
            <li className="nav-item" role="button">
              <Link to={"/hamper-note"} className="nav-item ">
                Hamper Note
              </Link>
            </li>
            <li className="nav-item" role="button">
              <Link to={"/itinerary"} className="nav-item ">
                Itinerary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
