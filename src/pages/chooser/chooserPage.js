import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import {choicePages} from './../../content/content';
import Menu from "../../components/buttonList/buttonList";
import './chooserPage.scss';
import {OSCConfig} from "./../../content/content";
import {LEDManager} from "../../utils/LEDManager";

export default class ChooserPage extends Component {

    constructor(props) {
        super(props);

        this.tryOSC();
        this.tryLED();

    }

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/')
    }

    buttonClickedForChoice(choice) {
        this.props.history.push(process.env.PUBLIC_URL + '/' + choice.redirectTo)
    }

    // quick send OSC message
    componentDidUpdate()
    {
       this.tryOSC();
       this.tryLED();
    }

    tryOSC() {
        const key = this.props.match.params.key;
        // Bad url goes back to buttonList
        if (choicePages[key] === undefined) {
            console.log('undefined for key ' + key);
            this.goToMenu();
        }

        const content = choicePages[key];

        if(content.oscOrder !== void 0)
        {
            this.sendOSC(content.oscOrder)
        }
    }
    sendOSC(action) {
        const OSC = require('osc-js');
        let osc = new OSC();
        osc.on('open', () => {
            let message = new OSC.Message(action);
            osc.send(message);
            console.info('sent msg');
            osc.close();
        });

        osc.open(OSCConfig); // start a WebSocket server on port 8080
    }

    tryLED() {
        const key = this.props.match.params.key;
        // Bad url goes back to buttonList
        if (choicePages[key] === undefined) {
            console.log('undefined for key ' + key);
            this.goToMenu();
        }

        const content = choicePages[key];

        if(content.ledColor !== void 0)
        {
           const ledManager = new LEDManager();
           ledManager.sendColor(content.ledColor.red, content.ledColor.green, content.ledColor.blue);
        }
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