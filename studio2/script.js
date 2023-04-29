(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const water = await fetch('data/water.json');
        const data = await water.json();
      
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        console.log(globalData);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
        makeBars(globalData);
    }

    getData();
    function makeBars(data){
        const mondayWater = data[0].water;
        const tuesdayWater = data[1].water;
        const wednesdayWater = data[2].water;
        const thursdayWater = data[3].water;
        const fridayWater = data[4].water;
        const saturdayWater = data[5].water;
        const sundayWater = data[6].water;
        document.querySelector('.barColorMonday').style.width = mondayWater + '%';
        document.querySelector('.barColorTuesday').style.width = tuesdayWater + '%';
        document.querySelector('.barColorWednesday').style.width = wednesdayWater + '%';
        document.querySelector('.barColorThursday').style.width = thursdayWater + '%';
        document.querySelector('.barColorFriday').style.width = fridayWater + '%';
        document.querySelector('.barColorSaturday').style.width = saturdayWater + '%';
        document.querySelector('.barColorSunday').style.width = sundayWater + '%';

        const bars =  document.querySelectorAll('.barBase div');
        const water = document.querySelector('.water');


        for (const eachBar of bars){
            eachBar.addEventListener('mouseover', function(event){
            
                const thisBar = event.target.className;
                if (thisBar == 'barColorMonday'){
                water.style.height = mondayWater + '%';
                document.querySelector('#how').innerHTML = data[0].how;
                }
                else if (thisBar == 'barColorTuesday'){
                    water.style.height = tuesdayWater + '%';
                    document.querySelector('#how').innerHTML = data[1].how;
                }
                else if (thisBar == 'barColorWednesday'){
                    water.style.height = wednesdayWater + '%';
                    document.querySelector('#how').innerHTML = data[2].how;
                }
                else if (thisBar == 'barColorThursday'){
                    water.style.height = thursdayWater + '%';
                    document.querySelector('#how').innerHTML = data[3].how;
                }
                else if (thisBar == 'barColorFriday'){
                    water.style.height = fridayWater + '%';
                    document.querySelector('#how').innerHTML = data[4].how;
                }
                else if (thisBar == 'barColorSaturday'){
                    water.style.height = saturdayWater + '%';
                    document.querySelector('#how').innerHTML = data[5].how;
                }
                else if (thisBar == 'barColorSunday'){
                    water.style.height = sundayWater + '%';
                    document.querySelector('#how').innerHTML = data[6].how;
                }
              
            });
        }
    };
   
   

})(); // end IIFE