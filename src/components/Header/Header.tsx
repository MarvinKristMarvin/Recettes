import "./Header.css";
import logo from "/images/logo.webp";

function Header() {
	return (
		<div className="Header">
			<img src={logo} alt="logo" />
			<form className="formContainer">
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="button">OK</button>
			</form>
		</div>
	);
}

export default Header;
