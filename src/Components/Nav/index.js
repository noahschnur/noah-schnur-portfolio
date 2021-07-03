import React from "react";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();
  const {setContactSelected } = props;
  return (
    <header className="App-header">
      <h1 className="App-h1">Noah Schnur</h1>
      <nav className="App-nav">
        <ul>
          <li className="nav-li">
            <a data-testid="about" href="/" onClick={() => {
              setContactSelected(false)
              history.push("/")
            }}
            className="App-link">
              About Me
            </a>
          </li>
          <li className="nav-li">
            <a data-testid="portfolio" href="/portfolio" onClick={() => {
              setContactSelected(false)
              history.push("/Portfolio")}}
              className="App-link">
                Portfolio
            </a>
          </li>
          <li className="nav-li">
            <a data-testid="resume" href="/resume" onClick={() => {
              setContactSelected(false)
              history.push("/Resume")}}
              className="App-link">
                Resume
            </a>
          </li>
          <li className="nav-li">
            <a data-testid="contact" href="/#contact" onClick={() => setContactSelected(true)} className="App-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
