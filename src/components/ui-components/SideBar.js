import React from "react";
import ProgressBar from "./ProgressBar";
import SideBarPageTitle from "./SideBarPageTitle";

const SideBar = (props) => (
  <div className="sideBar__background">
    <div className="sideBar__topContainer">
      <h3>Analyse de vos besoin</h3>
      <p className="sideBar__legend">Temps estimé : 5 minutes</p>
      <div className="sideBar__progressBar">
        <ProgressBar  startsAt={Math.round((props.step-2)*11.1)} endsAt={Math.round((props.step-1)*11.1)} />
      </div>
      <div className="sideBar__navLinks">
        {
          props.pages.map((page, index) => {
            let status = "inactive";
            if(props.index === index+1){
              status = "current";
            } else if (index < props.step){
              status = "active";
            }
            return <SideBarPageTitle status={status} title={(index+1)+". "+page.title} link={"/"+page.name} key={index}/>;
          })
        }
      </div>
    </div>
  </div>
);


export default SideBar;