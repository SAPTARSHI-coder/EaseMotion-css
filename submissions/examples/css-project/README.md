# CSS Hologram Button

A futuristic **Hologram Button** created entirely with HTML and CSS.

The component combines glowing borders, holographic gradients, animated scan lines, light sweeps, digital distortion, and a floating holographic shadow to create a futuristic interface element.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Holographic glow
* Animated scan lines
* Moving light sweep
* Glowing border animation
* Hover elevation effect
* Digital glitch effect
* Animated holographic shadow
* Responsive design
* Reduced-motion accessibility support

## File Structure

```text
css-hologram-button/
│
├── demo.html
├── style.css
└── README.md
```

## How to Run

1. Create a folder named `css-hologram-button`.
2. Create the following files:

   * `demo.html`
   * `style.css`
   * `README.md`
3. Add the provided code to each file.
4. Open `demo.html` in a modern browser.

No installation or dependencies are required.

## How It Works

The holographic effect is created by combining several CSS techniques:

* Linear gradients
* Radial gradients
* Box shadows
* Pseudo-elements
* CSS animations
* Transforms
* Clip paths

No image assets or JavaScript are required.

## Holographic Border

The button's glowing border uses a gradient combined with blur:

```css
.hologram-button::before {
    background:
        linear-gradient(
            90deg,
            transparent 5%,
            var(--cyan) 25%,
            var(--violet) 50%,
            var(--blue) 75%,
            transparent 95%
        );

    filter: blur(5px);
}
```

The opacity continuously changes through the `borderPulse` animation.

## Scan Line Effect

Horizontal scan lines are created using `repeating-linear-gradient()`:

```css
.scan-lines {
    background:
        repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 5px,
            rgba(111, 227, 255, 0.07) 6px,
            transparent 7px
        );
}
```

The lines are continuously moved vertically to create a holographic display effect.

## Light Sweep

A bright highlight travels across the button:

```css
.button-glitch {
    animation:
        lightSweep 3.2s ease-in-out infinite;
}
```

This creates the moving reflection seen on futuristic interfaces.

## Hover Effects

When the user hovers over the button:

* The button moves upward.
* The cyan glow becomes stronger.
* The border becomes brighter.
* The arrow moves diagonally.
* A subtle digital glitch effect appears.
* The holographic depth increases.

## Customization

### Change Button Text

Edit the HTML:

```html
<span class="button-text">INITIALIZE</span>
```

For example:

```html
<span class="button-text">LAUNCH SYSTEM</span>
```

### Change Button Size

Modify:

```css
.hologram-button {
    width: 270px;
    height: 82px;
}
```

### Change Hologram Colors

The main colors are defined in `:root`:

```css
:root {
    --cyan: #63e6ff;
    --blue: #5c8dff;
    --violet: #a66cff;
}
```

These can be changed to create different holographic color themes.

### Change Animation Speed

For the border:

```css
animation:
    borderPulse 2.5s ease-in-out infinite;
```

For the scan lines:

```css
animation:
    scanMove 2.5s linear infinite;
```

For the light sweep:

```css
animation:
    lightSweep 3.2s ease-in-out infinite;
```

## Technologies Used

* HTML5
* CSS3
* CSS Flexbox
* CSS Gradients
* CSS Animations
* CSS Pseudo-elements
* CSS Transforms
* CSS `clip-path`
* CSS Media Queries

## Responsive Design

On smaller screens:

* The hologram stage becomes shorter.
* The button width decreases.
* Typography scales down.
* The layout remains centered and touch-friendly.

## Accessibility

The component supports:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, the continuous holographic animations are disabled.

## Browser Support

Works in modern versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## License

Free to use, modify, and integrate into personal, educational, and open-source projects.

```
```
