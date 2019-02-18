import React from "react";
import { Link } from "react-router-dom";

class PrimaryButton extends React.Component {

  render(){

    let jsx = "";
    if(this.props.disabled) {
      jsx = <button className="primaryButton--disabled">{this.props.text}</button>;
    } else if(this.props.link === undefined) {
      jsx = <button className="primaryButton">{this.props.text}</button>;
    } else {
      jsx = <Link to={this.props.link}><button className="primaryButton">{this.props.text}</button></Link>;
    }

    return (
      <div className="primaryButton__Container">{jsx}</div>
    )
  }
  
}

export default PrimaryButton;