import React from 'react';
import PrimaryButton from "../ui-components/PrimaryButton";


class PlayCardVideo extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick();
  };

  render() {
    return (
      <div className="PlayCardVideo__Container">
        <div onClick={this.props.handleClick}>
          <PrimaryButton link ="/" icon={this.props.icon} text={this.props.text}/>
        </div>
      </div>
    );
  }
}

export default PlayCardVideo;