import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from "react-redux";

class SelectQuestion extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    this.props.handleQuestionChange({parent:this.props.parent, name:this.props.name, value});
  }

  render(){
    return(
      <div className="SelectQuestion__Container">
        <FormControl>
          <InputLabel htmlFor={this.props.name} style={{fontSize: "1.4rem"}}>{this.props.label}</InputLabel>
          <Select
            style={{fontSize: "1.4rem", width: 250, color: "rgba(0, 0, 0, .92)"}}
            value={this.props.answers[this.props.parent][this.props.name]}
            onChange={this.handleChange}
            inputProps={{
              name: this.props.name,
              id: this.props.name
            }}
          >
            {
              this.props.choices.map((choice, index) => {
                return <MenuItem key={choice.value} value={choice.value}>{choice.label}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    answers:state.answers
  };
};

export default connect(mapStateToProps)(SelectQuestion);