import React from "react";
import SideBar from "../ui-components/SideBar";
import RadioQuestion from "../ui-components/RadioQuestion";
import TextQuestion from "../ui-components/TextQuestion";
import SelectQuestion from "../ui-components/SelectQuestion";
import NavButtons from "../ui-components/NavButtons";
import {connect} from "react-redux";
import {setStep} from "../../actions/step";
import {addAnswer} from "../../actions/answers";

class QuestionPage extends React.Component {

  constructor(props){
    super(props);
    this.name = this.props.page.name;
    this.content = this.props.page.content;
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  validationRules(){
    let rules = {};
    for(let question in this.content){
      if(this.content[question].validation !== undefined){
        rules[this.content[question].name] = new RegExp(this.content[question].validation);
      }
    }
    return rules;
  }

  handleQuestionChange({parent, name, value}){
    const rules = this.validationRules();
    this.props.dispatch(addAnswer({parent, name, value}));
    if(this.props.index === this.props.step || this.props.index === this.props.step - 1){
      let complete = true;
      for(let answer in this.props.answers[this.name]){
        if(this.props.answers[this.name][answer] === "" || (rules[answer] !== undefined && this.props.answers[this.name][answer].match(rules[answer]) === null)){
          complete = false;
        }
      }
      if(complete){
        this.props.dispatch(setStep(this.props.index+1));
      } else {
        this.props.dispatch(setStep(this.props.index));
      }
    }
  }

  render(){
    let pageContent = [];
    for (let property in this.content){
      if(property.match(/context/)){
        pageContent.push(<div key={this.content[property]} className="QuestionPage__Context">{this.content[property]}</div>);
      } else if(property.match(/radioQuestion/)){
        pageContent.push(<RadioQuestion 
          key={this.content[property].name}
          parent={this.name}
          name={this.content[property].name}
          question={this.content[property].text}
          choices={this.content[property].choices}
          handleQuestionChange = {this.handleQuestionChange}
        />);
      } else if(property.match(/textQuestion/)){
        pageContent.push(<TextQuestion 
          key={this.content[property].name}
          parent={this.name}
          name={this.content[property].name}
          label={this.content[property].label}
          validation={this.content[property].validation}
          validationHelper={this.content[property].validationHelper}
          handleQuestionChange = {this.handleQuestionChange}
        />);
      } else if(property.match(/selectQuestion/)){
        pageContent.push(<SelectQuestion 
          key={this.content[property].name}
          parent={this.name}
          name={this.content[property].name}
          label={this.content[property].label}
          choices={this.content[property].choices}
          handleQuestionChange = {this.handleQuestionChange}
        />);
      } else if(property.match(/notabene/)){
        pageContent.push(<div key={this.content[property]} className="QuestionPage__Notabene">{this.content[property]}</div>);
      }
    }
    return (
      <div>
        <SideBar index={this.props.index} step={this.props.step} pages={this.props.pages}/>
        <div className="QuestionPage__Content">
          {pageContent.map((content) => (content))}
          <NavButtons pages={this.props.pages} step={this.props.step} index={this.props.index} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    answers:state.answers,
    step: state.step
  };
};

export default connect(mapStateToProps)(QuestionPage);