import React from 'react';
import PlayCardVideo from "../ui-components/PlayCardVideo";

class ZoomNeedCard extends React.Component {

  constructor(props){
    super(props);
    this.card = React.createRef()
    this.state = {
      displayVideo: false,
      width: 0,
      height: 0,
      buttonText: "Témoignage",
      buttonIcon: "play"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    
  }

  handleClick(){
    if(!this.state.displayVideo){
      this.setState(() => ({
        displayVideo: true,
        width: this.card.current.offsetWidth,
        height: this.card.current.offsetHeight,
        buttonText: "Fermer",
        buttonIcon: "close"
      }));
    } else {
      this.setState(() => ({
        displayVideo: false,
        width: 0,
        height: 0,
        buttonText: "Témoignage",
        buttonIcon: "play"
      }));
    }
  }

  render() {
    return (
      <div className="ZoomNeedCard__FullPage">
        <div onClick={this.props.handleClick} className="ZoomNeedCard__OpacityBackground"></div>
        <div className="ZoomNeedCard__Card">
          <div ref={this.card} className="ZoomNeedCard__Content">
            <div className="ZoomNeedCard__Title">{this.props.cardZoomed.title}</div>
            <img className="ZoomNeedCard__Icon" src={this.props.cardZoomed.img} alt={this.props.cardZoomed.imgAlt} />
            <div className="ZoomNeedCard__TextContent">
              <div className="ZoomNeedCard__BoldSentence">{this.props.cardZoomed.boldSentence}</div>
              <div className="ZoomNeedCard__Description">{this.props.cardZoomed.description}</div>
            </div>
            {
              this.props.cardZoomed.videoURL && 
              <div className="ZoomNeedCard_TestimonyVideo">
                {this.state.displayVideo && <iframe title={this.props.cardZoomed.name} width={this.state.width} height={this.state.height} src={this.props.cardZoomed.videoURL} allow="encrypted-media"></iframe>}
              </div>
            }
          </div>
          {this.props.cardZoomed.videoURL && <PlayCardVideo handleClick={this.handleClick} text={this.state.buttonText} icon={this.state.buttonIcon} />}
        </div>
      </div>
    );
  }
}

export default ZoomNeedCard;