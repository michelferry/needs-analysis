import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = (props) => (
  <div>
    <Link to={props.link}><button className="secondaryButton">{props.text}</button></Link>
  </div>
)

export default SecondaryButton;