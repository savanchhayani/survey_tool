import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Routes from "../constants/Routes";
import { AppConstants } from "../constants";

class Header extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="header">
        <Navbar fixed="top" bg="dark" variant="dark" className="justify-content-end">
          <Nav>
            <Nav.Link>
              <Link to={Routes.home}>{AppConstants.SURVEY_FORM}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={Routes.dashboard}>{AppConstants.DASHBOARD}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={Routes.surveyList}>{AppConstants.SURVEY_LIST}</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
