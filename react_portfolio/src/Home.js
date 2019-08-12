import React, { Component } from 'react';
import { Row, Container, Col } from "reactstrap";
import './Home.css'
import Logan from './images/me.png'

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                  <Col>
                    <div>
                      <h1 className='homeText'>Should display on homepage. Writing out further test text to see what it would look like on the home page.</h1>
                    </div>
                  </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;