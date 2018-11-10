import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Fetch } from 'react-request';

import { SketchPicker } from 'react-color';
import {RPI_IP} from "../../content/content";

export class LedTester extends Component {

    constructor(props) {
        super(props);

        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.handleChange.bind(this)

    }

    httpRequest(r,g,b) {


    }


    manualRequest(color) {
        const url = 'http://' + '192.168.43.177:5000' + '/colorControl';
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(color))
    }

    handleChange(color, event) {
        // color = {
        //   hex: '#333',
        //   rgb: {
        //     r: 51,
        //     g: 51,
        //     b: 51,
        //     a: 1,
        //   },
        //   hsl: {
        //     h: 0,
        //     s: 0,
        //     l: .20,
        //     a: 1,
        //   },
        // }
        console.log(color);
        this.manualRequest({
            red: color.rgb.r,
            green: color.rgb.g,
            blue: color.rgb.b
        });
    }


    render() {

        return (
            <div className="homePage">
                <SketchPicker onChange={ (c, e) => { this.handleChange(c, e) } } />;
            </div>
        );
    }
}
