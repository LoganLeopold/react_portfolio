import React, { Component } from 'react';
import './Projects.css';
import Project from './Project'

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
            url: 'hypo url',
            img: 'hypo img'
        }

        const p2 = {
            url: 'hypo url',
            img: 'hypo img'
        }

        return (
            <div>
                <h1>{this.state.message}</h1>
                <Project data={p1}></Project>
                <Project data={p2}></Project>
            </div>
        );
    }
}

export default Projects;