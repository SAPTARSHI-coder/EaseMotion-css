# CSS Emoji Reaction Bar

A pure CSS interactive reaction bar where emojis pop, float, and display tooltips upon hovering, mimicking the reaction interactions seen in popular social media applications.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS transitions and transforms for fluid animations.
- **Pop and Float Animations**: Hovering over an emoji causes it to spring upwards (`translateY`) and scale up (`scale`), using a bouncy `cubic-bezier` timing function.
- **Neighbor Effect**: When interacting with one emoji, neighboring emojis shrink slightly and desaturate, creating a dynamic wave-like focus effect.
- **Hover Reveal Capability**: Includes an implementation for a hidden reaction bar that elegantly fades and springs into view when a trigger button is hovered.
- **Accessible & Responsive**: Fully supports keyboard navigation (`:focus-within`) and ARIA labels. Respects user preferences by gracefully scaling back the bouncy animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Simply drop the HTML structure into your layout. 

```html
<!-- Static Inline Version -->
<div class="reaction-bar" role="toolbar" aria-label="Reaction bar">
  <button class="reaction-btn" aria-label="Like">👍</button>
  <button class="reaction-btn" aria-label="Love">❤️</button>
  <!-- Add more emojis as needed -->
</div>

<!-- Hover Reveal Version -->
<div class="hover-reveal-container">
  <button class="reaction-trigger">React</button>
  <div class="reaction-bar" role="toolbar" aria-label="Reaction bar">
    <!-- Emojis -->
  </div>
</div>
```

## CSS Custom Properties
Easily customize the layout using the root variables in `style.css`:
- `--bg-color`: Page background color (default: `#f3f4f6`)
- `--bar-bg`: Reaction bar background color (default: `#ffffff`)
- `--bar-border`: Reaction bar border color (default: `#e5e7eb`)
- `--emoji-size`: Base font size for the emojis (default: `32px`)
- `--gap`: Spacing between emojis (default: `12px`)
- `--shadow-color`: Base shadow color (default: `rgba(0, 0, 0, 0.1)`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
