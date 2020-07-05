import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Face from "../assets/aaronface.jpg";
import Resume from "../assets/Resume.pdf";

function Home() {
    return (
        <div>
            <Container>
                <Row fluid="true">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Aaron Smith</h1>
                            <p className="lead">Tucson-based web developer.</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="card">
                        <div className="card-body">
                            <div className="col-md-12">
                                <img src={Face} class="img-thumbnail" id="facepic" alt="headshot" />
                                <p>I am a California-born web development student currently residing in Tucson, AZ. I studied environemntal biology at California State Polytechnic University, Pomona and Theater and Film at Mt. San Antonio College in Walunt, CA. Afterwards, I moved to Sacramento and worked at Western Feed & Pet Supply for three years before switching career paths and working at The Jackson Laboratory in the production department. I moved to Tucson in 2019 and began studying web development at the University of Arizona's Coding Bootcamp in February 2020.
                                </p>
                                <br />
                                <p><a href="https://www.linkedin.com/in/aaron-smith-405454196/" target="_blank">My LinkedIn Profile</a></p>
                                <p><a href="https://github.com/SaskuatchofAZ" target="_blank">My GitHub Profile</a></p>
                                <p><a href={Resume}>My Resume</a></p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home