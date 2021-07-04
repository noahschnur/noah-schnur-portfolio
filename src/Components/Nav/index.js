import React from "react";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();
  const {setContactSelected } = props;
  return (
    <header id="App-header" className="container">
      <div className="row">
        <div className="col">
          <h1 id="App-h1">Noah Schnur</h1>
        </div>
        <div className="col">
          <nav id="App-nav">
            <ul>
              <li id="nav-li">
                <a data-testid="about" href="/" onClick={() => {
                  setContactSelected(false)
                  history.push("/")
                }}
                id="App-link">
                  About Me
                </a>
              </li>
              <li id="nav-li">
                <a data-testid="portfolio" href="/portfolio" onClick={() => {
                  setContactSelected(false)
                  history.push("/Portfolio")}}
                  id="App-link">
                    Portfolio
                </a>
              </li>
              <li id="nav-li">
                <a data-testid="resume" href="/resume" onClick={() => {
                  setContactSelected(false)
                  history.push("/Resume")}}
                  id="App-link">
                    Resume
                </a>
              </li>
              <li id="nav-li">
                <a data-testid="contact" href="noahschnur-portfolio/#contact" onClick={() => setContactSelected(true)} id="App-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
