import React, { Component } from "react";
import "./NavLink.css";

class NavLink extends Component {
  constructor() {
    const isFalse = () => {
        return false;
      };
    super();
    this.state = {
      class: "masterLink",
      name: this.props.name,
      active: isFalse,
    };
  }

  componentDidMount() {
    
    const isFalse = () => {
      return false;
    };

  }

  mouseHovers(event) {
    event.preventDefault();

    this.setState({
        class: "masterLink",
        name: this.props.name,
        active: activateHover,
    });
  }

  mouseExits(event) {
    event.preventDefault();

    const isFalse = () => {
      return false;
    };

    this.setState({
      [event.target.name]: ["masterLink", event.target.name, isFalse]
    });
  }

  render() {

    var navHover = {
        // margin: "0 4vw",
        // padding: "0",

        color: 'rgb(0,0,0,0)',
        // fontSize: "1.75vw",
        // fontWeight: "bold",
        textShadow: "0px 1.5px 2px rgb(0, 0, 0, 0)",

        // display: "flex",
        // textAlign: "center",
        // alignContent: "center",
        // alignItems: "center",

        // height: "20vh",
        // width: "9vw",

        // textDecoration: "none",

        backgroundPosition: "center center",
        backgroundSize: "contain"
      }
      
      return (
      
        <div className="linkWrapper">
          <NavLink
              className={this.state.class}
              activeStyle={{ ...navHover}}
              style={{
                background: `url(${this.props._____}) no-repeat`,
                backgroundSize: 0
              }}
              isActive={this.state.active}
              name={this.props.name}
              to={`/${this.props.name}`}
              onMouseEnter={this.mouseHovers}
              onMouseLeave={this.mouseExits}
          >
              {this.props.name}
          </NavLink>
        </div>
      )
   }
}

// export default NavLink;x
