import React, {Component} from 'react';
import ReactPlayer from 'react-player'

import {choicePages} from './../../content/content';
import Menu from "../../components/buttonList/buttonList";
import './chooserPage.scss';

export default class ChooserPage extends Component {

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/')
    }

    buttonClickedForChoice(choice) {
        this.props.history.push(process.env.PUBLIC_URL + '/' + choice.redirectTo)
    }

    render() {
        const key = this.props.match.params.key;
        // Bad url goes back to buttonList
        if (choicePages[key] === undefined) {
            console.log('undefined for key ' + key);
            this.goToMenu();
        }

        const content = choicePages[key];
        const choices = content.choices;
        return (<>
            <div className="menuPage">

                <div className="message">
                    <div className="text big">{content.text}</div>
                </div>

            <Menu buttons={choices} onMenuClick={(choice) => {
            this.buttonClickedForChoice(choice)
        }}/>

                <ReactPlayer url={content.audio} loop={true} controls={false} width={0} height={0} playing/>
            </div>
            </>
        )
    }
}




class Header extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const title = this.props.title;

        return (
            <div className="pageLayoutHeader header">

                <div className="svgButton exitButton" onClick={() => {
                    this.goToMenu()
                }}>
                    <div className="exit"/>
                </div>
                <h1>{title}</h1>
            </div>
        )
    }
}