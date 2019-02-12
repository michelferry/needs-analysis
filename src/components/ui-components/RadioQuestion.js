import React from "react";
import {connect} from "react-redux";

class RadioQuestion extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    this.props.handleQuestionChange({parent:this.props.parent, name:this.props.name, value});
  }

  render(){
    return (
      <div className="QuestionPage__QuestionSection">
        <div className="QuestionPage__RadioLabel">{this.props.question}</div>
        {
          this.props.choices.map((choice, index) => {
            let checked = "";
            if(this.props.answers[this.props.parent][this.props.name] === choice.value){
              checked = "checked";
            }
            return <label className="container" key={index}>{choice.label}
              <input onChange={this.handleChange} type="radio" name={this.props.name} value={choice.value} checked={checked} 
              data-needname={choice.need !== undefined ? choice.need.name : ""} data-needscore={choice.need !== undefined ? choice.need.score : ""} />
              <span className="checkmark"></span>
            </label>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answers:state.answers
  };
};

export default connect(mapStateToProps)(RadioQuestion);