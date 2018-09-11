import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleChange = (e) => {
		// Spread state into new variable
		const NS = { ...this.state };
		// Change what needs to be changed
		NS[e.target.name] = e.target.value;
		// Set state with new version of state
		this.setState(NS);
	}

	render() {
		return (
			<div className="container form-container">
			<h1>Login</h1>
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input
									id="username"
									type="text"
									className="validate"
									name="username"
									onChange={this.handleChange}
									value={this.state.username}
								/>
								<label htmlFor="username">Username</label>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<input 
									id="password"
									onChange={this.handleChange}
									value={this.state.password}
									name="password"
									type="password"
									className="validate"
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
					</form>
				</div>
		);
	}
}
