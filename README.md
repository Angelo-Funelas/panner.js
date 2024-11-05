# Panner.js 🍳
### A barebones javascript module for panning & zooming
[Sample](https://angelo-funelas.github.io/panner.js/)
## Installation
1. Import the pannerInit function from the `panner.js` module in an existing javascript file.
```javascript
import { pannerInit } from "./panner.js"
```
2. Link `panner.css` as a stylesheet in your html file.
```html
<link rel="stylesheet" href="./static/styles/panner.css">
``` 

## Usage
1. Follow the html structure below.
```html
<div id="panner-container">
    <div id="canvas">
        <img class="image" src="example.png">
        <div class="panner_interface"></div>
    </div>
</div>
```
2. In your javascript file, initialize panner with the `pannerInit` function. Pass in the element you want to pan as well as your configurations.
> Note: Make sure the element passed has has an immediate parent with the class `panner-container`.
```javascript
pannerInit(element, {
    onDrag: function() {},
    onDragStart: function() {},
    onDragEnd: function() {},
    onClick: (x, y, clientX, clientY) => {},
    zoom: {
        value: 10,
        allow: true,
        min: 1,
        max: 40,
        step: 0.5,
        center: null
    },
    pos: "center"
})
```
## Example
> View `index.html` to use as an example.