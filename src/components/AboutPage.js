import React from "react";
import woodenFence from "../assets/aboutImages/woden-fence.jpg";

const AboutPage = () => (
	<div className="about-page">
		<div className="about-heading">
			<h1>About</h1>
		</div>
		<div className="about-section">
			<p className="about-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam dictum molestie felis, ac dapibus enim molestie quis.
				Fusce quis tincidunt eros. Pellentesque pharetra risus
				enim, sit amet gravida lorem dictum et. Praesent et
				ullamcorper sapien, et pharetra nisi. Etiam pharetra
				malesuada libero id cursus. Vivamus purus tortor,
				pharetra at suscipit quis, maximus commodo mi. Nullam
				pharetra interdum vehicula. Pellentesque malesuada
				blandit fermentum. Phasellus ut placerat sapien.
			</p>
			<div className="about-img-container">
				<img
					src={woodenFence}
					alt="wooden Fence"
					className="about-img"
				/>
			</div>
			<p>
				Integer arcu ligula, porta sit amet tellus vitae,
				fringilla aliquet mauris. Donec sed ligula ut tellus
				cursus dignissim. Vivamus ultricies tincidunt lectus et
				fringilla. Etiam turpis arcu, vulputate ac lorem quis,
				convallis maximus libero. Interdum et malesuada fames ac
				ante ipsum primis in faucibus. Morbi lacinia quis mauris
				eu placerat. Nunc pulvinar dictum varius. Aenean tempus
				rutrum sapien quis facilisis. In ultrices neque a sapien
				vulputate, sit amet efficitur metus fermentum. Curabitur
				at elementum tellus. Maecenas interdum tristique sem,
				eget tincidunt purus fermentum nec.
			</p>
		</div>
	</div>
);
export default AboutPage;
