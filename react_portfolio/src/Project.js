import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <Container className="projectCard">
          <Row className="projectCenter">
            <Col className="projectCenter" sm={12} md={12} lg={12} xl={12}>
              <a href={this.props.data.url} className="projectLink">
                <h2 class="projectTitle">{this.props.data.title}</h2>
              </a>
            </Col>
          </Row>
          <Row className="projectCenter">
            <Col className="projectCenter" sm={12} md={12} lg={12} xl={12}>
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
