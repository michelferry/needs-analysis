import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import {connect} from "react-redux";

class TextQuestion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: false,
      errorText: ""
    }
    this.validationRegex = new RegExp(this.props.validation);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toTitleCase(str) {
    return str.replace(/\b\w/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  handleChange(e){
    let value = e.target.value;
    if(this.props.name !== "email"){
      value = this.toTitleCase(value);
    } else if (this.props.name === "email"){
      value = value.toLowerCase();
    }
    if(value.match(this.validationRegex) !== null){
      this.setState(() => ({
        error: false,
        errorText: ""
      }));
    }
    this.props.handleQuestionChange({parent:this.props.parent, name:this.props.name, value:value});
  }

  handleBlur(e){
    let value = e.target.value;
    let error, errorText;
    if(value.match(this.validationRegex) !== null){
      error = false;
      errorText = "";
    } else {
      error = true;
      errorText = this.props.validationHelper;
    }
    this.setState(() => ({
      error: error,
      errorText: errorText
    }));
  }

  render(){

    return (
      <div className="TextQuestion__Container">
        <TextField
          required
          id={this.props.name}
          label={this.props.label}
          value={this.props.answers[this.props.parent][this.props.name]}
          margin="normal"
          InputProps={{
            style: {fontSize: "1.4rem", width: 250, color: "rgba(0, 0, 0, .92)"} 
          }}
          InputLabelProps={{
            style: {fontSize: "1.4rem"} 
          }}
          onBlur = {this.handleBlur}
          onChange = {this.handleChange}
        />
        {this.state.error && <div className="TextQuestion__HelperText"><FormHelperText 
        style={{fontSize: "1.2rem", color: "red"}}
          >{this.state.errorText}
        </FormHelperText></div>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    answers:state.answers
  };
};

export default connect(mapStateToProps)(TextQuestion);