import "./Header.css";
import logo from "/images/logo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/accueil">
        <img src={logo} alt="logo" />
      </Link>

      <form className="formContainer">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">OK</button>
      </form>
    </div>
  );
}

export default Header;
