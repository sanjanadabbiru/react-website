import React, { Component } from "react";
import "./PortfolioValue.css";
import {Navbar,Card,Nav,Button} from 'react-bootstrap'
export default class PortfolioValue extends Component {
  render() {
    return <div>

  <Navbar>
    <Navbar.Brand >TOTAL PORTFOLIO VALUE
    </Navbar.Brand>
  </Navbar>
  <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Holdings</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="#link">Prices</Nav.Link>
      </Nav.Item>
      
    </Nav>
  </Card.Header>
  <Card.Body>
  
    <Card.Title> this is the holdings page </Card.Title>
  </Card.Body>
</Card>
    </div>;
  }
}
