import React, { Component } from "react";
import '../Login/Login.css';

export default class Register extends Component {
	state = {
        first_name: '',
        last_name: '',
		username: '',
        password: '',
        email: ''
	};

	handleChange = (e) => {
		// Spread state into new variable
		const NS = { ...this.state };
		// Change what needs to be changed
		NS[e.target.name] = e.target.value;
		// Set state with new version of state
		this.setState(NS);
    }
    

    clickSubmit = e => {
        e.preventDefault();
        
        const NS = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        this.addItem(NS);
        const newState = { ...this.state };
        newState.event = {};
        this.setState(newState);
    }

    addItem(data) {
        const url = "http://localhost:3001/users/register";
        
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(res => console.log('Success:', res))
          .catch(error => console.error('Error:', error));
    }


	render() {
		return (
			<div className="container form-container">
			<h1>Register</h1>
					<form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
									name="first_name"
									onChange={this.handleChange}
									value={this.state.first_name}
                                    id="first_name"
                                    type="text"
                                    className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input
									name="last_name"
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
									id="email"
									type="text"
									className="validate"
									name="email"
									onChange={this.handleChange}
									value={this.state.email}
								/>
								<label htmlFor="email">Email</label>
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
						<button className="btn waves-effect waves-light" onClick={(e) => this.clickSubmit(e)}>Submit</button>
					</form>
				</div>
		);
	}
}
