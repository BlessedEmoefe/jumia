import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <p className="headerright">Deals on Smartphones | Up to 30% Off </p>
            <div className="headeright">
                <p></p>
                <p>See More > </p>
            </div>
        </div>
        )
    }
}
 
export default Header;