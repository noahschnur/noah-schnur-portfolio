import React from "react";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();
  const { setContactSelected } = props;
  return (
    <header id="App-header" className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <h1 id="App-h1">Noah Schnur</h1>
        </div>
        <div className="col-7">
          <nav id="App-nav">
            <ul>
              <li id="nav-li">
                <a
                  data-testid="about"
                  onClick={() => {
                    setContactSelected(false);
                    history.push("/noah-schnur-portfolio");
                  }}
                  id="App-link"
                >
                  About Me
                </a>
              </li>
              <li id="nav-li">
                <a
                  data-testid="portfolio"
                  onClick={() => {
                    setContactSelected(false);
                    history.push("/portfolio");
                  }}
                  id="App-link"
                >
                  Portfolio
                </a>
              </li>
              <li id="nav-li">
                <a
                  data-testid="resume"
                  onClick={() => {
                    setContactSelected(false);
                    history.push("/resume");
                  }}
                  id="App-link"
                >
                  Resume
                </a>
              </li>
              <li id="nav-li">
                <a
                  data-testid="contact"
                  onClick={() => {
                    setContactSelected(true);
                    history.push("/contact");
                  }}
                  id="App-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-1"></div>
      </div>
    </header>
  );
}

export default Nav;
