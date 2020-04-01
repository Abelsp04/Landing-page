import React from "react";
import ReactDom from "react-dom";

import "bootstrap";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Navbar
			</a>

			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						Features
					</a>
					<a className="nav-item nav-link" href="#">
						Pricing
					</a>
					<a
						className="nav-item nav-link disabled"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Disabled
					</a>
				</div>
			</div>
		</nav>
	);
}
