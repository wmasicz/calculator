import React, { Component } from 'react';
import './SumButton.scss'

export default class SumButton extends Component {
    render() {
        return (
            <div className="sum" onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        )
    }
}
