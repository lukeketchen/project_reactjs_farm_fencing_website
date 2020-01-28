import React from "react";
import NotFoundImg from "../assets/404.png";

const NotFoundPage = () => (
	<div className="not-found-page">
		<h1>Sorry... </h1>
		<img src={NotFoundImg} alt="Not Found" />
		<h1>No Page Found</h1>
	</div>
);
export default NotFoundPage;
