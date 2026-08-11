# CSS Thumbs Up Pop

A pure CSS animated thumbs-up button featuring a playful pop, squish, overshoot, and burst effect on click.

## Features

- Pure HTML and CSS
- No JavaScript
- Playful pop and squish animation
- Smooth overshoot and bounce effect
- Subtle burst particle effect
- Keyboard accessible
- Visible focus state
- Responsive design
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the thumbs-up button:

```html
<button
  class="thumb-button"
  type="button"
  aria-label="Like"
>
  <span class="thumb-icon" aria-hidden="true">👍</span>
</button>
```

Place the button inside your desired container.

## Customization

Change the button size:

```css
.thumb-button {
  width: 100px;
  height: 100px;
}
```

Change the thumbs-up icon size:

```css
.thumb-icon {
  font-size: 46px;
}
```

Change the button background:

```css
.thumb-button {
  background: #181818;
}
```

Change the animation speed:

```css
.thumb-button:active .thumb-icon {
  animation-duration: 0.65s;
}
```

## How It Works

The thumbs-up icon uses CSS transforms and keyframes to create a playful click animation.

The animation combines:

```css
transform: translateY() scale() rotate();
```

to create the pop and squish effect.

The animation sequence:

```text
Squish → Launch → Pop → Overshoot → Settle
```

The button also uses pseudo-elements to create small burst particles around the icon when clicked.

No JavaScript or external libraries are required.

## Accessibility

The component uses a semantic `<button>` element for keyboard interaction.

The thumbs-up icon is marked as decorative using:

```html
aria-hidden="true"
```

The button includes an accessible label:

```html
aria-label="Like"
```

A visible `:focus-visible` state is provided for keyboard users.

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, the animation is disabled to respect the user's motion preference.

```css
@media (prefers-reduced-motion: reduce) {
  .thumb-button,
  .thumb-icon {
    animation: none !important;
  }
}
```

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS transforms, keyframes, pseudo-elements, and responsive styling can create a playful interactive button without JavaScript.

It can be used for:

- Like buttons
- Social media interactions
- Feedback controls
- Reaction buttons
- Interactive dashboards
- Micro-interactions
- Modern UI components

## Files

- `demo.html` — Demo page
- `style.css` — Button styling and animation
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.