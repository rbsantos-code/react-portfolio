import React from 'react';


function About() {

    return (
        <>
            <section className="columns" id="about">
                <div className="row justify-content-center">
                    <div className="column col-6">
                        <img src="./assets/img/graduation.JPG" className="img-fluid rounded" alt="graduation"></img>
                        <p>SF State Graduation 2016</p>
                    </div>
                    <div className="column col-6">
                        <h4 id="about-me">About Me</h4>
                        <p>Hi! My name is Richard Brian Santos and I am a graduate from San Francisco State University
                        with a bachelors in Anthropology. I am at my happiest when I am learning and I am very
                        passionate about technology. Coding is very fascinating, challenging and a rewarding experience. I cannot wait to learn more and enhance my coding
                            skills!</p>
                    </div>
                </div>
            </section>
            <section className="columns" id="passions">
                <div className="row justify-content-center">
                    <div className="column col-6">
                        <h4 id="love">What I love</h4>
                        <p>On my free time, I love hanging out with my family and friends. If it is just hanging out at
                        home or going out to eat, I will always make time for them. I also love to travel and I hope
                        to travel to places that I havn't been before such as, Europe and other parts of Asia. So
                        far I have been to Mexico, Canada, Japan, and Thailand. Cannot wait for the next adventure!
                        </p>
                    </div>
                    <div className="column col-6">
                        <img src="./assets/img/hiking.jpeg" className="img-fluid rounded" alt="bigBasin"></img>
                        <p>Big Basin</p>
                    </div>
                </div>
            </section>

        </>
    )
}


export default About;