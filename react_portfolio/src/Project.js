import React, { Component } from 'react';
import { Row, Container, Col } from "reactstrap";
import './Project.css'

class Project extends Component {

    render() {
        return (
            <Container className='projectCard'>
                <Row>
                  <Col>
                      <h2 class='projectTitle'>{this.props.data.title}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <img class='projectImg' src={this.props.data.img} alt=''></img>
                  </Col>
                </Row>
            </Container>
        );
    }
}

export default Project;