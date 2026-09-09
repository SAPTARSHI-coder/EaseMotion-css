# CSS Database Schema Card

A clean and responsive database schema card built with pure HTML and CSS.

It displays a database table with column names, data types, primary keys, and unique keys in a structured card layout.

## Features

- Pure HTML and CSS
- No JavaScript required
- Responsive design
- Smooth card entrance animation
- Interactive row hover effect
- Primary and unique key indicators
- `prefers-reduced-motion` support
- Works by opening `demo.html` directly in a browser

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the schema card structure:

```html
<article class="schema-card">
    <header class="schema-header">
        <div>
            <span class="schema-label">DATABASE TABLE</span>
            <h1>users</h1>
        </div>
    </header>

    <div class="schema-table">
        <div class="schema-row">
            <span class="column-name">id</span>
            <span class="column-type">INT</span>
            <span class="column-key primary">PK</span>
        </div>
    </div>
</article>
```

## Customization

The main colors and card properties can be customized through CSS variables:

```css
:root {
    --schema-bg: #0f172a;
    --card-bg: #111827;
    --border: #263449;
    --text: #f8fafc;
    --muted: #94a3b8;
    --accent: #60a5fa;
}
```

## Accessibility

The component supports reduced-motion preferences using:

```css
@media (prefers-reduced-motion: reduce) {
    .schema-card {
        animation: none;
    }
}
```

## Browser Tested

- Microsoft Edge

## Files

- `demo.html` — Demo page
- `style.css` — Component styles and animations
- `README.md` — Documentation

## License

This example is provided as part of EaseMotion CSS.