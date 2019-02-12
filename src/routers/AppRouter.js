import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PathDescriptionPage from "../components/pages/PathDescriptionPage";
import InstructionsPage from "../components/pages/InstructionsPage";
import QuestionPage from "../components/pages/QuestionPage";
import LoadingPage from "../components/pages/LoadingPage";
import ResultsPage from "../components/pages/ResultsPage";
import {pages, needs} from "../config/formConfig";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class AppRouter extends React.Component {

  componentDidMount() {
    document.title = 'Analyse de vos besoins';
  }  

  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <PropsRoute path="/instructions" component={InstructionsPage} />
            {
              pages.map((page, index) => {
                return <PropsRoute key={index} component={QuestionPage} path={"/"+page.name} index={index+1} page={page} pages={pages}/>;
              })
            }
            <PropsRoute path="/loading" component={LoadingPage} />
            <PropsRoute path="/results" component={ResultsPage} needsList={needs} pages={pages}/>
            <PropsRoute component={PathDescriptionPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default AppRouter;