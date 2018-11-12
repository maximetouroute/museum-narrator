import React, {Component} from 'react';
import {artworkColorPalettes} from "../../content/content";
import {SolidStateMemory} from "../../utils/SolidStateMemory";

const canvasWidth = 500;
const canvasHeight = 500;
const numberOfAreas = 4;
const areaWidth = canvasWidth / numberOfAreas;
const areaHeight = canvasHeight / numberOfAreas;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const testPalette = [
    '#F9DC00',
    '#CF4C2E',
    '#00626A',
    '#7D2A48',
    '#DF9696',
    '#F7A5OC',
    '#46AE50',
    '#36302F'
];

function getRandomColorForPalette(palette) {
    const randomIndex = Math.floor(randomBetween(0,palette.length));
    return palette[randomIndex];
}

function drawCube(ctx, position, size, color) {

    ctx.fillStyle = color;
    ctx.fillRect(position.x,position.y,size.x, size.y);
}

function drawTriangle(ctx, position, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();

    const upDownRandom =  Math.floor(randomBetween(1,2));

    if(upDownRandom===1) {
        // Top
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x+size.x, position.y);
        ctx.lineTo(position.x + size.x/2, position.y - size.y);
    } else {
        // Downside
        ctx.moveTo(position.x, position.y - size.y);
        ctx.lineTo(position.x+size.x, position.y - size.y);
        ctx.lineTo(position.x + size.x/2, position.y);
    }




    ctx.closePath();
    ctx.fill();
}

function drawCircle(ctx, position, radius, color) {
    const middle = {x: position.x + radius, y: position.y + radius};
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(middle.x, middle.y, radius,   0,2*Math.PI);
    ctx.fill();
}

function drawHalfCircle(ctx, position, radius, color) {
    const middle = {x: position.x + radius, y: position.y + radius};
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(middle.x, middle.y, radius,   0,Math.PI);
    ctx.fill();

}


function randomBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
}


// color palette
function getColorPaletteForCurrentFeelings() {
    let palette = [];
    const ssMemory = new SolidStateMemory();
    const feelings = ssMemory.getChoices();
    console.log('feelings-->');
    console.log(feelings);

    if(feelings===undefined || artworkColorPalettes===undefined) {
        console.info("DEFAULT CHOICE!!!");
        return ['#7D2A48', '#F7A5OC'];
    }
    for(let feelingIndex = 0 ; feelingIndex<feelings.length ; feelingIndex++) {
        const currentFeeling = feelings[feelingIndex];
        console.log('for artworkKey :' + currentFeeling);

        for(let i=0 ; i<artworkColorPalettes.length ; i++) {
            const currentPalette = artworkColorPalettes[i];
            if(currentPalette.artworkKey === currentFeeling) {
                console.log('got correct palette');
                console.log(currentPalette);
                palette.push(...currentPalette.colorPalette);
            }
            }
        }

    return palette;
}

function drawShape(ctx, position, color) {
    const shapeRandom = Math.floor(randomBetween(1,4));
    if(shapeRandom===1)  {
        drawCube(ctx, position, {x:areaWidth, y:areaHeight}, color);
    }

    else if(shapeRandom===2) {

        // Random height for triangle
        const heightRandom = Math.floor(randomBetween(1,2));
        let height = 0;
        if(heightRandom===1) {
            height = areaHeight;
        } else if(heightRandom===2) {
            height = 2*areaHeight;
        }

        drawTriangle(ctx, position, {x:areaWidth, y:height}, color);
    }

    else if(shapeRandom===3) {
        drawCircle(ctx, position, areaWidth/2, color);
    }

    else if(shapeRandom===4) {
        drawHalfCircle(ctx, position, areaWidth/2, color);
    }
}
export class GenerativeArtwork extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        //background
        ctx.fillStyle = getRandomColorForPalette(getColorPaletteForCurrentFeelings());
        ctx.fillRect(0,0,canvasWidth, canvasHeight);

        const colorPalette = getColorPaletteForCurrentFeelings();
        for(let width=0 ; width<canvasWidth; width+=areaWidth) {
            for( let height=areaHeight ; height<canvasHeight ; height+=areaHeight) {


                // kip some areas
                const shouldWeSkip = Math.floor(randomBetween(1,15));
                if(shouldWeSkip===1) {
                    continue;
                } else if (shouldWeSkip > 12) {
                    // Double for some
                    const colorForThisIteration = getRandomColorForPalette(colorPalette);
                    drawShape(ctx, {x:width, y:height}, colorForThisIteration)
                }

                const colorForThisIteration = getRandomColorForPalette(colorPalette);
                drawShape(ctx, {x:width, y:height}, colorForThisIteration)


            }
        }

    }

    render() {
        return(
            <div style={{alignSelf: 'center', backgroundColor: `white`, padding: `3em`, border: `solid 2px dimgray`}}>
                <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />
            </div>
        )
    }
}
