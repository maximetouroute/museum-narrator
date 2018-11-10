import React from 'react';


import soundHappy from './../res/happy.mp3';
import soundSad from './../res/sad.mp3';
import soundNeutral from './../res/home.mp3';


export const ContentTypes = Object.freeze({
    CHOICE:   Symbol("choice"),
    JSX:  Symbol("jsx"),
});




export const homepageContent = {
    title: <>Le Cheval</>,
    subtitle: `By The Musemotifs`,
    actionButtonName: `Get in !`
};


export const contentPages = {


};

export const choicePages = {

    firstChoice: {
        audio: soundNeutral,
        text: `what do you feel ?`,
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
        choices: [
            {
                name: 'Try again',
                redirectTo: ''
            }
        ]
    },


};