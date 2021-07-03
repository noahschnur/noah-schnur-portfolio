import React from 'react';
import Noah from "../../assets/images/Noah.jpg";


function About() {
    return (
        <section className="p-light">
            <img src={Noah} alt="Noah Schnur" height="250px" width="300px" />
            <h2 className="s-light">About Noah</h2>
            <div>
                <p className="p-text">
                    I have recently completed a certificate from UC Berkeley Extension to become a full stack/MERN we developer. My background is in zookeeping, which while quite different has given me transferable skills such as working as part of a team, multitasking, completing projects on time, anticipating and adapting to issues, and solving complex problems, to name a few.
                </p>
                <br></br>
                <p className="p-text">
                    I am looking for an opportunity to showcase my strong work ethic, my exacting attention to detail, strong communication skills, and to become a highly productive member of a team to help deliver outstanding results to an organization providing important products and services to its customers and the community.
                </p>
                <br></br>
                <p className="p-text">
                    Languages: HTML, CSS, JavaScript
                </p>
                <p className="p-text">
                    Applications: APIs, Node.js, OOP, Express.js, PWA, React, State
                </p>
                <p className="p-text">
                    Databases: MySQL, Sequelize, NoSQL
                </p>
                <p className="p-text">
                    Tools: Git, Heroku
                </p>
            </div>
        </section>
    )
};

export default About;