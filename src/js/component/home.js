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
			<Card
				title="Bob Dylan"
				imageUrl="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
				description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonLabel="Go to wikipedia"
			/>
			<Card
				title="Albert Einstein"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg"
				description="Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics)."
				buttonUrl="https://en.wikipedia.org/wiki/Albert_Einstein"
				buttonLabel="Go to wikipedia"
			/>
			<Card
				title="Isaac Newton"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg"
				description="Isaac Newton ( Woolsthorpe , Lincolnshire , December 25, 1642 Jul. / 4 as January  as  1643 greg. - Kensington , London , on March 20 . July / March 31, 1727 . Greg ) was a physicist , theologian , inventor , alchemist and English mathematician ."
				buttonUrl="https://en.wikipedia.org/wiki/Isaac_Newton"
				buttonLabel="Go to wikipedia"
			/>
			<Footer />
		</div>
	);
}
