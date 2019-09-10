import React, { Component } from "react";
// import logo from './logo.svg';
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Menu from './components/Menu'
import PortfolioValue from './components/PortfolioValue'

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="flex-container">
          <div className="menu">
            <Menu/>
          </div>
          <div className="overview">Overview</div>
          <div className="portfoliovalue"><PortfolioValue/></div>
        </div>
        
      </>
    );
  }
}

export default App;
