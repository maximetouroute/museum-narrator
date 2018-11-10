import React from 'react';


import soundOne from './../res/sound1.WAV';
import soundTwo from './../res/sound2.WAV';


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
        audio: soundOne,
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
        audio: soundTwo,
        text: `Well, too bad for you`,
        choices: [
            {
                name: `I want to be happy`,
                redirectTo: 'choice/happinessAfterSadness'
            }
        ]
    },

    happiness: {
        audio: '',
        text: `Good for you ! WHat else is there to say ?`,
        choices: [
            {
                name: 'Nothing !',
                redirectTo: 'choice/endCredits'
            }
        ]
    },

    happinessAfterSadness: {
        audio: '',
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