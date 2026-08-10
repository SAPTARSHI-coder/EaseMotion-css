````markdown
# CSS 3D-Flip Carousel for Fintech Dashboard

A responsive fintech dashboard component featuring interactive
3D-flipping financial cards using pure HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- Interactive 3D card flip
- CSS `perspective`
- CSS `transform-style: preserve-3d`
- `rotateY()` 3D animation
- `backface-visibility`
- Smooth transitions
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Fintech dashboard design
- `prefers-reduced-motion` support

## Files

```text
3d-flip-carousel/
├── demo.html
├── style.css
└── README.md
````

## How It Works

Each card contains a front and back face:

```html
<article class="flip-card">

    <div class="flip-card-inner">

        <div class="flip-card-front">
            Front content
        </div>

        <div class="flip-card-back">
            Back content
        </div>

    </div>

</article>
```

The inner element preserves the 3D transformation:

```css
.flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 750ms ease;
}
```

When the user hovers over the card:

```css
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
```

The back face is rotated by 180 degrees:

```css
.flip-card-back {
    transform: rotateY(180deg);
}
```

This creates the 3D flip effect without JavaScript.

## CSS Custom Properties

The component uses CSS custom properties for easy customization:

```css
:root {
    --background: #070b14;
    --surface: #101827;
    --primary: #7c5cff;
    --primary-light: #a896ff;
    --text: #f5f7ff;
    --muted: #8995ad;
    --success: #35d49a;
    --border: rgba(255, 255, 255, 0.1);
}
```

Change these values to customize the appearance.

## 3D Properties Used

The component uses:

* `perspective`
* `transform-style: preserve-3d`
* `transform: rotateY()`
* `backface-visibility`
* CSS transitions

## Responsive Design

The carousel adapts to:

* Desktop
* Tablet
* Mobile

On desktop, three cards are displayed in one row.

On tablets, cards adapt to a two-column layout.

On mobile, cards become a single-column layout.

## Accessibility

The component respects the user's motion preferences through:

```css
@media (prefers-reduced-motion: reduce) {
    /* Reduced animation */
}
```

This prevents unnecessary motion for users who prefer reduced
animations.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Transforms
* CSS Transitions
* CSS Media Queries

## Usage

Open `demo.html` directly in a browser.

No external dependencies or JavaScript libraries are required.

## License

This example is contributed to EaseMotion CSS according to the
repository contribution guidelines.

```
```
