(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const circleFace = document.querySelector('#face');
    const headerBg1 = document.querySelector('#headerBg1');
    const headerBg2 = document.querySelector('#headerBg2');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            circleFace.className = 'switch';
            headerBg1.className = 'switch';
            headerBg2.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            circleFace.removeAttribute('class');
            headerBg1.removeAttribute('class');
            headerBg2.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()