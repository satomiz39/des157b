(function(){
    'use strict';
    // const drag = document.querySelectorAll(".drag-drop");

// target elements with the "draggable" class
interact('.draggable')
.draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,

    // call this function on every dragend event
    end (event) {
      var textEl = event.target.querySelector('p')

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                   Math.pow(event.pageY - event.y0, 2) | 0))
          .toFixed(2) + 'px')
    }
  }
})

function dragMoveListener (event) {
var target = event.target
// keep the dragged position in the data-x/data-y attributes
var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

// translate the element
target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

// update the posiion attributes
target.setAttribute('data-x', x)
target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop, .drag-drop1, .drag-drop2, .drag-drop3, .drag-drop4, .drag-drop5, .drag-drop6, .drag-drop7, .drag-drop8',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      // draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      // event.relatedTarget.textContent = 'Dragged out'
    },
    // ondrop: function (event) {
    //   event.relatedTarget.textContent = 'Dropped'
    // },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })

  interact('.drag-drop1, .drag-drop2, .drag-drop3, .drag-drop4, .drag-drop5, .drag-drop6, .drag-drop7, .drag-drop8')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  });

  // confetti
  document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    confetti();
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });

    // // confetti modal starts
    //   const openbtn = document.querySelector(".open");
    //   const modal = document.querySelector('.box');
    //   const closeBtn = document.querySelector('.close');
    //   // we are saying that when we click This
    //   openbtn.addEventListener("click", () => {
    //     modal.classList.add('visible')
    //     openbtn.classList.add('hidden');
    //     const startit = () => {
    //       setTimeout(function () {
    //         confetti.start();
    //       }, 1000);
    //     };
    //     // Stops
    //     const stopit = () => {
    //       setTimeout(function () {
    //         confetti.stop();
    //       }, 5000);
    //     };
    //     // playing start
    //     startit();
    //     // stoping it
    //     stopit();
    //   });
    //   closeBtn.addEventListener('click', () => {
    //     modal.classList.remove('visible')
    //     openbtn.classList.remove('hidden');
    //   })

})(); // end IIFE