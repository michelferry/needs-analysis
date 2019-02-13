import React from "react";
import PrimaryButton from "../ui-components/PrimaryButton";
import SecondaryButton from "../ui-components/SecondaryButton";
import NeedCard from "../ui-components/NeedCard";
import ZoomNeedCard from "../ui-components/ZoomNeedCard";
import {connect} from "react-redux";
import social from '../../img/chat.png';
import financing from '../../img/financing.png';
import help from '../../img/help.png';
import learning_pleasure from '../../img/change.png';
import working_conditions from '../../img/desktop.png';
import learning_by_doing from '../../img/learning-by-doing.png';
import training_duration from '../../img/training-duration.png';
import diploma from '../../img/diploma.png';
import job from '../../img/job.png';

const images = {
  social,
  financing,
  help,
  learning_pleasure,
  working_conditions,
  learning_by_doing,
  training_duration,
  diploma,
  job
}

class ResultsPage extends React.Component {
  constructor(props){
    super(props);
    this.firstname = this.props.answers["contact-details"].firstname === "" ? "Jean-Luc" : this.props.answers["contact-details"].firstname;
    this.state = {
      zoom: false,
      cardZoomed: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cardZoomed){
    if(this.state.zoom){
      this.setState((prevState) => ({
        zoom: !this.state.zoom,
      }))
    } else {
      this.setState(() => ({
        zoom: !this.state.zoom,
        cardZoomed: {
          ...cardZoomed
        }
      }))
    }
  }

  determineUserNeeds(){
    let needsUserScore = {};
    let needsMaxScore = {};
    for (let page of this.props.pages){
      for (let question in page.content){
        if(page.content[question].choices !== undefined){
          let maxScore = 0;
          for(let choice of page.content[question].choices){
            if(choice.need !== undefined){
              if(choice.value === this.props.answers[page.name][page.content[question].name]){
                if(needsUserScore[choice.need.name] === undefined){
                  needsUserScore[choice.need.name] = 0;
                }
                needsUserScore[choice.need.name] += choice.need.score;
              }
              if(choice.need.score > maxScore){
                maxScore = Math.max(maxScore, choice.need.score);
                if(needsMaxScore[choice.need.name] === undefined){
                  needsMaxScore[choice.need.name] = 0;
                }
                needsMaxScore[choice.need.name] += choice.need.score;
              }
            }
          }
        }
      }
    }
    let userNeeds = [];
    for(let need in needsUserScore){
      if(needsUserScore[need] / needsMaxScore[need] >= 0.5){
        userNeeds.push(need);
      }
    }
    //userNeeds=["financing", "social_interactions", "onboarding"];
    return userNeeds;
  }

  render(){

    const userNeeds = this.determineUserNeeds();
    return (
      <div>
        <div className="ResultsPage__Background">
          <h2>{this.firstname}, pour votre formation à venir, il semble que vous ayez besoin de :</h2>
          <div className="ResultsPage__NeedsContainer">
            {this.props.needsList.map((need) => {
              if(userNeeds.indexOf(need.name) !== -1){
                return <NeedCard 
                      handleClick={this.handleClick} 
                      key={need.name}
                      name={need.name}
                      title={need.title}
                      img={images[need.img]}
                      imgAlt={need.img}
                      boldSentence={need.boldSentence}
                      description={need.description}
                      videoURL={need.videoURL}
                    />;
              } else {
                return false;
              }
            })}
          </div>
          <div className="ResultsPage__CTA">
            <SecondaryButton link="/" text="Discutons-en"/>
            <PrimaryButton link="/" text="Commencer"/>
          </div>
        </div>
        {this.state.zoom && <ZoomNeedCard handleClick={this.handleClick} cardZoomed={this.state.cardZoomed}/>}
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    answers:state.answers
  };
};

export default connect(mapStateToProps)(ResultsPage);