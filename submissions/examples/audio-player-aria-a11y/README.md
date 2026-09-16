# Accessible Audio Player Toggle (ARIA Pressed State)

This submission demonstrates how to implement a fully accessible Play/Pause toggle button that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard navigation, and high contrast modes.

## Core Accessibility Features

### 1. The Toggle Button Pattern (`aria-pressed`)

A Play/Pause button is fundamentally a "toggle". It switches between two states: Playing and Paused. 

Many developers mistakenly change the `aria-label` dynamically (e.g., from "Play" to "Pause"). This can confuse screen reader users because the identity of the button changes underneath them.

The correct specification is to keep the label static (e.g., "Play or pause track") and use `aria-pressed` to indicate the current state.

```html
<!-- Correct implementation -->
<button 
    aria-label="Play or pause track" 
    aria-pressed="false"
>
    <!-- SVGs go here -->
</button>
```

When `aria-pressed="false"`, the track is paused (the button is not pressed down).
When `aria-pressed="true"`, the track is playing (the button is pressed down).

Screen readers will announce: *"Play or pause track, toggle button, not pressed"* or *"Play or pause track, toggle button, pressed"*.

### 2. Semantic Visual States

To guarantee that the visual state of the component never falls out of sync with its accessibility state, we strictly forbid the use of JavaScript classes like `.is-playing` in our CSS. Instead, we style the component and swap icons by targeting the ARIA attribute directly:

```css
/* The CSS selector IS the accessibility attribute */
.play-btn[aria-pressed="true"] {
    background-color: var(--btn-pressed-bg);
}

/* Swap icons strictly based on the ARIA state */
.play-btn[aria-pressed="false"] .icon-pause { display: none; }
.play-btn[aria-pressed="true"] .icon-play { display: none; }
```

### 3. Accessible SVGs

Icons are meaningless to a screen reader. We must explicitly hide the Play and Pause SVGs from the accessibility tree so they don't generate noise.

```html
<svg aria-hidden="true">...</svg>
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard background colors are stripped away. The "playing" state (`aria-pressed="true"`) will become visually indistinguishable from the "paused" state if you only rely on `background-color`. We use the `forced-colors` media query to map the active state to the system's `Highlight` color.

```css
@media (forced-colors: active) {
    .play-btn[aria-pressed="true"] {
        border: 2px solid Highlight;
        background-color: Highlight;
        color: HighlightText;
    }
}
```
