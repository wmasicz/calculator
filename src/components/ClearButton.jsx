import React, { Component } from 'react';
import './ClearButton.scss'

export default class ClearButton extends Component {
    render() {
        return (
            <div className="clear" onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        )
    }
}
