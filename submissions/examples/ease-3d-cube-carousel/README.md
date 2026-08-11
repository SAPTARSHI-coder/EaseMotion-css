# Pure CSS 3D Cube Carousel

Building a functional image carousel typically requires massive JavaScript libraries (like Swiper.js) to handle state management, logic, and transitions. This submission implements a highly advanced, fully functional 3D rotating cube carousel natively in CSS.

### Usage
```html
<div class="ease-carousel-wrapper">
    <!-- State Management -->
    <input type="radio" name="cube" id="f1" checked>
    <input type="radio" name="cube" id="f2">
    
    <!-- 3D Scene -->
    <div class="ease-cube-scene">
        <div class="ease-cube">
            <div class="cube-face cube-front"><img src="1.jpg"></div>
            <div class="cube-face cube-right"><img src="2.jpg"></div>
        </div>
    </div>

    <!-- Navigation -->
    <div class="ease-carousel-controls">
        <label for="f1"></label>
        <label for="f2"></label>
    </div>
</div>
```

### How does it work without JavaScript?

This component combines two advanced CSS techniques:

1. **3D Spatial Mathematics:** By utilizing `perspective` on the scene and `transform-style: preserve-3d` on the cube container, we can physically assemble a 3D box. The 4 faces of the cube are positioned in space using `rotateY` (0, 90, 180, -90 degrees) and pushed outward using `translateZ`.
2. **The "Hidden Radio Button" State Hack:** CSS does not have variables for "state" (like React's `useState`). However, we can use invisible `<input type="radio">` elements. When a user clicks a visible `<label>` dot, the corresponding radio button is checked. We then use the CSS General Sibling Combinator (`~`) to say: *"When radio button 2 is checked, rotate the sibling `.ease-cube` element by -90 degrees on the Y axis."*

The result is a hardware-accelerated, incredibly impressive 3D interactive carousel that weighs 0 kilobytes of JavaScript.
