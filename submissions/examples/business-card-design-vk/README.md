# CSS Business Card Design

A pure CSS double-sided business card featuring a smooth 3D flip animation between front and back faces.

## Features

- Pure HTML and CSS
- No JavaScript
- Double-sided business card
- Smooth 3D flip animation
- Click-to-flip interaction
- Keyboard accessible
- Focus-visible state
- Responsive design
- Customizable card content and styling
- `prefers-reduced-motion` support
- Uses CSS `perspective`, `transform-style`, and `backface-visibility`

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the card markup:

```html
<input
    class="card-toggle"
    type="checkbox"
    id="business-card-toggle"
    aria-label="Flip business card"
>

<div class="card-wrapper">

    <label
        class="business-card"
        for="business-card-toggle"
        aria-label="Flip business card"
    >

        <span class="card-face card-front">

            <span class="card-logo">
                VK
            </span>

            <span class="card-front-content">
                <strong>Vaishnavi K</strong>
                <span>Computer Science &amp; AI</span>
            </span>

            <span class="card-hint">
                Click to flip
            </span>

        </span>

        <span class="card-face card-back">

            <span class="card-back-title">
                Let's Connect
            </span>

            <span class="card-contact">
                <span aria-hidden="true">✉</span>
                <span>hello@example.com</span>
            </span>

            <span class="card-contact">
                <span aria-hidden="true">⌘</span>
                <span>github.com/username</span>
            </span>

            <span class="card-contact">
                <span aria-hidden="true">in</span>
                <span>linkedin.com/in/username</span>
            </span>

            <span class="card-hint">
                Click to flip back
            </span>

        </span>

    </label>
</div>
```

Place the card inside a container with the required perspective.

## How It Works

The card uses a hidden checkbox as the CSS state controller.

When the checkbox is selected:

```css
.card-toggle:checked + .card-wrapper .business-card {
    transform: rotateY(180deg);
}
```

The card uses:

```css
transform-style: preserve-3d;
```

to preserve the 3D positioning of both faces.

The front and back faces use:

```css
backface-visibility: hidden;
```

so only the appropriate side is visible during the rotation.

The back face is initially rotated:

```css
.card-back {
    transform: rotateY(180deg);
}
```

Together, these properties create the double-sided 3D card effect without JavaScript.

## Customization

Change the card width:

```css
.card-wrapper {
    width: min(100%, 430px);
}
```

Change the flip duration:

```css
.business-card {
    transition: transform 0.8s ease;
}
```

Change the card corner radius:

```css
.card-face {
    border-radius: 22px;
}
```

Change the card background:

```css
.card-front {
    background: linear-gradient(
        135deg,
        #292929,
        #111111
    );
}
```

Change the 3D perspective:

```css
.card-wrapper {
    perspective: 1200px;
}
```

## Accessibility

The card uses a native checkbox as its state control, allowing the component to be operated using keyboard input.

The checkbox includes:

```html
aria-label="Flip business card"
```

A visible focus indicator is provided for keyboard users:

```css
.card-toggle:focus-visible + .card-wrapper .business-card {
    outline: 3px solid #ffffff;
    outline-offset: 8px;
}
```

Decorative contact icons use:

```html
aria-hidden="true"
```

so they are not unnecessarily announced by assistive technologies.

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, the flip transition is removed:

```css
@media (prefers-reduced-motion: reduce) {
    .business-card {
        transition: none;
    }
}
```

This prevents unnecessary animation for users who have requested reduced motion.

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

Click the card to flip between the front and back faces.

The card can also be focused and operated using the keyboard.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS 3D transforms, perspective, transitions, pseudo-elements, responsive sizing, and native form controls can create an interactive double-sided UI component without JavaScript or external libraries.

It can be used for:

- Personal business cards
- Digital contact cards
- Portfolio profiles
- Team member cards
- Professional profile components
- Contact information interfaces

## Files

- `demo.html` — Demo page
- `style.css` — Business card styling and 3D flip animation
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.