import { pannerInit } from "./panner.js"

var target = document.getElementById('ateneo_map')
pannerInit(target, {
    onDrag: function() {},
    onDragStart: function() {},
    onDragEnd: function() {},
    onClick: (x, y, clientX, clientY) => {
        var pin = document.createElement("img");
        pin.src = "./static/images/pin.png";
        pin.onload = () => {
            pin.interfacePos = [x,y];
            pin.scaleWithZoom = true;
            pin.style.width = `${pin.naturalWidth*target.pixelSize}px`;
        }
        pin.style = `position: absolute; translate: ${x*target.pixelSize}px ${y*target.pixelSize}px`;
        pin.className = 'map-pin';
        target.querySelector(".panner_interface").append(pin);
    },
    onZoom: (pixelSize, zoomValue) => {},
    zoom: {
        value: 10,
        min: 1,
        max: 40,
        step: 0.1
    }
})