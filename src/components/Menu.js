import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {ContextAPI} from '../ContextAPI'
import "./Menu.css";
import MenuItem from "../ReusableComponents/MenuItem/MenuItem";

 
  

  // state = {
  //   listItem: [
  //     { listName: "Omega Status", pressFunc: ()=>this.handleChange("hello") },
  //     {
  //       listName: "Transaction History",
  //       pressFunc: ()=>this.handleChange("world")
  //     }
  //   ]
  // };
 



export default function Menu() {
  const {func} = useContext(ContextAPI)
  return (
    <div>
      <>
        <MenuItem
          MenuHeader="PORTFOLIO"
          EventKey="1"
          IconName="fas fa-shield-alt"
        >
          {/* {this.state.listItem.map(list => {
            const func = list.pressFunc;
            return (
              <ListGroupItem onClick={list.pressFunc}>
                {list.listName}
              </ListGroupItem>
            );
          })} */}
           <ListGroupItem> Overview</ListGroupItem>
          <ListGroupItem onClick={func} >Omega Status</ListGroupItem>
          <ListGroupItem >Transaction History</ListGroupItem>
          <ListGroupItem >Performance Report</ListGroupItem>
          <ListGroupItem >Consolidated Taxes</ListGroupItem> 
        </MenuItem>

         <MenuItem MenuHeader="MARKETS" EventKey="1" IconName="far fa-building">
          <ListGroupItem>overview</ListGroupItem>
          <ListGroupItem>omega status</ListGroupItem>
          <ListGroupItem>transaction</ListGroupItem>
        </MenuItem>
        <MenuItem MenuHeader="FORUM" EventKey="1" IconName="far fa-comments">
          <ListGroupItem>Bronze Forum</ListGroupItem>
          <ListGroupItem>Silver Forum</ListGroupItem>
          <ListGroupItem>Gold Forum</ListGroupItem>
        </MenuItem>
        <MenuItem MenuHeader="ACCOUNTS" EventKey="1" IconName="fas fa-cog">
          <ListGroupItem>overview</ListGroupItem>
          <ListGroupItem>omega status</ListGroupItem>
          <ListGroupItem>transaction</ListGroupItem>
        </MenuItem> 
      </>
    </div>
  )
}

