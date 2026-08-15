# Dynamic Card Documentation

A responsive Dynamic Card component featuring hover interactions, animated content reveal, and modern card styling.

## Features

- Responsive card layout
- Smooth hover animations
- Animated content reveal
- Call-to-action button
- Modern design aesthetic
- Pure HTML and CSS

## Files

- demo.html
- style.css

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the card structure:

```html
<div class="dynamic-card">
  <div class="card-image"></div>

  <div class="card-content">
    <h2>Dynamic Card</h2>
    <p>Interactive card with animated hover effects.</p>

    <button>Learn More</button>
  </div>
</div>
```

## Customization

Change accent color:

```css
button{
  background:#6366f1;
}
```

Adjust hover animation:

```css
.dynamic-card:hover{
  transform:translateY(-10px);
}
```

## Responsive Behavior

The component automatically scales for mobile, tablet, and desktop screens.