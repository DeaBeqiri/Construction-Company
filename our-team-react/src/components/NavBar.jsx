import logo from "../assets/Logo.png";

export default function NavBar() {
  return (
    <header id="navbar">
      <div className="logo">
        <a href="#section-main">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav>
        <a href="#" class="home">
          Home
        </a>
        <a href="#">About us</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="../our-team/our-team.html">Our Team</a>
        <a class="contact-btn" href="#">
          Contact us
        </a>
      </nav>

      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
