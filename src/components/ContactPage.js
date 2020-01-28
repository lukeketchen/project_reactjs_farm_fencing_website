import React from "react";

const encode = data => {
	return Object.keys(data)
		.map(
			key =>
				encodeURIComponent(key) +
				"=" +
				encodeURIComponent(data[key])
		)
		.join("&");
};

export default class ContactPage extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			phone: "",
			length: "",
			message: "",
			error: ""
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState(() => ({ error: "Please provide name!" }));
		} else if (!this.state.email) {
			this.setState(() => ({
				error: "Please provide an email!"
			}));
		} else if (!this.validateEmail(this.state.email)) {
			this.setState(() => ({
				error: "Please provide valid email!"
			}));
		} else if (!this.state.phone) {
			this.setState(() => ({
				error: "Please provide phone number!"
			}));
		} else if (!this.state.message) {
			this.setState(() => ({
				error: "Please provide a message!"
			}));
		} else {
			this.setState(() => ({
				name: "",
				email: "",
				phone: "",
				length: "",
				message: "",
				error: ""
			}));
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: encode({
					"form-name": "Contact-form",
					...this.state
				})
			})
				.then(() => alert("Thank you!"))
				.catch(error => alert(error));
		}
	};
	validateEmail = email => {
		var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};
	handleChange = e =>
		this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone, length, message } = this.state;
		return (
			<div className="contact-page ">
				<div className="contact-heading">
					<h1>Contact Us</h1>
				</div>
				<div className="contact-page-details-container">
					<h2>Contact us today</h2>
					<div className="contact-page-details-selection">
						<div>
							<h3>Phone</h3>
							<p>
								Call us now
								<a href="tel:0419156158"> 0419 156 158</a>
							</p>
						</div>
						<div>
							<h3>Email</h3>
							<p>Admin</p>
							<p>
								<a href="mailto:admin@ruralfencing.com">
									admin@ruralfencing.com.au
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="contact-page-mid-heading">
					<h2>Or via this contact form...</h2>
				</div>
				<div className="contactSection">
					{this.state.error && (
						<p className="contact-section-error">
							{this.state.error}
						</p>
					)}
					<form
						onSubmit={this.handleSubmit}
						className="contact-form"
					>
						<input
							type="hidden"
							name="form-name"
							value="Contact-form"
						/>
						<input
							type="text"
							placeholder="Name (required)"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							placeholder="Email (required)"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							placeholder="Phone Number (required)"
							name="phone"
							value={phone}
							onChange={this.handleChange}
						/>
						<input
							type="number"
							placeholder="Estimated Length (Optional)"
							name="length"
							value={length}
							onChange={this.handleChange}
						/>
						<textarea
							placeholder="Message text here"
							name="message"
							value={message}
							onChange={this.handleChange}
						/>
						<button type="submit">Send</button>
					</form>

					<h1>
						We are located in Ballarat and service Western/South
						Western Victoria
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d808174.0117360052!2d143.37368603594948!3d-37.69784923184938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1570424324054!5m2!1sen!2sau"
						title="googleMap"
					></iframe>
				</div>
			</div>
		);
	}
}
