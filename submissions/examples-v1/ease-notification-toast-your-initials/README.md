# ease-notification-toast

A pure CSS toast and alert notification system for EaseMotion CSS. JavaScript is only needed for trigger/dismiss logic — all styling, positioning, entrance/exit animations, and progress bars are CSS-only.

## Features

- **4 severity levels** — Info, Success, Warning, Error with distinct colors and icons
- **4 fixed positions** — Top-left, Top-right, Bottom-left, Bottom-right
- **Directional entrance animations** — Slides in from the correct side based on position
- **Exit animation** — Smooth fade + scale + collapse
- **Auto-dismiss progress bar** — Visual countdown timer via CSS animation
- **Glassmorphism backdrop** — `backdrop-filter: blur()` with gradient backgrounds
- **Dark mode variant** — `ease-toast-dark` for dark-themed apps
- **Size modifiers** — Small (320px), Default (400px), Large (480px)
- **Animation overrides** — Fade-in or slide-up instead of directional slide
- **Persistent mode** — Requires manual dismissal, no progress bar
- **Accessible** — WCAG AA color contrast, focus-visible close button, `aria-label`
- **Mobile responsive** — Stacks to bottom full-width on screens &lt; 480px
- **`prefers-reduced-motion`** — Disables slide/scale, uses simple fade

## Usage

### Basic Toast with Auto-Dismiss

```html
&lt;div class="ease-toast-container ease-toast-container-top-right"&gt; &lt;div
class="ease-toast ease-toast-success"&gt; &lt;div class="ease-toast-content"&gt;
&lt;div class="ease-toast-title"&gt;Success&lt;/div&gt; &lt;div
class="ease-toast-message"&gt;Your changes have been saved.&lt;/div&gt;
&lt;/div&gt; &lt;button class="ease-toast-close" aria-label="Close
notification"&gt;&lt;/button&gt; &lt;div
class="ease-toast-progress"&gt;&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
```
