import React from "react";
import Jumbotron from "./jumbotron";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column h-100">
			<Navbar />
			<Jumbotron />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};
export default Home;
