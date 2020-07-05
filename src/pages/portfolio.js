import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import CodingQuiz from "../assets/coding-quiz.png";
import RouteWeather from "../assets/route-weather.png";
import ShelterHelper from "../assets/shelter-helper.png";
import WeatherApp from "../assets/weather-app.png";

function Portfolio () {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <h3> Examples of my Past Work</h3>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Card title="RouteWeather" img={RouteWeather} description="An app collaberatively developed by Julian Secomb, Forace Avant, and myself, displaying forecast data for major points along driving routes." link="https://saskuatchofaz.github.io/Project-one/"/>
                    </Col>
                    <Col size="md-6">
                        <Card title="Shelter Helper" img={ShelterHelper} description="A wep app developed by Cassy Pearson, Francisco Camacho, and myself, offering data collection and display for animal shelters using sequelize and Node.js." link="https://u-of-a-project-two.herokuapp.com/"/>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Card title="A short coding quiz" img={CodingQuiz} description="A small quiz, testing coding knowledge. Developed as practice for javascript." link="https://saskuatchofaz.github.io/ShortCodingQuiz/"/>
                    </Col>
                    <Col size="md-6">
                        <Card title="Forecast App" img={WeatherApp} description="An app for receiving the 5-day forecast of any major city. Depeloped as practice for interfacing with APIs." link="https://saskuatchofaz.github.io/Homework6/"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio