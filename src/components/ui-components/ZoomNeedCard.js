import React from 'react';
import PlayCardVideo from "../ui-components/PlayCardVideo";
import PrimaryButton from "../ui-components/PrimaryButton";
import SecondaryButton from "../ui-components/SecondaryButton";

class ZoomNeedCard extends React.Component {

  constructor(props){
    super(props);
    this.container = React.createRef()
    this.state = {
      displayVideo: false,
      width: 0,
      height: 0,
      buttonText: "Témoignage",
      buttonIcon: "play"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(!this.state.displayVideo){
      this.setState(() => ({
        displayVideo: true,
        width: this.container.current.offsetWidth,
        height: this.container.current.offsetHeight,
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

  animateElement(elementClass, animation){
    const element =  document.querySelector(elementClass);
    if(element !== null){
      element.classList.add('animated', ...animation);
      element.addEventListener('animationend', function() { 
        element.classList.remove('animated', ...animation);
      });
    }
  }

  render() {
    let heightStyle = {height: (this.props.height)+"vh"};
    return (
      <div className="ZoomNeedCard__Container" style={heightStyle}>
        <div className="ZoomNeedCard__LeftContainer">
          <div className="ZoomNeedCard__LeftContainerContent">
            <div className="ZoomNeedCard__Title">{this.props.cardZoomed.title}</div>
            <img className="ZoomNeedCard__Icon" src={this.props.cardZoomed.img} alt={this.props.cardZoomed.imgAlt} />
            {this.props.cardZoomed.videoURL && !this.state.displayVideo && <PlayCardVideo handleClick={this.handleClick} text={this.state.buttonText} icon={this.state.buttonIcon} />}
          </div>
        </div>
        <div ref={this.container} className="ZoomNeedCard__RightContainer">
          <div className="ZoomNeedCard__RightContainerContent">
            <div className="ZoomNeedCard__BoldSentence">{this.props.cardZoomed.boldSentence}</div>
            <div className="ZoomNeedCard__Description">{this.props.cardZoomed.description}</div>
            {this.props.displayCTA && 
              <div className="ZoomNeedCard__CTA">
                <SecondaryButton text="Discutons-en"/>
                <PrimaryButton text="Commencer"/>
              </div> }
          </div>
          {
            this.props.cardZoomed.videoURL && 
            <div className="ZoomNeedCard_TestimonyVideo">
              {this.state.displayVideo && 
                (<div><iframe title={this.props.cardZoomed.name} width={0.96*this.state.width} height={0.96*this.state.height} src={this.props.cardZoomed.videoURL} allow="encrypted-media"></iframe>
                <SecondaryButton handleClick={this.handleClick} text={this.state.buttonText} /></div>)
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ZoomNeedCard;