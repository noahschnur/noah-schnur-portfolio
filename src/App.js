import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import ContactForm from "./Components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <Nav setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <Switch>
            <Route exact path="my-portfolio//resume" component={Resume} />
            <Route exact path="my-portfolio//portfolio" component={Portfolio} />
            <Route exact path="my-portfolio//" component={About} />
          </Switch>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
