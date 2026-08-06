# CSS Hidden Scroll-Reveal Keyboard Focus Fix

A responsive pure HTML5 and CSS3 Scroll-Reveal component designed to prevent unrevealed animated elements from receiving premature keyboard `Tab` focus.

## Overview

When scroll-reveal elements are hidden using `opacity: 0` alone, assistive technologies and keyboard users can still navigate to interactive links and buttons inside the invisible elements via the `Tab` key. This component resolves the focus leak by combining `opacity: 0`, `visibility: hidden`, and `pointer-events: none` prior to activation, restoring full focusability only upon intersection activation (`visibility: visible; pointer-events: auto`).

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript execution.
- **Keyboard Focus Lock Fix**: `visibility: hidden` prevents `Tab` key focus on hidden elements.
- **Pointer Event Protection**: `pointer-events: none` prevents accidental clicks on invisible cards.
- **Smooth Reveal Physics**: `transform: translateY(0)` and `opacity: 1` transition upon activation.
- **WCAG AA Compliance**: High-contrast dark mode colors (>4.5:1 ratio).
- **Prefers-Reduced-Motion**: Disables translate motion for motion-sensitive users.

## Folder Structure

```
css-hidden-scroll-reveal-focus/
├── demo.html    # HTML structure with reveal cards & interactive links
├── style.css    # CSS visibility lock rules, variables & animations
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<article class="card reveal-card" id="reveal-1">
  <div class="card-badge">Revealed Element 1</div>
  <h2 class="card-title">Scroll Revealed Component 1</h2>
  <p class="card-text">This element is properly hidden with visibility: hidden before activation.</p>
  <a href="#" class="card-link">Revealed Action Button 1 &rarr;</a>
</article>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --accent-cyan: #38bdf8;
  --focus-ring: #38bdf8;

  --radius-lg: 16px;
}
```

## Customization

Adjust reveal translate distance or animation timing:

```css
.reveal-card {
  transform: translateY(40px); /* Custom entrance offset */
}
```

## Accessibility

- **Focus Lock Fix**: `visibility: hidden` ensures keyboard focus skips invisible elements.
- **Focus Ring Indicators**: High-visibility focus indicators on interactive links.
- **WCAG AA Compliance**: High text-to-background contrast ratios.

## Responsive Behaviour

- **Desktop (680px+)**: Centered card layout with 680px max width.
- **Mobile (<480px)**: Fluid mobile layout scaling to small screens.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
