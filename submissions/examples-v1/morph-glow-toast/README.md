# Morph Glow Toast

A modern toast notification component featuring a smooth morph entrance and glowing hover effect using only HTML and CSS.

## Features

- Pure HTML & CSS
- Morph + glow animation
- Responsive layout
- Accessible
- Supports `prefers-reduced-motion`
- No JavaScript required

## Folder

```
submissions/examples/morph-glow-toast/
```

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="em-toast success">
    <span class="icon">✔</span>

    <div>
        <h3>Success</h3>
        <p>Message</p>
    </div>
</div>
```

Available variants

- Success
- Warning
- Error

## CSS Custom Property

```css
--glow
```

Controls the glow color.

## Accessibility

- Responsive
- Keyboard friendly
- High contrast
- Supports reduced motion

## Browser Support

- Chrome
- Firefox
- Edge
- Safari