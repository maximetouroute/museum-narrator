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



export const RPI_IP = '10.3.141.1:5000';

export const homepageContent = {
    title: <>Dans les 2 sens</>,
    subtitle: `By The Musemotifs`,
    actionButtonName: `Get in !`,
    redirectTo: 'choice/questionOne'
};


function generateArtworkColorPalette(artworkKey, colors) {
    return  {
        artworkKey: artworkKey,
        colorPalette: colors
    }
}

export const artworkColorPalettes = [

    generateArtworkColorPalette('amusement', [
        '#DF9696',
    ]),

    generateArtworkColorPalette('reverie', [
        '#00626A',
    ]),

    generateArtworkColorPalette('curiosite', [
        '#36302F'
    ]),

    generateArtworkColorPalette('degout', [
        '#F9DC00',
    ]),

    generateArtworkColorPalette('serenite', [
        '#E4DD00'
    ]),

    generateArtworkColorPalette('ennui', [
        '#CF4C2E',
    ])
];


export const OSCConfig = {
    host:'192.168.43.76',
    port: 5000,
};

function thirdStageChoices() {
    return {
        name: 'continue',
        redirectTo: 'choice/questionTwo'
    }
}

function feelingChoices() {
    return [
        {
            name: 'Ennui',
            artworkKey: 'ennui',
            redirectTo: 'choice/ennui'
        },
        {
            name: 'Rêverie',
            artworkKey: 'reverie',
            redirectTo: 'choice/reverie'
        },
        {
            name: 'Amusement',
            artworkKey: 'amusement',
            redirectTo: 'choice/amusement'
        },
        {
            name: 'Sérénité',
            artworkKey: 'serenite',
            redirectTo: 'choice/serenite'
        },
        {
            name: 'Curiosité',
            artworkKey: 'curiosite',
            redirectTo: 'choice/curiosite'
        },
        {
            name: 'Dégoût',
            artworkKey: 'degout',
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

function rgb(r,g,b) {
    return {
        red: r,
        green: g,
        blue: b
    };
}

export const choicePages = {

    questionOne: {
        audio: soundNeutral,
        text: `Que ressens-tu face à cette oeuvre ?`,
        choices: feelingChoices()
    },

    questionTwo: {
        audio: mediationSound,
        text: `Et maintenant, ressens tu toujours la même chose ?`,
        choices: endChoices()
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
        ledColor: rgb(200,0,0),
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },


    amusement: {
        audio: mediationSound,
        ledColor: rgb(0,0,200),
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

    serenite: {
        audio: mediationSound,
        ledColor: rgb(100,100,100),
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
        ledColor: rgb(0,200,0),
        text: ``,
        choices: [
            thirdStageChoices()
        ]
    },

};


export const finalPageContent = {
    text: 'hello hello',
    artwork: artworkAmusement
};