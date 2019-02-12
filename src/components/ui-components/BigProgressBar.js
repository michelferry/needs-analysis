import React from 'react';

class BigProgressBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      percent: 0
    }
    this.progressIncrease = this.progressIncrease.bind(this);
  }

  componentDidMount(){
    this.progressIncrease(100);
  }

  progressIncrease(target){
    if(this.state.percent < target){
      this.setState((prevState) => ({
        percent: prevState.percent + 0.2
      }), () => {
        setTimeout(() => {
          this.progressIncrease(target);
        }, 7)
      });
    } else {
      this.props.nextPage();
    }
  }

  render(){
    return (
      <div className="progress-bar">
        <div className="filler" style = {{width: `${this.state.percent}%`}}></div>
      </div>
    )
  }
}

export default BigProgressBar;