import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import hambugarImage from "../assets/icons/menu-button-of-three-horizontal-lines.png";

import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import GalleryPage from "../components/GalleryPage";
import NotFoundPage from "../components/NotFoundPage";
import FormSucess from "../components/FormSuccess";

export default class AppRouter extends React.Component {
	state = {
		menuDrawerOpen: true
	};
	menuDrawerToggleHandler = () => {
		console.log(this.state);
		this.setState(prevState => {
			return { menuDrawerOpen: !prevState.menuDrawerOpen };
		});
	};
	render() {
		return (
			<BrowserRouter>
				<div className="whole-page wrapper">
					<div
						className={
							this.state.menuDrawerOpen
								? "header-side"
								: "header-side-visible"
						}
					>
						<Header />
					</div>
					<div className="content-side">
						<div>
							<img
								src={hambugarImage}
								alt="Menu"
								className="hambugar-image-css"
								onClick={this.menuDrawerToggleHandler}
							/>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route path="/about" component={AboutPage} />
								<Route
									exact
									path="/gallery"
									component={GalleryPage}
								/>
								<Route path="/contact" component={ContactPage} />
								<Route
									path="/FormSucess"
									component={FormSucess}
								/>
								<Route component={NotFoundPage} />
							</Switch>
						</div>
						<FooterSection />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
