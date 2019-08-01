import React, { Component } from 'react';
import './Project.css'

class Project extends Component {

    render() {
        return (
            <div className='projectCard'>
                <h2 class='projectTitle'>{this.props.data.url}</h2>
                <img class='projectImg' src={this.props.data.img} alt=''></img>
            </div>
        );
    }
}

export default Project;