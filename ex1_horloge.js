import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;



function step() {
    var now = new Date();
    var heure = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();
    ReactDOM.render(
        <p>il est : {heure} : {minutes} : {secondes}</p>,
        document.getElementById('root')
    );
}

setInterval(step, 1000);