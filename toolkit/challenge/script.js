(function(){
    'use strict';

    var map = L.map('map').setView([38.562917, -121.7713], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([38.562917, -121.7713]).addTo(map);
const circle = L.circle([38.562917, -121.7713], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const polygon = L.polygon([
    [38.562917, -121.79],
    [38.564182, -121.77],
    [38.564882, -121.78 ],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

}());

