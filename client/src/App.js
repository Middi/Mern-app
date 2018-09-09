import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

state= {
  arr: [{
    name: 'loading'
  }]
}

callAPI() {
    fetch("http://localhost:3001/")
        .then(res => res.json())
        .then(res => this.setState({ arr: res }));
}
componentWillMount() {
    this.callAPI();
}

  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <p>{this.state.arr[0].name}</p>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
