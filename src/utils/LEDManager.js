import {RPI_IP} from "../content/content";

export class LEDManager
{
    constructor()
    {

    }

    sendColor(r, g, b)
    {
        const color = {
            red: r,
            green: g,
            blue: b
        };
        const url = 'http://' + RPI_IP + '/colorControl';
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(color))
    }
}