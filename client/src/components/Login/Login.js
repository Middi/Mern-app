import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
			username: '',
			password: '',
			redirectTo: null
		}
		

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<h1>Login form</h1>
					<form>
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>
					<a href="/auth/google">
						{/* <GoogleButton /> */}
						google
					</a>
				</div>
			)
		}
	}
}

export default Login