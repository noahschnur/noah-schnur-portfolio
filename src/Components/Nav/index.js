import React from "react";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();
  const {setContactSelected } = props;
  return (
    <header>
      <h1>Noah Schnur</h1>
      <nav>
        <ul>
          <li>
            <a data-testid="about" href="#about" onClick={() => {
              setContactSelected(false)
              history.push("/")
            }}>
              About Me
            </a>
          </li>
          <li>
            <a data-testid="portfolio" href="#Portfolio" onClick={() => {
              setContactSelected(false)
              history.push("/Portfolio")}}>
                Portfolio
            </a>
          </li>
          <li>
            <a data-testid="resume" href="#Resume" onClick={() => {
              setContactSelected(false)
              history.push("/Resume")}}>
                Resume
            </a>
          </li>
          <li>
            <a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
