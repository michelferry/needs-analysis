import React from "react";
import success from '../../img/success.png';
import magnifyingGlass from '../../img/magnifying-glass.png';
import education from '../../img/education.png';

const images = {
  success: success,
  magnifyingGlass: magnifyingGlass,
  education: education
}

const InstructionObjective = (props) => (
  <div className="instructionObjective__container">
    <img className="instructionObjective__icon" src={images[props.icon]} alt={props.icon} />
    <div className="instructionObjective__text">{props.text}</div>
  </div>
)

export default InstructionObjective;