import logo from "../assets/logo/logo1.webp";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
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
      </div>
    </nav>
  );
};

export default NavBar;
