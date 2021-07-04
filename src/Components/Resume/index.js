import React from "react";
import BamBam from "../../assets/images/Bambam.jpg";
import Code from "../../assets/images/code-stock-pixabay.jpg";

function Resume() {
  return (
    <section id="p-light">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3 id="s-light">From Bam Bam</h3>
            <img
              src={BamBam}
              alt="BamBam the grizzly bear, lives at Turpentine Creek Wildlife Refuge, copyright of Noah Schnur"
              height="320px"
              width="240px"
            />
            <h3 id="s-light">To Coding</h3>
            <img
              src={Code}
              alt="Code, stock from pixabay.com"
              height="275px"
              width="275px"
            />
          </div>
          <div className="col-9">
            <h2 id="s-light">Noah's Resume</h2>
            <div>
              <h3 id="s-light">Education</h3>
              <p id="p-text">
                Graduated from UC Santa Cruz in 2012 with a B.S. in Ecology and
                Evolutionary Biology
              </p>
              <p id="p-text">
                Completed the UC Berkeley Extension Computer Programming Boot
                Camp with a Certificate in 2021
              </p>
            </div>
            <div>
              <h3 id="s-light">Work History</h3>
              <p id="p-text">
                Animal Trainer I for Six Flags Discovery Kingdom in Vallejo, CA
                from February 2019 - Present.
              </p>
              <p id="p-text">
                Hoofstock Keeper for the San Francisco Zoo in an
                As-Needed/Temporary role from June 2018 - January 2019.
              </p>
              <p id="p-text">
                Zookeeper in Area 5 for the El Paso Zoo in El Paso, TX from July
                2016 - May 2018.
              </p>
              <p id="p-text">
                Animal Care Volunteer for the Oakland Zoo from September 2015 -
                June 2016.
              </p>
              <p id="p-text">
                Animal Care Intern for Turpentine Creek Wildlife Refuge in
                Eureka Springs, AR from August 2014 - August 2015.
              </p>
              <p id="p-text">
                Animal Care Intern for the Oakland Zoo in Oakland, CA from
                January 2014 - July 2014.
              </p>
              <p id="p-text">
                Program Intern for the San Francisco Zoo in San Francisco, CA
                from June 2013 - February 2014.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
