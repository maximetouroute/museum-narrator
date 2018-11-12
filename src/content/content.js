import React from 'react';


import soundHappy from './../res/happy.mp3';
import mediationSound from './../res/happy.mp3';
import soundNeutral from './../res/home.mp3';
import logoHome from './../res/logo_home.png';


import finalSoundReverie from './../res/finalSounds/REVERIE.mp3';
import fsCuriosite from './../res/finalSounds/CURIOSITE.mp3';
import fsDegout from './../res/finalSounds/DEGOUT.mp3';
import fsSerenite from './../res/finalSounds/SERENITE.mp3';
import fsTristesse from './../res/finalSounds/TRISTESSE.mp3';
import fsEnnui from './../res/finalSounds/ENNUI.mp3';

import msReverie from './../res/mediationSounds/REVERIE.mp3';
import msCuriosite from './../res/mediationSounds/CURIOSITE.mp3';
import msDegout from './../res/mediationSounds/DEGOUT.mp3';
import msSerenite from './../res/mediationSounds/SERENITE.mp3';
import msTristesse from './../res/mediationSounds/TRISTESSE.mp3';
import msEnnui from './../res/mediationSounds/ENNUI.mp3';


import sBienvenue from './../res/sounds/bienvenue.mp3';
import sPartOne from './../res/sounds/partOne.mp3';
import sPartTwo from './../res/sounds/partTwo.mp3';
import sPartFinal from './../res/sounds/final.mp3'

export const ContentTypes = Object.freeze({
    CHOICE:   Symbol("choice"),
    JSX:  Symbol("jsx"),
});



export const RPI_IP = '10.3.141.1:5000';

export const homepageContent = {
    title: <>Dans les 2 sens</>,
    subtitle: `By The Musemotifs`,
    subsubtitle: `Prennez le casque situé à votre droite`,
    actionButtonName: `DÉMARRER`,
    redirectTo: 'choice/questionOne',
    logo: logoHome,
    audio: void 0
};


function generateArtworkColorPalette(artworkKey, colors) {
    return  {
        artworkKey: artworkKey,
        colorPalette: colors
    }
}

export const artworkColorPalettes = [

    generateArtworkColorPalette('tristesse', [
        '#F9DC00',
        '#CF4C2E',
        '#00626A',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
        '#46AE50',
        '#36302F'
    ]),

    generateArtworkColorPalette('reverie', [
        '#859ec7',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
    ]),

    generateArtworkColorPalette('curiosite', [
        '#F9DC00',
        '#CF4C2E',
        '#00626A',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
        '#46AE50',
        '#36302F'
    ]),

    generateArtworkColorPalette('degout', [
        '#F9DC00',
        '#CF4C2E',
        '#00626A',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
        '#46AE50',
        '#36302F'
    ]),

    generateArtworkColorPalette('serenite', [
        '#F9DC00',
        '#CF4C2E',
        '#00626A',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
        '#46AE50',
        '#36302F'
    ]),

    generateArtworkColorPalette('ennui', [
        '#F9DC00',
        '#CF4C2E',
        '#00626A',
        '#7D2A48',
        '#DF9696',
        '#F7A5OC',
        '#46AE50',
        '#36302F'
    ])
];


export const OSCConfig = {
    host:'192.168.43.76',
    port: 5000,
};

function thirdStageChoices() {
    return {
        name: `J'ai fini d'écouter`,
        redirectTo: 'choice/questionTwo'
    }
}

function feelingChoicesOne() {
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
            name: 'Tristesse',
            artworkKey: 'tristesse',
            redirectTo: 'choice/tristesse'
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

function feelingChoicesTwo() {
    return [
        {
            name: 'Ennuyé',
            artworkKey: 'ennui',
            redirectTo: 'final/ennui'
        },
        {
            name: 'Rêveur',
            artworkKey: 'reverie',
            redirectTo: 'final/reverie'
        },
        {
            name: 'Triste',
            artworkKey: 'tristesse',
            redirectTo: 'final/tristesse'
        },
        {
            name: 'Serein',
            artworkKey: 'serenite',
            redirectTo: 'final/serenite'
        },
        {
            name: 'Curieux',
            artworkKey: 'curiosite',
            redirectTo: 'final/curiosite'
        },
        {
            name: 'Dégoûté',
            artworkKey: 'degout',
            redirectTo: 'final/degout'
        }
    ]
}


function rgb(r,g,b) {
    return {
        red: r,
        green: g,
        blue: b
    };
}

function textForMediationPage() {
    return <>Laissez vous porter par la musique et écoutez <strong>Auguste Herbin</strong>...</>;
}

export const choicePages = {

    questionOne: {
        audio: sPartOne,
        text: <>Vous êtes face au tableau <br/><em>"Composition sur le mot Cheval" (1948)</em><br/> d'<strong>Auguste Herbin</strong></>,
        subtext: `Que vous inspire cette oeuvre ?`,
        choices: feelingChoicesOne()
    },

    questionTwo: {
        audio: sPartTwo,
        subtext: `Et maintenant, comment vous sentez-vous ?`,
        choices: feelingChoicesTwo()
    },

    ennui: {
        audio: msEnnui,
        ledColor: rgb(16,0,29),
        text: textForMediationPage(),
        choices: [
            thirdStageChoices()
        ]
    },

    reverie: {
        audio: msReverie,
        ledColor: rgb(102,43,36),
        text: textForMediationPage(),
        choices: [
            thirdStageChoices()
        ]
    },


    tristesse: {
        audio: msTristesse,
        text: textForMediationPage(),
        ledColor: rgb(0,12,24),
        choices: [
            thirdStageChoices()
        ]
    },

    serenite: {
        audio: msSerenite,
        ledColor: rgb(126,211,33),
        text: textForMediationPage(),
        choices: [
            thirdStageChoices()
        ]
    },

    curiosite: {
        audio: msCuriosite,
        ledColor: rgb(117,73,1),
        text: textForMediationPage(),
        choices: [
            thirdStageChoices()
        ]
    },

    degout: {
        audio: msDegout,
        ledColor: rgb(14,13,0),
        text: textForMediationPage(),
        choices: [
            thirdStageChoices()
        ]
    },

};


export const finalPageContent = {
    text: <>Voici votre émotion graphique et sonore <br/>selon <strong>l'alphabet plastique</strong> d'Auguste Herbin</>,
    subtext:<></>,
    audio: sPartFinal,
    sounds: {
        reverie: finalSoundReverie,
        ennui: fsEnnui,
        degout: fsDegout,
        curiosite: fsCuriosite,
        serenite: fsSerenite,
        tristesse: fsTristesse
    }
};