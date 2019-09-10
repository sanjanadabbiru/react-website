import React, { Component } from 'react'
import {Accordion,ListGroup,Card,ListGroupItem} from 'react-bootstrap'
export default class MenuItem extends Component {
    render() {
        const {MenuHeader,children,EventKey,icon,IconName,pressFunc} = this.props;
        return (
            <div className="portfolio">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={EventKey}>
                <i className={IconName}></i> {MenuHeader} <i class="fas fa-sort-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={EventKey}>
                  <Card.Body>
                  <div>
                  <ListGroup className="list-group-flush">
        {children}
      </ListGroup>
      </div>
                      </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        )
    }
}
