(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const water = await fetch('data/water.json');
        const data = await water.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showWaterInfo(point, data){
        const water = [
            // '<i class="far fa-angry"></i>',
            // '<i class="far fa-frown"></i>',
            // '<i class="far fa-meh"></i>',
            // '<i class="far fa-smile"></i>',
            // '<i class="far fa-grin-beam"></i>',
            // '<i class="far fa-grin-tears"></i>'
        ];
        document.querySelector('#reason').innerHTML = data[point].how;
        document.querySelector('#moods').innerHTML = water[ data[point].water ];
    }

    // Event listener for when the mouse moves
    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showWaterInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); // end IIFE