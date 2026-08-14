# Liquid Wave Button

Buttons that "fill up" with an undulating liquid or gooey wave animation on hover are incredibly popular on creative agency sites. 

### Usage
```html
<button class="ease-liquid-button">
    <span>Hover Me</span>
</button>
```

### Why is it useful?
Most developers assume that achieving a fluid, sloshing liquid animation requires complex SVG `<path>` morphing or heavy JavaScript canvas rendering (like Three.js).

This component utilizes a brilliant pure CSS illusion. It creates a `::before` pseudo-element that acts as a giant square underneath the button. By applying `border-radius: 40%`, the square becomes an irregular squircle. When the user hovers, this shape `translate`s upwards and infinitely `rotate`s. Because the parent button has `overflow: hidden`, the spinning irregular edges of the squircle are clipped, creating a flawless illusion of a rising, sloshing liquid wave using nothing but hardware-accelerated CSS transforms.
