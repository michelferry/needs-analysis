import React from 'react';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/HighlightOff';


class PlayCardVideo extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick();
  };

  render() {
    let jsx = "";
    if(this.props.icon){
      switch(this.props.icon){
        case "play":
          jsx = <PlayIcon style={{height: "2rem", marginLeft: "1rem"}} />;
          break;
        case "close":
          jsx = <CloseIcon style={{height: "2rem", marginLeft: "1rem"}} />;
          break;
        default:
          jsx = <PlayIcon style={{height: "2rem", marginLeft: "1rem"}} />;
          break;
      }
    }
    return (
      <div className="PlayCardVideo__Container">
        <div onClick={this.props.handleClick}>
          <button className="PlayCardVideo__Button">{this.props.text} {jsx}</button>
        </div>
      </div>
    );
  }
}

export default PlayCardVideo;