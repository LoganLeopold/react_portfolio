import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <Container className="projectCard">
          <Row className="projectImgCenter">
            <Col className="projectImgCenter">
              <a href={this.props.data.url} className="projectLink">
                <h2 class="projectTitle">{this.props.data.title}</h2>
              </a>
            </Col>
          </Row>
          <Row className="projectCenter">
            <Col className="projectCenter">
              <a href={this.props.data.url} className="projectLink">
                <img class="projectImg" src={this.props.data.img} alt="" />
              </a>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Project;
