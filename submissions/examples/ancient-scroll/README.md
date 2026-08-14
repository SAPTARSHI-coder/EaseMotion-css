````markdown
# CSS Ancient Scroll Card

A decorative **Ancient Scroll Card** created entirely with HTML and CSS.

The component recreates the appearance of an aged parchment manuscript using CSS gradients, shadows, textures, wooden rods, an antique seal, and classical typography.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Ancient parchment appearance
- Wooden scroll rods
- Decorative wax-style seal
- Paper aging effects
- Paper texture
- Historical typography
- Decorative divider
- Metadata section
- Hover animation
- Responsive design
- Reduced-motion accessibility support

## File Structure

```text
css-ancient-scroll-card/
│
├── demo.html
├── style.css
└── README.md
````

## How to Run

1. Create a folder named:

```text
css-ancient-scroll-card
```

2. Create these files:

```text
demo.html
style.css
README.md
```

3. Add the corresponding code to each file.

4. Open `demo.html` in a modern web browser.

No installation or external dependencies are required.

## Design Concept

The card is designed to resemble an ancient parchment document.

The visual structure contains:

* Top wooden scroll rod
* Rolled parchment
* Aged paper body
* Decorative seal
* Historical title
* Quote section
* Description
* Archive metadata
* Bottom wooden scroll rod

## Paper Texture

The parchment appearance is created using multiple CSS gradients:

```css
background:
    radial-gradient(
        ellipse at 20% 15%,
        rgba(255, 255, 255, 0.3),
        transparent 30%
    ),
    repeating-linear-gradient(
        0deg,
        rgba(91, 59, 25, 0.04) 0,
        rgba(91, 59, 25, 0.04) 1px,
        transparent 1px,
        transparent 4px
    ),
    var(--paper);
```

This creates subtle variations in the paper instead of requiring an image texture.

## Scroll Rod

The wooden rods use layered gradients:

```css
.wooden-rod {
    background:
        linear-gradient(
            90deg,
            #38200e,
            var(--wood-light),
            #4d2d13,
            #81562c,
            #38200e
        );
}
```

This gives the rod a wooden appearance without using an image.

## Decorative Seal

The circular seal is created with CSS borders and pseudo-elements:

```css
.seal::before {
    content: "";

    position: absolute;

    inset: 6px;

    border: 1px solid rgba(111, 72, 25, 0.45);

    border-radius: 50%;
}
```

The seal also rotates slightly to make it feel manually stamped.

## Changing the Content

The main title can be changed in `demo.html`:

```html
<h2>
    The Forgotten<br>
    Chronicle
</h2>
```

For example:

```html
<h2>
    The Lost<br>
    Kingdom
</h2>
```

The quote can also be replaced:

```html
<p class="quote">
    "Your historical quote goes here."
</p>
```

## Changing Metadata

The archive information can be modified:

```html
<div>
    <span>ERA</span>
    <strong>VIII</strong>
</div>

<div>
    <span>ORIGIN</span>
    <strong>UNKNOWN</strong>
</div>

<div>
    <span>STATUS</span>
    <strong>SEALED</strong>
</div>
```

## Customization

### Paper Color

Modify:

```css
:root {
    --paper: #d2b477;
    --paper-light: #e1c992;
    --paper-dark: #a7834d;
}
```

### Ink Color

Modify:

```css
:root {
    --ink: #3b2815;
    --ink-soft: #654c2c;
}
```

### Wood Color

Modify:

```css
:root {
    --wood: #4a2d16;
    --wood-light: #79512b;
}
```

## Hover Effect

When the cursor moves over the scroll:

* The card slightly rises.
* The parchment rotates slightly.
* The decorative seal scales and rotates.

```css
.scroll-card:hover {
    transform:
        translateY(-7px)
        rotate(-0.3deg);
}
```

## Responsive Design

### Desktop

The scroll is displayed as a wide parchment card.

### Tablet

The card padding and typography are reduced.

### Mobile

The metadata becomes a vertical layout and the parchment content uses smaller spacing.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Gradients
* CSS Pseudo-elements
* CSS Transforms
* CSS Transitions
* CSS Media Queries

## Accessibility

The component includes support for:

```css
@media (prefers-reduced-motion: reduce)
```

This prevents unnecessary motion for users who have enabled reduced-motion preferences.

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
