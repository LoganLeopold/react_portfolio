import React, { Component } from 'react';
import './Projects.css';
import Project from './Project'
import { Row, Container, Col } from "reactstrap";
import tickettrackr from './images/Screen_Shot_2019-04-07_at_11.58.06_PM.png'
import rollingcode from './images/Screen_Shot_2019-04-07_at_11.52.06_PM.png'

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            //
        };
        this.componentDidMount = this.componentDidMount.bind(this)
      }

    componentDidMount() {
        this.setState({
            message: 'Component is mounted'
        })
    }

    render() {

        const p1 = {
            url: 'loganleopold.github.io/Trivia',
            img: rollingcode,
        }

        const p2 = {
            url: 'ticket-trackr.surge.sh',
            img: tickettrackr,
        }

        return (
            <Container className='projectsContainer'>
                <Project data={p1}></Project>
                <Project data={p2}></Project>
            </Container>
        );
    }
}

export default Projects;