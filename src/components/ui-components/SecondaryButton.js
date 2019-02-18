import React from "react";
import { Link } from "react-router-dom";

class SecondaryButton extends React.Component {

  render(){

    let jsx = "";
    if(this.props.link === undefined) {
      jsx = <button className="secondaryButton">{this.props.text}</button>;
    } else {
      jsx = <Link to={this.props.link}><button className="secondaryButton">{this.props.text}</button></Link>;
    }

    return (
      <div className="secondaryButton__Container" onClick={this.props.handleClick}>{jsx}</div>
    )
  }
  
}

export default SecondaryButton;