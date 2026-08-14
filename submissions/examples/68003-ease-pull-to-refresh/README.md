# Pull to Refresh Indicator Component (`ease-pull-to-refresh`)

A pure HTML + Vanilla CSS mobile pull-to-refresh indicator component featuring a realistic mobile smartphone viewport showcase, pull-down movement and rotation animations (`@keyframes pull-refresh-rotate`, `pull-refresh-bounce`, `pull-refresh-settle`), 5 visual interaction states (Idle, Pulling, Release to refresh, Refreshing, Complete), pure CSS state controls, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive mobile interaction indicator without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **5 Interaction Visual States**:
  - **1. Idle / Default**: Indicator hidden above viewport (`transform: translateY(-80px)`, `opacity: 0`).
  - **2. Pulling**: Indicator partially enters viewport (`transform: translateY(24px)`, `rotate(120deg)`), text: "Pull down to refresh...".
  - **3. Release to Refresh**: Indicator fully enters viewport (`transform: translateY(48px)`, `rotate(180deg)`), text: "Release to refresh".
  - **4. Refreshing**: Continuous 360-degree rotation (`@keyframes pull-refresh-rotate`) + bounce animation (`@keyframes pull-refresh-bounce`), text: "Updating feed...".
  - **5. Complete**: Success checkmark display + settle animation (`@keyframes pull-refresh-settle`) with emerald success color (`#10b981`), text: "Feed updated!".
- **Pure CSS State Engine**: State switching driven by radio controls (`<input type="radio" name="refresh-state">`) mapped to keyboard-navigable button labels (`<label for="...">`).
- **100% Accessible**: Built using semantic `<section>`, `<article>`, `<fieldset>`, and `<output id="refresh-status">` providing explicit status text alongside visual icons. Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Smartphone viewport scales cleanly down to 320px mobile screens without horizontal overflow.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="mobile-viewport">
  <div class="pull-refresh-indicator">
    <div class="refresh-icon-circle">↻</div>
    <output id="refresh-status">Updating feed...</output>
  </div>
  <section class="feed-container">
    <article class="feed-card">Content post</article>
  </section>
</div>
```

### Customization Variables

```css
:root {
  --refresh-bg: #f8fafc;
  --refresh-accent: #0284c7;
  --refresh-success: #10b981;
  --refresh-speed: 400ms;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/68003-ease-pull-to-refresh/demo.html) directly in any modern web browser to interact with the pull-to-refresh component offline.
