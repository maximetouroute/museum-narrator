import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import {finalPageContent, homepageContent} from './../../content/content';
import Menu from "../../components/buttonList/buttonList";
import "./finalPage.scss";
import {Link} from "react-router-dom";
import {SolidStateMemory} from "../../utils/SolidStateMemory";



export default class FinalPage extends Component {

    constructor(props) {
        super(props);

        const ssMemory = new SolidStateMemory();
        console.info("solid state memory!!");
        console.info(ssMemory.getChoices())
    }

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/')
    }


    render() {

        const text = finalPageContent.text;

        return (<>
            <div className="menuPage">

                <div className="message">
                    <div className="text big">Voici ton sentiment</div>
                </div>

                <img className="image" src={finalPageContent.artwork}/>

                <Link to={process.env.PUBLIC_URL + '/'} className="button">Partager sur Instagram</Link>

                <Link to={process.env.PUBLIC_URL + '/'} className="button">Accueil</Link>
            </div>
            </>
        )
    }
}