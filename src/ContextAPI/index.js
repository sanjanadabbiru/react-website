import React, { Component } from 'react'


export const ContextAPI = React.createContext();

export class ContextAPIProvider extends Component {
    state = {
        
    }
    handleClick = () => {
        return console.log("hello");
        }
    render() {
       
        return (
            <ContextAPI.Provider value={{
                ...this.state,
                func:this.handleClick
            }}>
                {this.props.children}
            </ContextAPI.Provider>
        )
    }
}

