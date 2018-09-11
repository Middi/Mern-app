import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

state= {
  loading: true,
  arr: []
}

callAPI() {
    fetch("http://localhost:3001/")
        .then(res => res.json())
        .then(res => this.setState({
          arr: res,
          loading: false
        }));
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
              {!this.state.loading ? items : ''}
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
