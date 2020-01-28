import React from "react";
import ImageGallery from "react-image-gallery";
import barnClouds from "../assets/galleryImges/barnClouds.jpg";
import fenceAnimals from "../assets/galleryImges/fenceAnimals.jpg";
import sunsetFence from "../assets/galleryImges/sunsetFence.jpg";

const images = [
	{
		original: barnClouds,
		thumbnail: barnClouds
	},
	{
		original: fenceAnimals,
		thumbnail: fenceAnimals
	},
	{
		original: sunsetFence,
		thumbnail: sunsetFence
	}
];
const GaleryPage = () => (
	<div className="gallery-page">
		<div className="gallery-page-heading">
			<h1>Check out some of our work</h1>
		</div>
		<div className="gallery-images-container">
			<div className="gallery-images">
				<ImageGallery
					items={images}
					showFullscreenButton={false}
					showPlayButton={false}
				/>
			</div>
		</div>
	</div>
);
export default GaleryPage;
