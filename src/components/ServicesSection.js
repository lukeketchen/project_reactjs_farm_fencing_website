import React from "react";
import farmNightIMG from "../assets/servicesImages/farm-night.jpg";
import fenceGreenIMG from "../assets/servicesImages/fence-green.jpg";
import fenceSnowIMG from "../assets/servicesImages/fence-snow.jpg";
import gateBoltsIMG from "../assets/servicesImages/gate-bolts.jpg";
import horseIMG from "../assets/servicesImages/horse.jpg";
import horsesPaddockIMG from "../assets/servicesImages/horses-paddock.jpg";
import paddockGateIMG from "../assets/servicesImages/paddock-gate.jpg";

const ServicesSection = () => (
	<div className="services-section">
		<h1>Some of the services we offer</h1>
		<div className="Servises-gallery">
			<img
				src={farmNightIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">Post and Rail</h3>
			<img
				src={fenceGreenIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">
				Pre morticed post and rail
			</h3>
			<img
				src={fenceSnowIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">Rural and farm fencing</h3>
			<img
				src={gateBoltsIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">Equestrian fencing</h3>
			<img
				src={horseIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">Slashing and mulching</h3>
			<img
				src={horsesPaddockIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">
				Post driving property entrances
			</h3>
			<img
				src={paddockGateIMG}
				alt="barnClouds"
				className="service-item"
			/>
			<h3 className="service-item">
				All rural fence repairs, fence removal and fence line
				clearing
			</h3>
		</div>
		<h2>
			We have a wide range of services call us today to see what
			we can do for you
		</h2>
	</div>
);
export default ServicesSection;
