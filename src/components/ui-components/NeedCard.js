import React from 'react';
import check from '../../img/check.png';

class NeedCard extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick({
      index: this.props.index,
      name: this.props.name,
      title: this.props.title,
      img: this.props.imgWhite,
      imgAlt: this.props.imgAlt,
      boldSentence: this.props.boldSentence,
      description: this.props.description,
      videoURL: this.props.videoURL
    });
  };

  render() {
    const animationClass = "animated infinite pulse duration-5s";
    let imgSrc;
    let cardClass = "";
    if(this.props.displayIcon){
      cardClass = "NeedCard__Card";
    } else {
      cardClass = "NeedCard__Button";
    }
    if(this.props.cardViewed){
      imgSrc = check;
      cardClass += " NeedCard__Card--checked";
    } else {
      imgSrc = this.props.img;
    }
    return (
      <div className={"NeedCard__CardContainer "+(this.props.animated && animationClass)}>
        <div className={cardClass} onClick={this.handleClick}>
          {this.props.displayIcon && <div className="NeedCard__IconContainer"><img className="NeedCard__Icon" src={imgSrc} alt={this.props.imgAlt} /></div>}
          <div className="NeedCard__Title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default NeedCard;