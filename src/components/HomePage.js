import React from "react";
import { Link } from "react-router-dom";
import ServicesSection from "./ServicesSection";
import DialBeforeYouDig from "./DialBeforeDig";
import fenceHillIMG from "../assets/servicesImages/fence-hills.jpg";

const HomePage = () => (
	<div className="home-page">
		<div className="home-section">
			<div className="home-top-row">
				<h1>Welcome to</h1>
				<h1>Rural Fencing Contractors</h1>
			</div>
			<div className="home-main-section">
				<img src={fenceHillIMG} alt="wooden Pailing Fence" />
				<div className="home-mid-row">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Donec in porta purus. Mauris lacinia interdum
						laoreet. Suspendisse efficitur suscipit gravida.
						Integer gravida pellentesque condimentum. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Aenean
						vestibulum enim at nunc vehicula, quis volutpat
						lectus vestibulum. Proin ut porttitor elit, sed
						venenatis risus. Aenean ac velit eget libero euismod
						maximus. Ut sed risus ipsum. Nullam egestas aliquam
						venenatis.
					</p>
				</div>
				<ServicesSection />
				<Link to={"/contact"} id="link">
					<button className="home-main-section-button">
						Contact us here
					</button>
				</Link>
				<div className="home-bottom-row">
					<DialBeforeYouDig />
				</div>
			</div>
		</div>
	</div>
);
export default HomePage;
