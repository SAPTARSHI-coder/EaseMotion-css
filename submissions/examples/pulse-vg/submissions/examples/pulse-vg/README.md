# Pulse Animation Example

A lightweight, reusable pulse animation built with EaseMotion CSS utility classes, demonstrated across common UI components: buttons, cards, icons, notifications, and badges.

## Feature Overview

- Reusable `.pulse` utility class using `transform` and `opacity` for smooth, GPU-friendly animation
- Speed modifiers: `.pulse-slow` and `.pulse-fast`
- Respects `prefers-reduced-motion` for accessibility
- Fully responsive (desktop, tablet, mobile)
- Zero dependencies — pure HTML/CSS

## Installation

Copy the three files below into your project:
Then open `demo.html` in any browser, or link `style.css` into your own page.

## Usage

Add the `.pulse` class to any element:

```html
<button class="btn pulse">Subscribe</button>
```

Combine with a speed modifier:

```html
<div class="icon-circle pulse pulse-fast">🔔</div>
```

## Customization

**Change speed** — override the animation-duration directly or use the provided modifiers:

```css
.pulse-fast { animation-duration: 1s; }
.pulse-slow { animation-duration: 3.5s; }
```

**Change scale intensity** — edit the keyframes:

```css
@keyframes pulse-anim {
  50% { transform: scale(1.08); }
}
```

**Change color/opacity feel** — adjust the `opacity` values in the keyframes to make the pulse more or less subtle.

## Browser Compatibility

Tested and working in Chrome, Firefox, Safari, and Edge.

## Accessibility

Animation is automatically disabled for users with `prefers-reduced-motion: reduce` set in their OS/browser settings.