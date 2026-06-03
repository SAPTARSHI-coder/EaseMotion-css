# Animation: Parallax Tilt Effect

## Description
A 3D parallax tilt effect built 100% in pure CSS (No JavaScript). By utilizing an invisible 3x3 tracking grid mapped to general sibling selectors (`~`), the card smoothly tracks mouse movement and tilts in the corresponding 3D space.

## Features
- Pure CSS "Mouse Tracking" via invisible 9-zone grid
- 3D perspective transformations (`rotateX`, `rotateY`, `scale3d`)
- Hardware-accelerated and highly performant
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)

## Usage
Wrap your card element in the `.em-tilt-container` and include the 9 tracking zones before the `.em-tilt-card`.

```html
<div class="em-tilt-container">
    <div class="tilt-zone top-left"></div>
    <div class="tilt-zone top-mid"></div>
    <div class="tilt-zone bot-right"></div>
    
    <div class="em-tilt-card">
        Your Content Here
    </div>
</div>
