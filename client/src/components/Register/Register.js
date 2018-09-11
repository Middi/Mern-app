import React, { Component } from "react";
import '../Login/Login.css';

export default class Register extends Component {
	state = {
        first_name: '',
        last_name: '',
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
			<h1>Register</h1>
					<form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
									name="first-name"
									onChange={this.handleChange}
									value={this.state.first_name}
                                    id="first_name"
                                    type="text"
                                    className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input
									name="last-name"
									onChange={this.handleChange}
									value={this.state.last_name}
                                    id="last_name"
                                    type="text"
                                    className="validate"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
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
