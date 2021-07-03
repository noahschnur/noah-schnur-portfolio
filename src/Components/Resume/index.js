import React from 'react';

function Resume() {
    return (
        <section className="p-light">
            <h2 className="s-light">Noah's Resume</h2>
            <div>
                <h3>Education</h3>
                <p className="p-text">
                    Graduated from UC Santa Cruz in 2012 with a B.S. in Ecology and Evolutionary Biology
                </p>
                <p className="p-text">
                    Completed the UC Berkeley Extension Computer Programming Boot Camp with a Certificate in 2021
                </p>
            </div>
            <div>
                <h3>Work History</h3>
                <p className="p-text">
                    Program Intern for the San Francisco Zoo in San Francisco, CA from June 2013 - February 2014.
                </p>
                <p className="p-text">
                    Animal Care Intern for the Oakland Zoo in Oakland, CA from January 2014 - July 2014.
                </p>
                <p className="p-text">
                    Animal Care Intern for Turpentine Creek Wildlife Refuge in Eureka Springs, AR from August 2014 - August 2015.
                </p>
                <p className="p-text">
                    Animal Care Volunteer for the Oakland Zoo from September 2015 - June 2016.
                </p>
                <p className="p-text">
                    Zookeeper in Area 5 for the El Paso Zoo in El Paso, TX from July 2016 - May 2018.
                </p>
                <p className="p-text">
                    Hoofstock Keeper for the San Francisco Zoo in an As-Needed/Temporary role from June 2018 - January 2019.
                </p>
                <p className="p-text">
                    Animal Trainer I for Six Flags Discovery Kingdom in Vallejo, CA from February 2019 - Present.
                </p>
            </div>
        </section>
    )
};

export default Resume;