# CSS Kinetic Typography Cube

A bold brutalist design featuring a spinning 3D cube where every face acts as a scrolling marquee.

## Features

- **Pure CSS**: Fully built with HTML and CSS. No JavaScript needed for the cube rotation or text scrolling.
- **3D Transform**: The 6 faces of the cube are positioned using `transform: rotateY() translateZ()` and the container utilizes `transform-style: preserve-3d`.
- **CSS Marquee**: The text on the faces is animated using simple `translateX` keyframes, starting off-screen and scrolling infinitely. 
- **Opposing Animations**: Alternating lines of text scroll in reverse directions for dynamic kinetic movement.

## Preview

Open `demo.html` in your browser to view the cube.
