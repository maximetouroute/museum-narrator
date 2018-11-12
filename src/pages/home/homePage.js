import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './homePage.css';
import {homepageContent} from "./../../content/content";
import { LEDManager} from "../../utils/LEDManager";
import ReactPlayer from "react-player";

export class HomePage extends Component {

    constructor(props) {
        super(props);

        let f = new LEDManager();
        f.sendColor(100,100,100)
    }

    GoFullScreen() {
        this.state = {
            isFull: false,
        };
    }
    render() {
        return (
            <div className="homePage">
                <div className="mainGrid">
                    <div className="message">
                            <img src={homepageContent.logo} width={400} style={{margin:`auto`}}/>

                        <div className="text">
                            <div className="small">
                            {homepageContent.subsubtitle}
                            </div>
                        </div>

                        <Link to={process.env.PUBLIC_URL + '/' + homepageContent.redirectTo} className="button">{homepageContent.actionButtonName}</Link>
                        <ReactPlayer url={homepageContent.audio} loop={true} controls={true} width={0} height={0} playing/>
                    </div>

                </div>
            </div>
        );
    }
}
