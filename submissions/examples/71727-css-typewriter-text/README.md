# CSS Typewriter Text Animation Component (`ease-typewriter`)

A pure HTML + Vanilla CSS typewriter text animation component featuring character-by-character `steps()` width reveals (`@keyframes ease-typewriter-reveal`), blinking retro terminal cursor (`border-right`), CSS custom properties API (`--ease-typewriter-steps`, `--ease-typewriter-duration`, `--ease-typewriter-delay`), dark/light theme adaptation, and reduced motion accessibility fallbacks.

## Features

- **Pure HTML + CSS**: 100% responsive typewriter text animation without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Progressive Width Reveal via `steps()`**: Uses `white-space: nowrap` and `overflow: hidden` with `width: 0` to `width: 100%` keyframe steps (`@keyframes ease-typewriter-reveal`) to simulate realistic character typing.
- **Blinking Cursor**: Implements a retro terminal cursor using `border-right: 3px solid var(--ease-typewriter-cursor-color)` animated via `@keyframes ease-typewriter-blink`.
- **CSS Custom Properties API**:
  - `--ease-typewriter-steps`: Character count steps (e.g. `32`)
  - `--ease-typewriter-duration`: Typing duration (e.g. `2.8s`)
  - `--ease-typewriter-delay`: Optional typing delay (e.g. `0s`)
  - `--ease-typewriter-cursor-color`: Cursor border color (e.g. `#0284c7`)
- **100% Accessible**: Built using semantic heading (`<h1>`) and text markup. Includes `@media (prefers-reduced-motion: reduce)` fallbacks (`width: auto !important; border-right: none !important; animation: none !important;`) for instant, readable static text.
- **Responsive & Mobile Ready**: Scalable monospace text typography adjusts fluidly down to mobile viewports (320px–1440px+) without horizontal scrollbars.
- **Theme Adaptability & Motion Controls**: Supports dark terminal space theme default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Default Typewriter Text -->
<h1
  class="ease-typewriter"
  style="--ease-typewriter-steps: 32; --ease-typewriter-duration: 2.8s;"
>
  Build Pure CSS Motion &amp; Animations
</h1>

<!-- Delayed Typewriter Paragraph with Custom Cursor Color -->
<p
  class="ease-typewriter"
  style="--ease-typewriter-steps: 28; --ease-typewriter-duration: 2.5s; --ease-typewriter-cursor-color: #f43f5e;"
>
  Cyberpunk Security Enabled.
</p>
```

### Customization Variables

```css
.ease-typewriter {
  --ease-typewriter-steps: 35;
  --ease-typewriter-duration: 3s;
  --ease-typewriter-delay: 0.5s;
  --ease-typewriter-cursor-color: #10b981;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71727-css-typewriter-text/demo.html) directly in any modern web browser to interact with the typewriter text animation component offline.
