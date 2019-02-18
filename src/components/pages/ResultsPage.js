import React from "react";
import NeedCard from "../ui-components/NeedCard";
import ZoomNeedCard from "../ui-components/ZoomNeedCard";
import {connect} from "react-redux";

//IMAGES
import woman from '../../img/woman.png';
import social from '../../img/chat.png';
import financing from '../../img/financing.png';
import help from '../../img/help.png';
import learning_pleasure from '../../img/change.png';
import working_conditions from '../../img/desktop.png';
import learning_by_doing from '../../img/learning-by-doing.png';
import training_duration from '../../img/training-duration.png';
import diploma from '../../img/diploma.png';
import job from '../../img/job.png';
import social_white from '../../img/chat_white.png';
import financing_white from '../../img/financing_white.png';
import help_white from '../../img/help_white.png';
import learning_pleasure_white from '../../img/change_white.png';
import working_conditions_white from '../../img/desktop_white.png';
import learning_by_doing_white from '../../img/learning_by_doing_white.png';
import training_duration_white from '../../img/training_duration_white.png';
import diploma_white from '../../img/diploma_white.png';
import job_white from '../../img/job_white.png';


const images = {
  social,
  financing,
  help,
  learning_pleasure,
  working_conditions,
  learning_by_doing,
  training_duration,
  diploma,
  job,
  social_white,
  financing_white,
  help_white,
  learning_pleasure_white,
  working_conditions_white,
  learning_by_doing_white,
  training_duration_white,
  diploma_white,
  job_white
}

class ResultsPage extends React.Component {
  constructor(props){
    super(props);
    this.firstname = this.props.answers["contact-details"].firstname === "" ? "Jean-Luc" : this.props.answers["contact-details"].firstname;
    this.state = {
      zoom: false,
      cardZoomed: {},
      cardsViewed: [],
      cardAnimated: 1,
      height: 100,
      width: 60
    }
    this.handleClick = this.handleClick.bind(this);
    this.progressiveHeightChange = this.progressiveHeightChange.bind(this);
    this.progressiveWidthChange = this.progressiveWidthChange.bind(this);
  }

  handleClick(cardZoomed){
    if(this.state.cardsViewed.indexOf(cardZoomed.index) === -1){
      this.setState((prevState) => ({
        cardsViewed: prevState.cardsViewed.concat(cardZoomed.index),
      }));
    }
    if(cardZoomed.index === this.state.cardAnimated){
      let cardAnimated = this.state.cardAnimated;
      do {
        cardAnimated++;
      } while(this.state.cardsViewed.indexOf(cardAnimated) !== -1)
      this.setState((prevState) => ({
        cardAnimated: cardAnimated,
      }));
    }
    if(!this.state.zoom){
      this.setState((prevState) => ({
        zoom: true,
      }));
      this.progressiveHeightChange(35);
      this.progressiveWidthChange(90);
    }
    this.setState(() => ({
      cardZoomed: {
        ...cardZoomed
      }
    }));
    if(this.state.cardsViewed.length > 0){
      this.animateElement(".ZoomNeedCard__LeftContainerContent", ["slideInUp", "fast"]);
      this.animateElement(".ZoomNeedCard__RightContainerContent", ["slideInRight", "fast"]);
      setTimeout(() => {
        this.animateElement(".PlayCardVideo__Container", ["wobble", "fast"]);
      }, 800)
    }
    
  }

  animateElement(elementClass, animation){
    const element =  document.querySelector(elementClass);
    if(element !== null){
      element.classList.add('animated', ...animation);
      element.addEventListener('animationend', function() { 
        element.classList.remove('animated', ...animation);
      });
    }
  }

  progressiveHeightChange(target) {
    if(this.state.height > target){
      this.setState((prevState) => ({
        height: prevState.height - 1
      }), () => {
        setTimeout(() => {
          this.progressiveHeightChange(target);
        }, 10)
      });
    }
  }

  progressiveWidthChange(target) {
    if(this.state.width < target){
      this.setState((prevState) => ({
        width: prevState.width + 1
      }), () => {
        setTimeout(() => {
          this.progressiveWidthChange(target);
        }, 10)
      });
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
    //userNeeds = ["financing", "social_interactions" ,"onboarding", "learning_confidence", "short_training_duration", "diploma", "get_a_job", "working_conditions", "learning_by_doing"]
    return userNeeds;
  }

  render(){
    const userNeeds = this.determineUserNeeds();
    let cardIndex = 0;
    let heightStyle = {height: this.state.height+"vh"};
    let widthStyle = {width: this.state.width+"%"};
    let needsContainerStyle;
    let catchPhraseStyle;
    if(this.state.height === 35){
      needsContainerStyle = {height: "65%"};
      catchPhraseStyle = {height: "35%"}
    } else {
      needsContainerStyle = {height: "40%"};
      catchPhraseStyle = {height: "30%"};
    }
    return (
      <div>
        <div className="ResultsPage__Background">
          <div className="ResultsPage__UpperContainer" style={heightStyle}>
            <div className="ResultsPage__UpperLeftContainer"><img src={woman} alt="woman" /></div>
            <div className="ResultsPage__UpperRightContainer" style={widthStyle}>
              <div className="ResultsPage__CatchphraseContainer" style={catchPhraseStyle}>
                <h2 className="ResultsPage__Catchphrase">{this.firstname}, pour votre formation à venir, il semble que vous ayez besoin de :</h2>
              </div>    
              <div className="ResultsPage__NeedsContainer" style={needsContainerStyle}>
                {this.props.needsList.map((need) => {  
                  if(userNeeds.indexOf(need.name) !== -1){
                    cardIndex ++;
                    return <NeedCard 
                          handleClick={this.handleClick} 
                          key={cardIndex}
                          index={cardIndex}
                          name={need.name}
                          title={need.title}
                          img={images[need.img]}
                          imgWhite={images[need.img+"_white"]}
                          imgAlt={need.img}
                          displayIcon = {this.state.zoom}
                          boldSentence={need.boldSentence}
                          description={need.description}
                          videoURL={need.videoURL}
                          animated = {cardIndex === this.state.cardAnimated && this.state.cardsViewed.length === 0}
                          cardViewed = {this.state.cardsViewed.indexOf(cardIndex) !== -1}
                        />;
                  } else {
                    return false;
                  }
                })}
              </div>
            </div>
          </div>
          {this.state.zoom && <ZoomNeedCard height={100-this.state.height} cardZoomed={this.state.cardZoomed} displayCTA={this.state.cardsViewed.length === userNeeds.length}/>}
        </div>
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