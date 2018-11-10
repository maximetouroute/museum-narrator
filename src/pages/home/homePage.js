import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './homePage.css';
import {homepageContent} from "./../../content/content";


export class HomePage extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="homePage">
                <div className="mainGrid">
                    <div className="message">
                        <div>
                            <div className="text big">{homepageContent.title}</div>
                            <div className="text small">{homepageContent.subtitle}</div>
                        </div>
                        <Link to={process.env.PUBLIC_URL + '/' + homepageContent.redirectTo} className="button">{homepageContent.actionButtonName}</Link>
                    </div>

                </div>
            </div>
        );
    }
}
