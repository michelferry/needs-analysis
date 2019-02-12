import React from 'react';

class NeedCard extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick({
      name: this.props.name,
      title: this.props.title,
      img: this.props.img,
      imgAlt: this.props.imgAlt,
      boldSentence: this.props.boldSentence,
      description: this.props.description,
      videoURL: this.props.videoURL
    });
  };

  render() {
    return (
      <div className="NeedCard__Card" onClick={this.handleClick}>
        <div className="NeedCard__Title">{this.props.title}</div>
        <img className="NeedCard__Icon" src={this.props.img} alt={this.props.imgAlt} />
        <div className="NeedCard__CTA">EN SAVOIR PLUS</div>
      </div>
    );
  }
}

export default NeedCard;