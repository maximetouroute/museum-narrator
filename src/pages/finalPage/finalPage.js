import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import {finalPageContent, homepageContent} from './../../content/content';
import Menu from "../../components/buttonList/buttonList";
import "./finalPage.scss";
import {Link} from "react-router-dom";
import {SolidStateMemory} from "../../utils/SolidStateMemory";
import {GenerativeArtwork} from "../generativeArtwork/generativeArtwork";
import {LEDManager} from "../../utils/LEDManager";


export default class FinalPage extends Component {

    constructor(props) {
        super(props);

        const ssMemory = new SolidStateMemory();
        console.info("solid state memory!!");
        console.info(ssMemory.getChoices());
        const ledManager = new LEDManager();
        ledManager.sendColor(200,100,100);
    }

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/')
    }

    render() {

        const text = finalPageContent.text;
        const choiceKey = this.props.match.params.key;
        const audio = finalPageContent.sounds[choiceKey];
        const begAudio = finalPageContent.audio;
        return (<>
            <div className="menuPage">
                <Link to={process.env.PUBLIC_URL + '/'} className="button">Retour à l'accueil</Link>
                <div className="message">
                    <div className="text big">{text}</div>
                </div>

                <GenerativeArtwork class="image"/>

                <div className="message">
                    <div className="text small">
                        {finalPageContent.subtext}
                    </div>
                </div>
                <br/>
                <br/>


            </div>
                <ReactPlayer url={audio} loop={false} controls={false} width={0} height={0} playing/>
            </>
        )
    }
}

//                 <!--<img className="image" src={finalPageContent.artwork}/>-->