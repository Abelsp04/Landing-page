import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import { Navbar } from "../component/navbar.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Card } from "../component/card.js";
import { Footer } from "../component/footer.js";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Card />
			<Card />
			<Card />
			<Card />
			<Footer />
		</div>
	);
}
