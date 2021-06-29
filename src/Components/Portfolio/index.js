import React from "react";
import PickEm from "../../assets/screenshots/Pick-Em.png";
import SwapMeet from "../../assets/screenshots/Swapmeet.png";

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <h3>Pick 'Em</h3>
        <a
          href="https://richardyjkim.github.io/my-first-project/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={PickEm}
            alt="Pick 'Em homepage"
            height="250px"
            width="400px"
          />
        </a>
        <p>
          Pick 'Em was the first group project in the UC Berkeley Extnsion Boot
          Camp. This project took place at the end of the front end section of
          the boot camp. The main technologies used are: HTML, CSS, JavaScript,
          and web APIs.
        </p>
        <p>
          I was responsible for using the data from the web API and rendering it
          in usable formats so my teemmates could use that for making the game.
          I sent the data for the date of the game, the home team, and the away
          team to localstorage.
        </p>
        <p>
          Once in local storage, one of my teammates was responsible for using
          that information to style the page with CSS to make clickable buttons
          with the user's choice also sent to localstorage. Then a different
          teammate wrote code comparing the user's picks to the winners the next
          day once the API was updated.
        </p>
        <p>
          We ended up hardcoding the app to the 2021 preseason for baseball as
          with our skill level at the time it was the easiest option with the
          way the external API was set-up.
        </p>
        <p>
          <a
            href="https://github.com/richardyjkim/my-first-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://richardyjkim.github.io/my-first-project/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed page
          </a>
        </p>
      </div>
      <div>
        <h3>Swap Meet</h3>
        <a
          href="https://serene-brushlands-34437.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={SwapMeet}
            alt="Swap Meet homepage"
            height="250px"
            width="400px"
          />
        </a>
        <p>
          Swap Meet was the second group project in the UC Berkeley Extension
          Boot Camp. This project took place at the end of the back end section
          of the boot camp. The main technologies used are: Bcrypt, Express,
          Handlebars, Express Sessions, Multer, MySQL2, Sequelize.
        </p>
        <p>
          I was responsible for for creating the databases in MySQL and
          Sequelize in order to store the different categories, the items, and
          the users. I also wrote the routes in order to show the information on
          the website and for the information input in the website by the user
          to update the databases.
        </p>
        <p>
          <a
            href="https://github.com/kingkevin05/swap-meet"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://serene-brushlands-34437.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed page
          </a>
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
