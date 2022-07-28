import React from "react";
import './Button.css';

class Button extends React.Component{
  render() {
    return (
      <button className="myButton">
        {this.props.children}
      </button>
    )
  }
}

export default Button;