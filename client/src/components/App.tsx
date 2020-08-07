import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import SurveyForm from "../containers/SurveyForm";
import SurveyList from "../containers/SurveyList";
import Dashboard from "../containers/dashboard/Dashboard";
import Routes from "../constants/Routes";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Switch>
            <Container>
              <Route exact path={Routes.home} component={SurveyForm} />
              <Route path={Routes.surveyForm} component={SurveyForm} />
              <Route path={Routes.surveyList} component={SurveyList} />
              <Route path={Routes.dashboard} component={Dashboard} />
            </Container>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
