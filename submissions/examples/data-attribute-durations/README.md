# HTML Data Attribute Durations

A scalable utility system that allows developers to control animation durations and delays directly from their HTML using `data-duration` and `data-delay` attributes, completely bypassing the need to write custom CSS classes for timing tweaks.

## Features
- **No Inline Styles Required**: Avoids the messy `style="animation-duration: 2s"` anti-pattern.
- **CSS Variable Mapping**: Maps standard string values in HTML data attributes (like `data-duration="200ms"`) to internal CSS custom properties (`--em-duration`).
- **Global Fallbacks**: If no data attribute is provided, the system gracefully falls back to a default `0.5s` duration and `0s` delay via the universal `*` selector.
- **Component Agnostic**: The `--em-duration` variable can be applied to both `@keyframes` animations and state `transition` properties (like hover effects).

## Usage
Open `demo.html` in your browser. 
You will see three cards load sequentially based on their `data-delay` attributes, and they animate at different speeds based on their `data-duration` attributes. 
The buttons inside the cards also inherit different hover transition speeds!

HTML Example:
```html
<div class="fade-in" data-duration="1.5s" data-delay="300ms">
    I will wait 300ms, then take 1.5 seconds to fade in.
</div>
```

CSS Engine:
```css
[data-duration="1.5s"] { --em-duration: 1.5s; }
.fade-in {
    animation-duration: var(--em-duration);
    animation-delay: var(--em-delay);
}
```

## Files
- `demo.html`: The HTML structure demonstrating the application of the data attributes.
- `style.css`: The styling engine that maps the data attributes to the CSS variables.
