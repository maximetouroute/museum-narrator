import React from 'react';


import soundHappy from './../res/happy.mp3';
import mediationSound from './../res/happy.mp3';
import soundNeutral from './../res/home.mp3';


// Final artworks
import artworkDegout from './../res/artworks/degout.png';
import artworkReverie from './../res/artworks/reverie.png';
import artworkCuriosite from './../res/artworks/curiosite.png';
import artworkEnnui from './../res/artworks/ennui.png';
import artworkAmusement from './../res/artworks/amusement.png';
import artworkSerenite from './../res/artworks/serenite.png';

export const ContentTypes = Object.freeze({
    CHOICE:   Symbol("choice"),
    JSX:  Symbol("jsx"),
});




export const homepageContent = {
    title: <>Dans les 2 sens</>,
    subtitle: `By The Musemotifs`,
    actionButtonName: `Get in !`
};


export const OSCConfig = {
    host:'192.168.43.76',
    port: 5000,
};

function thirdStageChoices() {
    return {
        name: 'continue',
        redirectTo: 'choice/thirdStageChoices'
    }
}

function feelingChoices() {
    return [
        {
            name: 'Ennui',
            redirectTo: 'choice/ennui'
        },
        {
            name: 'Rêverie',
            redirectTo: 'choice/reverie'
        },
        {
            name: 'Amusement',
            redirectTo: 'choice/amusement'
        },
        {
            name: 'Sérénité',
            redirectTo: 'choice/serenite'
        },
        {
            name: 'Curiosité',
            redirectTo: 'choice/curiosite'
        },
        {
            name: 'Dégoût',
            redirectTo: 'choice/degout'
        }
    ]
}

function endChoices() {
    const daaa = feelingChoices().map(choice => {
        choice.redirectTo = 'final';
        return choice;
    });

    return daaa;
}

export const choicePages = {

    firstChoice: {
        audio: soundNeutral,
        text: `Que ressens-tu face à cette oeuvre ?`,
        choices: feelingChoices()
    },

    ennui: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    reverie: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },


    amusement: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    serenite: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    curiosite: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    degout: {
        audio: mediationSound,
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    thirdStageChoices: {
        audio: mediationSound,
        text: `Et maintenant, ressens tu toujours la même chose ?`,
        choices: endChoices()
    },


};


export const finalPageContent = {
    text: 'hello hello',
    artwork: artworkAmusement
};