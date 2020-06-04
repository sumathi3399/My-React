import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap/lib';
import logo from './logo.svg';
import './App.css';

class App extends Component{
 render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">MyApp</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
}

export default App;
