import React, { Component } from 'react';

class Project extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.data.url}</h2>
                <h2>{this.props.data.img}</h2>
            </div>
        );
    }
}

export default Project;