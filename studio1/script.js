(function() {
    'use strict';
    console.log('reading');
    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    // add the loading icon variable here
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const feather = document.querySelector('#feather');
    const poem = {
        start: [0, 5, 8, 10],
        // stop: [4, 7, 10],
        line: [line1, line2, line3, feather]
    };


    const loading = document.querySelector('.fa-dove');

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    })

    const intervalID = setInterval(checkTime, 1000);

    console.log(checkTime)
    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime) {
                poem.line[i].className = "showing";
            }
            if(myVideo.currentTime > 10){
            const paragraphs = document.querySelectorAll('#poem p');
            for (const eachp of paragraphs){eachp.className='hidden'}
                feather.classList.remove('hidden');
            }
            
        }
    }

})();