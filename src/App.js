import React, { useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import ContactForm from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

function App() {

  
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <Nav
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <Switch>
            <Route exact path="noahschnur-portfolio/Resume" component={Resume}/>
            <Route exact path="noahschnur-portfolio/Portfolio" component={Portfolio}/>
            <Route exact path="noahschnur-portfolio/" component={About}/>
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
