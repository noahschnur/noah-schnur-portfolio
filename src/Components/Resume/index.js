import React from "react";
import BamBam from "../../assets/images/Bambam.jpg";
import Code from "../../assets/images/code-stock-pixabay.jpg";

function Resume() {
  return (
    <section id="p-light">
      <div className="container">
        <div className="row">
          <div className="col-4" id="border-line">
            <h3 id="s-light">From Bam Bam</h3>
            <img
              src={BamBam}
              alt="BamBam the grizzly bear, lives at Turpentine Creek Wildlife Refuge, copyright of Noah Schnur"
              className="bambam-img"
            />
            <h3 id="s-light">To Coding</h3>
            <div className="bottom-img">
              <img
                src={Code}
                alt="Code, stock from pixabay.com"
                className="code-img"
              />
            </div>
          </div>
          <div className="col-8">
            <h2 id="s-light">Noah's Resume</h2>
            <h3 id="s-light">Education</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-2" id="border-resume">
                  <p id="resume-titles">UC Santa Cruz</p>
                </div>
                <div className="col-sm-10">
                  <p id="p-text">
                    Graduated in 2012 with a B.S. in Ecology and Evolutionary
                    Biology
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-2" id="border-resume">
                  <p id="resume-titles">UC Berkeley Extension</p>
                </div>
                <div className="col-sm-10">
                  <p id="p-text">
                    Completed Computer Programing Full-Stack Boot Camp for a
                    Certificate in 2021
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 id="s-light">Work History</h3>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">Six Flags Discovery Kingdom</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Animal Trainer I in Vallejo, CA from February 2019 -
                      Present
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">San Francisco Zoo</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      As-Needed/Temporary Hoofstock Keeper in San Francisco, CA
                      from June 2018 - January 2019
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">El Paso Zoo</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Zookeeper in Area 5 in El Paso, TX from July 2016 - May
                      2018
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">Oakland Zoo</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Animal Care Volunteer in Oakland, CA from September 2015 -
                      June 2016
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">Turpentine Creek Wildlife Refuge</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Animal Care Intern in Eureka Springs, AR from August 2014
                      - August 2015
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">Oakland Zoo</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Animal Care Intern in Oakland, CA from January 2014 - July
                      2014
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2" id="border-resume">
                    <p id="resume-titles">San Francisco Zoo</p>
                  </div>
                  <div className="col-sm-10">
                    <p id="p-text">
                      Program Intern in San Francisco, CA from June 2013 -
                      February 2014
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
