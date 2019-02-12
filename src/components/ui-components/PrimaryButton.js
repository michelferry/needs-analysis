import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/HighlightOff';

class PrimaryButton extends React.Component {

  render(){

    let jsx = "";
    if(this.props.icon){
      switch(this.props.icon){
        case "play":
          jsx = <button className="primaryButton">{this.props.text} <PlayIcon style={{height: "2rem", marginLeft: "1rem"}} /></button>;
          break;
        case "close":
          jsx = <button className="primaryButton">{this.props.text} <CloseIcon style={{height: "2rem", marginLeft: "1rem"}} /></button>;
          break;
        default:
          jsx = <button className="primaryButton">{this.props.text}</button>;
          break;
      }
    } else if(this.props.disabled) {
      jsx = <button className="primaryButton--disabled">{this.props.text}</button>;
    } else {
      jsx = <Link to={this.props.link}><button className="primaryButton">{this.props.text}</button></Link>
    }

    return (
      <div>{jsx}</div>
    )
  }
  
}

export default PrimaryButton;