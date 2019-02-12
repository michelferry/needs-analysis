import React from "react";
import {Link} from "react-router-dom";

class SideBarPageTitle extends React.Component {

  render(){
    let jsx;
    if(this.props.status === "inactive"){
      jsx = <p className={"SideBarPageTitle__Title SideBarPageTitle__Title--"+this.props.status}>{this.props.title}</p>;
    } else {
      jsx = <Link to={this.props.link}><p className={"SideBarPageTitle__Title SideBarPageTitle__Title--"+this.props.status}>{this.props.title}</p></Link>;
    }
    return (jsx);
  }

}

export default SideBarPageTitle;