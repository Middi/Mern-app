import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import axios from 'axios';

class App extends Component {

state= {
  loading: true,
  arr: [],
}

callAPI() {
  axios.get('http://localhost:3001/')
        .then(res => {
            console.log(res)
            if(res.data) {
                console.log('successful');
                this.setState({
                  arr: res.data,
                  loading: false
                });
            }
            else {
                console.log('Sign Up Error');
            }
        })
        .catch(err => {
            console.log('Sign up server error: ', err);
        })
}

componentWillMount() {
    this.callAPI();
}


  render() {
    const items = this.state.arr.map(item => (
      <p stuff={item} key={item.id}>{item.name}</p>
    ));
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              {!this.state.loading ? items : ''}
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
