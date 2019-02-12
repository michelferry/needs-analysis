import React from "react";
import InstructionObjective from "../ui-components/InstructionObjective";
import PrimaryButton from "../ui-components/PrimaryButton";

class InstructionsPage extends React.Component {

  render(){
    return (
      <div className="instructionsPage__background">
        <div className="instructionsPage__instructions">
          <h1>Analysons vos besoins</h1>
          <h3>Ensemble, nous allons:</h3>
          <InstructionObjective icon="success" text="Comprendre le contexte dans lequel vous donnez le meilleur de vous même."/>
          <InstructionObjective icon="magnifyingGlass" text="Identifier vos attentes vis à vis de votre formation à venir."/>
          <InstructionObjective icon="education" text="Déterminer vos besoins de formation."/>
          <div className="instructionsPage__cta">
            <PrimaryButton text="Commencer le test" link="/regularity" />
            <p className="instructionsPage__legend">Temps estimé: 5 min</p>
          </div>
        </div>
      </div>
    );
  }

}



export default InstructionsPage;