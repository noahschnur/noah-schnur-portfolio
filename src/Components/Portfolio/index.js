import React from "react";
import PickEm from "../../assets/screenshots/Pick-Em.png";
import SwapMeet from "../../assets/screenshots/Swapmeet.png";
import WeekdayScheduler from "../../assets/screenshots/WeekdayScheduler.png"

function Portfolio() {
  return (
    <section id="p-light">
      <div className="container">
        <div className="row">
          <div className="col-4" id="border-line-port"></div>
          <div className="col-8">
            <h2 id="s-light">Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4" id="border-line-port">
            <h3 id="s-light">Pick 'Em</h3>
            <a
              href="https://richardyjkim.github.io/my-first-project/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PickEm}
                alt="Pick 'Em homepage"
                className="portfolio-img"
              />
            </a>
          </div>
          <div className="col-8">
            <h3 id="s-light">Description</h3>
            <p id="p-text">
              Pick 'Em was the first group project in the UC Berkeley Extnsion
              Boot Camp. This project took place at the end of the front end
              section of the boot camp. The main technologies used are: HTML,
              CSS, JavaScript, and web APIs.
            </p>
            <p id="p-text">
              I was responsible for using the data from the web API and
              rendering it in usable formats so my teemmates could use that for
              making the game. I sent the data for the date of the game, the
              home team, and the away team to localstorage.
            </p>
            <p id="p-text">
              Once in local storage, one of my teammates was responsible for
              using that information to style the page with CSS to make
              clickable buttons with the user's choice also sent to
              localstorage. Then a different teammate wrote code comparing the
              user's picks to the winners the next day once the API was updated.
            </p>
            <p id="p-text">
              We ended up hardcoding the app to the 2021 preseason for baseball
              as with our skill level at the time it was the easiest option with
              the way the external API was set-up.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4" id="border-line-port"></div>
          <div className="col-2">
            <p>
              <a
                href="https://github.com/richardyjkim/my-first-project"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="col-2">
            <p>
              <a
                href="https://richardyjkim.github.io/my-first-project/"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                Deployed page
              </a>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4" id="border-line-port">
            <h3 id="s-light">Swap Meet</h3>
            <a
              href="https://serene-brushlands-34437.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SwapMeet}
                alt="Swap Meet homepage"
                className="portfolio-img"
              />
            </a>
          </div>
          <div className="col-8">
            <h3 id="s-light">Description</h3>
            <p id="p-text">
              Swap Meet was the second group project in the UC Berkeley
              Extension Boot Camp. This project took place at the end of the
              back end section of the boot camp. The main technologies used are:
              Bcrypt, Express, Handlebars, Express Sessions, Multer, MySQL2,
              Sequelize.
            </p>
            <p id="p-text">
              I was responsible for for creating the databases in MySQL and
              Sequelize in order to store the different categories, the items,
              and the users. I also wrote the routes in order to show the
              information on the website and for the information input in the
              website by the user to update the databases.
            </p>
          </div>
          <div className="col-4" id="border-line-port"></div>
          <div className="col-2">
            <p>
              <a
                href="https://github.com/kingkevin05/swap-meet"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="col-2">
            <p>
              <a
                href="https://serene-brushlands-34437.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                Deployed page
              </a>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4" id="border-line-port">
            <h3 id="s-light">Weekday Scheduler</h3>
            <a
              href="https://protected-chamber-88097.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WeekdayScheduler}
                alt="Weekday Scheduler homepage"
                className="portfolio-img"
              />
            </a>
          </div>
          <div className="col-8">
            <h3 id="s-light">Description</h3>
            <p id="p-text">
              Weekday Scheduler was the third group project in the UC Berkeley
              Extension Boot Camp. This project took place at the end of the
              of the boot camp. The main technologies used are:
              Bcrypt, Express, JWT, Mongo, GraphQL, and React.
              </p>
            <p id="p-text">
              I was responsible for creating the databases with GraphQL and
              Mongo in order to store the events and comments on the events. 
              I also wrote the queries, mutations, and routes in order to show the
              information on the website and for the information input in the
              website by the user to update the databases.
            </p>
          </div>
          <div className="col-4" id="border-line-port"></div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="col-2">
            <p>
              <a
                href="https://github.com/seyzho/project-3"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="col-2">
            <p>
              <a
                href="https://protected-chamber-88097.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                id="Port-link"
              >
                Deployed page
              </a>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
