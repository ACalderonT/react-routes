import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<>
			<Navbar className="nav-bar">
					<div>
						<Link to="/" className="brand-link">
							Happy Cake
						</Link>
					</div>
					<div className="nav-links-container">
						<Link to="/" className="nav-links">Home</Link>
						<Link to="/contact" className="nav-links">Contact</Link>
					</div>
			</Navbar>
		</>
	);
};

export default NavBar;
