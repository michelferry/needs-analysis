import React from "react";
import PrimaryButton from "../ui-components/PrimaryButton";
import SecondaryButton from "../ui-components/SecondaryButton";

const NavButtons = (props) => (
  <div className="NavButtons__Container">
    <SecondaryButton text="Précédent" link={props.pages[props.index-2] === undefined ? "/instructions" : "/"+props.pages[props.index-2].name} />
    <PrimaryButton text="Suivant" disabled={props.index >= props.step} link={props.pages[props.index] === undefined ? "/loading" : "/"+props.pages[props.index].name} />
  </div>
)

export default NavButtons;