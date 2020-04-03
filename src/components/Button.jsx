import React, { Component } from 'react';
import './Button.scss';



export class Button extends Component {
    operator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }

    render() {
        return (
            <div className={`button ${this.operator(this.props.children) ? null : "operator"}`}>
                {this.props.children}
            </div>
        )
    }
}
