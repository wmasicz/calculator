import React, { Component } from 'react';
import './Input.scss';

export default class Input extends Component {

    render() {
        return (
            <div className="input">
                {this.props.input}   
            </div>
        )
    }
}
