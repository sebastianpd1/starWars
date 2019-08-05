import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="btn btn-primary">Go to Home</span>
				</Link>
				<Link to="/favorites">
					<span className="btn btn-primary">Go to Favorites</span>
				</Link>
			</nav>
		);
	}
}
