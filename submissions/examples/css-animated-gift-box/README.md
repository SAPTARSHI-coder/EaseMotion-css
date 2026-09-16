# CSS Animated Gift Box

A playful gift box component created entirely with HTML and CSS. The box shakes when hovered or focused, then the lid opens to reveal a hidden surprise message.

## Features

* Pure HTML and CSS
* No JavaScript required
* Shake animation
* Animated opening lid
* Hidden content reveal
* Keyboard focus support
* Responsive design
* Reduced-motion support
* Easy to customize

## Demo

Open `demo.html` in a modern browser.

Hover over the gift box or focus it using the keyboard to trigger the animation.

## File Structure

```text
css-animated-gift-box/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The component uses CSS:

* `@keyframes` for the shaking animation
* `transform` for the opening lid
* `opacity` and `translateY()` for revealing the content
* `:hover` for mouse interaction
* `:focus-visible` for keyboard interaction
* Media queries for responsive layouts
* `prefers-reduced-motion` for accessibility

## Usage

Place the following structure in your HTML:

```html
<div class="gift" tabindex="0">
    <div class="gift-lid">
        <span class="lid-ribbon"></span>
    </div>

    <div class="gift-box">
        <span class="box-ribbon"></span>

        <div class="gift-content">
            <strong>Surprise!</strong>
            <span>You found a gift!</span>
        </div>
    </div>
</div>
```

Then include:

```html
<link rel="stylesheet" href="style.css">
```

## Accessibility

The gift is keyboard focusable using `tabindex="0"` and responds to `:focus-visible`.

The animation also respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

## Customization

You can change the gift size using the CSS custom properties:

```css
.gift {
    --gift-width: 220px;
    --gift-height: 160px;
}
```

Colors can also be changed through the variables in `:root`.

## Browser Support

The component uses standard modern CSS features including:

* CSS custom properties
* CSS animations
* CSS transforms
* CSS gradients
* Media queries

A modern browser is recommended.

## License

This example is contributed to the EaseMotion CSS project under the project's existing license.
