import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './contentPage.css';
import {ContentTypes} from './../../content/content';
import {contentPages} from './../../content/content';
import PropTypes from 'prop-types';

// OBSOLETE !!
export default class ContentPage extends Component {

    constructor(props) {
        super(props);

        const key = this.props.match.params.key;
        // Bad url goes back to buttonList
        if (contentPages[key] === undefined) {
            this.goToMenu();
        }
        this.state = {
            content: contentPages[key],
            mediaGalleryIndex: 0,
            mediaIsLoaded: false
        }
    }


    onProgress(e) {
        if(e.loaded === 1 && !this.state.mediaIsLoaded) {
            console.log('Ready to precache medias:');
            this.setState((state, props) => {
                return {mediaIsLoaded: true};
            });
        }
    }

    mediaPrecacher() {
        const precacheContent = this.state.content.mediaGallery[this.state.mediaGalleryIndex + 1];
        if(this.state.mediaIsLoaded && precacheContent !== undefined ) {
            return (<Preloader url={precacheContent.data}/>)
        } else return (<></>)
    }


    renderVideoContent() {
        const contentObject = this.state.content.mediaGallery[this.state.mediaGalleryIndex];
        const galleryTitle = this.state.content.name;
        const galleryDescription = this.state.content.description;
        const contentData = contentObject.data;
        const contentCredits = contentObject.credits;

        return (
            <div className="contentPage">
                <div className="pageLayout">
                    <Header title={galleryTitle} history={this.props.history}/>


                    <div className="contentText">{galleryDescription}</div>

                    <div className="pageLayoutVisuals" id='pageLayoutVisuals'>
                        <div className={this.reactPlayerLayoutClass()}>
                            <ReactPlayer url={contentData} loop={true} width={'100%'} height={'100%'} controls={true} onProgress={(e) => {this.onProgress(e)}}
                                         playing/>
                        </div>

                    </div>
                    <div className="contentCredits">{contentCredits}</div>
                    <div>{this.navigationButtons()}</div>
                </div>

                {this.mediaPrecacher()}
            </div>
        )
    }


    render() {
        // Avoid bad renders Until gets redirected to buttonList
        if (this.state.content === undefined)
        {
            return (<></>);
        }
        return this.renderVideoContent()
    }
}




class Header extends Component {
    constructor(props) {
        super(props)
    }

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/index')
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