import React from "react";
import dialImage from "../assets/Dial-Before-you-Dig-1024x576.jpg";

const DialBeforeDig = () => (
	<div className="dial-before-dig-main">
		<h2>The first step is to check whats under the ground</h2>
		<a
			href="https://www.1100.com.au/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={dialImage} alt="Dial Before You Dig Logo" />
		</a>
	</div>
);
export default DialBeforeDig;
