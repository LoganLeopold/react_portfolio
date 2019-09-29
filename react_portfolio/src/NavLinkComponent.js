import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLinkComponent extends Component {
  constructor() {
    const isFalse = () => {
        return false;
      };
    super();
    this.state = {
      class: "",
      name: "",
      active: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this);
  }

  componentDidMount() {
    
    const isFalse = () => {
      return false;
    };

    this.setState({
        class: "masterLink",
        name: this.props.linkname,
        active: isFalse,
    })

  }

  mouseHovers(event) {
    event.preventDefault();

    const activateHover = () => {
      if (this.props.mobile) {
        console.log(this.props.mobile);
        return false;
      } else {
        console.log(this.props.mobile);
        return true;
      }
    };

    this.setState({
        class: "masterLink",
        active: activateHover,
    });
  }

  mouseExits(event) {
    event.preventDefault();

    this.setState({
      class: "masterLink",
      active: false,
    });
  }

  render() {

    var navHover = {
        margin: "0 4vw",
        padding: "0",

        color: 'rgb(0,0,0,0)',
        fontSize: "1.75vw",
        fontWeight: "bold",
        textShadow: "0px 1.5px 2px rgb(0, 0, 0, 0)",

        display: "flex",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",

        height: "20vh",
        width: "9vw",

        textDecoration: "none",

        backgroundPosition: "center center",
        backgroundSize: "contain"
      }
      
      return (
      
        <div className="linkWrapper">
                <NavLink
                    className={this.state.class}
                    activeStyle={{ ...navHover}}
                    style={{
                    background: `url(${this.props.image}) no-repeat`,
                    backgroundSize: 0
                    }}
                    isActive={this.state.active}
                    name={this.state.name}
                    to={this.props.to}
                    onMouseEnter={this.mouseHovers}
                    onMouseLeave={this.mouseExits}
                >
                    {this.state.name}
                </NavLink>
        </div>
      )
   }
}

export default NavLinkComponent;
