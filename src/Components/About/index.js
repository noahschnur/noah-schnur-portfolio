import React from 'react';
import Noah from "../../assets/images/Noah.jpg";

function About() {
    return (
        <section>
            <img src={Noah} alt="Noah Schnur" height="250px" width="300px" />
            <h2>About Noah</h2>
            <div>
                <p>
                    I have recently completed a certificate from UC Berkeley Extension to become a full stack/MERN we developer. My background is in zookeeping, which while quite different has given me transferable skills such as working as part of a team, multitasking, completing projects on time, anticipating and adapting to issues, and solving complex problems, to name a few.
                </p>
                <br></br>
                <p>
                    I am looking for an opportunity to showcase my strong work ethic, my exacting attention to detail, strong communication skills, and to become a highly productive member of a team to help deliver outstanding results to an organization providing important products and services to its customers and the community.
                </p>
                <br></br>
                <p>
                    Languages: HTML, CSS, JavaScript
                </p>
                <p>
                    Applications: APIs, Node.js, OOP, Express.js, PWA, React, State
                </p>
                <p>
                    Databases: MySQL, Sequelize, NoSQL
                </p>
                <p>
                    Tools: Git, Heroku
                </p>
            </div>
        </section>
    )
};

export default About;