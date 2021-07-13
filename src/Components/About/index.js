import React from 'react';
import Noah from "../../assets/images/Noah.jpg";

function About() {
    return (
        <section id="p-light">
            <div className="container">
                <div className="row">
                    <div className="col-4" id="border-line">
                    <h3 id="s-light">Noah Schnur</h3>
                        <img src={Noah} alt="Noah Schnur" className="about-img"/>
                    </div>
                    <div className="col-8">
                        <h2 id="s-light">About Noah</h2>
                        <div>
                            <p id="p-text">
                                I have recently completed a certificate from UC Berkeley Extension to become a full stack/MERN we developer. My background is in zookeeping, which while quite different has given me transferable skills such as working as part of a team, multitasking, completing projects on time, anticipating and adapting to issues, and solving complex problems, to name a few.
                            </p>
                            <br></br>
                            <p id="p-text">
                                I am looking for an opportunity to showcase my strong work ethic, my exacting attention to detail, strong communication skills, and to become a highly productive member of a team to help deliver outstanding results to an organization providing important products and services to its customers and the community.
                            </p>
                            <br></br>
                            <p id="p-text">
                                Languages: HTML, CSS, JavaScript
                            </p>
                            <p id="p-text">
                                Applications: APIs, Node.js, OOP, Express.js, PWA, React, State
                            </p>
                            <p id="p-text">
                                Databases: MySQL, Sequelize, NoSQL
                            </p>
                            <p id="p-text">
                                Tools: Git, Heroku
                            </p>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
};

export default About;