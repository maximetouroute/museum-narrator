import React from 'react';


import soundHappy from './../res/happy.mp3';
import soundSad from './../res/sad.mp3';
import soundNeutral from './../res/home.mp3';


export const ContentTypes = Object.freeze({
    CHOICE:   Symbol("choice"),
    JSX:  Symbol("jsx"),
});




export const homepageContent = {
    title: <>Emotion Emotion...</>,
    subtitle: `By The Musemotifs`,
    actionButtonName: `Get in !`
};


export const OSCConfig = {
    host:'192.168.1.38',
    port: 5000,
};

export const choicePages = {

    firstChoice: {
        audio: soundNeutral,
        text: `what do you feel ?`,
        oscOrder:`/millumin/action/launchColumn [1]`,
        choices: [
            {
                name: 'Sadness',
                redirectTo: 'choice/sadness'
            },
            {
                name: 'Happiness',
                redirectTo: 'choice/happiness'
            }
        ]
    },

    sadness: {
        audio: soundSad,
        oscOrder:`/millumin/action/launchColumn [2]`,
        text: `Well, too bad for you`,
        choices: [
            {
                name: `I want to be happy`,
                redirectTo: 'choice/happinessAfterSadness'
            }
        ]
    },

    happiness: {
        audio: soundHappy,
        text: `Good for you ! WHat else is there to say ?`,
        oscOrder:`/millumin/action/launchColumn [3]`,
        choices: [
            {
                name: 'Nothing !',
                redirectTo: 'choice/endCredits'
            }
        ]
    },

    happinessAfterSadness: {
        audio: soundHappy,
        text: `Aw ! I prefer that !`,
        oscOrder:`/millumin/action/launchColumn [3]`,
        choices: [
            {
                name: `I'm happy now`,
                redirectTo: 'choice/endCredits'
            }
        ]
    },

    endCredits: {
        audio: '',
        text: `Thank you for trying this installation !`,
        oscOrder:`/millumin/action/launchColumn [9]`,
        choices: [
            {
                name: 'Try again',
                redirectTo: ''
            }
        ]
    },


};