import React from 'react';
import BigProgressBar from "../ui-components/BigProgressBar";
import {connect} from "react-redux";

class LoadingPage extends React.Component {
  constructor(props){
    super(props);
    this.firstname = this.props.answers["contact-details"].firstname === "" ? "Jean-Luc" : this.props.answers["contact-details"].firstname;
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.props.history.push("/results")
  }

  render() {
    return (
      <div className="LoadingPage__Container">
        <h1>Merci {this.firstname} !</h1>
        <h2>Nous analysons votre profil d'apprenant...</h2>
        <BigProgressBar nextPage={this.nextPage} />
      </div>
    );
  }

}



const mapStateToProps = (state) => {
  return {
    answers:state.answers,
    step: state.step
  };
};

export default connect(mapStateToProps)(LoadingPage);