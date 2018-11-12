import React, {Component} from 'react';


export default class Admin extends Component {

    constructor(props) {
        super(props);

        this.openFullscreen.bind(this);
        this.goToHome.bind(this);
    }


     openFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    goToHome() {
        this.props.history.push(process.env.PUBLIC_URL + '/')
    }

    render() {

        return (<>
                <h1>ADMIN PAGE</h1>
                <button onClick={() => {this.openFullscreen()}}>REQUEST FULL SCREEN</button>
                <br/><br/><br/>
                <button onClick={() => {this.goToHome()}}>GO BACK TO HOME</button>
            </>
        )
    }
}