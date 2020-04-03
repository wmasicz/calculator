import React, { Component } from 'react'
import { Button } from './Button';
import './CalcWrapper.scss';


export default class CalcWrapper extends Component {
    render() {
        return (
            <div>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>-</Button>
            </div>
        )
    }
}
