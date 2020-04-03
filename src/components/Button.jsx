import React, { Component } from 'react';
import './Button.scss';


export class Button extends Component {
    operator = value => {
        return !isNaN(value) || value === "." || value === "=";
    }

    render() {
        return (
            <div className={`button ${this.operator(this.props.children) ? null : "operator"}`} 
                onClick={() => this.props.handleClick(this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}
