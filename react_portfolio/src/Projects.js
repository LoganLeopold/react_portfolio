import React, { Component } from 'react';
import { Row, Container, Col } from "reactstrap";
import './Projects.css';
import Project from './Project'
import tickettrackr from './images/Ticket_Trackr.png'
import rollingcode from './images/Rolling_Code.png'

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
            title: 'Rolling Code',
            url: 'https://loganleopold.github.io/Trivia',
            img: rollingcode,
        }

        const p2 = {
            title: 'Ticket-Trackr',
            url: 'https://ticket-trackr.surge.sh',
            img: tickettrackr,
        }

        return (
            <Container className='projectsContainer'>
                <Row>
                  <Col className='projectsCard' sm={12} md={6} lg={6} xl={6}>
                      <Project data={p1}></Project>
                  </Col>
                  <Col className='projectsCard' sm={12} md={6} lg={6} xl={6} >
                      <Project data={p2} ></Project>
                  </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;