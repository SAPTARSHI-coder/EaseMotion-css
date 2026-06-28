# Text Underline Offset (`ease-text-underline-offset`)

A showcase of modern typography utilities leveraging the CSS `text-underline-offset`, `text-decoration-thickness`, and `text-decoration-color` properties.

## 🚀 Features & EaseMotion Showcase

- **Descender-Safe Typography**: Demonstrates how pushing the `text-underline-offset` down by a few pixels prevents underlines from awkwardly striking through letters like `g`, `p`, and `y`.
- **Animated Highlights**: Shows how combining a negative offset (`-2px`) with a thick transparent color creates a native "highlighter marker" effect without needing bulky pseudo-elements (`::after`).
- **Smooth Transitions**: All `text-decoration` properties are fully animatable in modern browsers, providing buttery-smooth hover states out of the box.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a clean, animated underline:
```html
<a href="#" class="ease-underline-offset">My Link</a>
