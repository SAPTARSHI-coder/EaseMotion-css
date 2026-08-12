# Scrollbar Styling Animation

## What does this do?

Demonstrates animated `scrollbar-width` and `scrollbar-color` CSS properties — expanding the scrollbar on hover, cycling thumb/track colors, and pulsing the thumb glow — all using CSS transitions and `@property` registered custom properties.

## How is it used?

```css
/* Hover expand */
.element {
  scrollbar-width: thin;
  scrollbar-color: #6c63ff #1e293b;
  transition: scrollbar-width .3s, scrollbar-color .3s;
}
.element:hover {
  scrollbar-width: auto;
  scrollbar-color: #22c55e #1e293b;
}

/* Animated color via @property */
@property --thumb { syntax: '<color>'; initial-value: #6c63ff; inherits: false; }
.element {
  scrollbar-color: var(--thumb) #1e293b;
  animation: pulse 2s ease-in-out infinite alternate;
}
@keyframes pulse { to { --thumb: #c084fc; } }
```

## Why is it useful?

Custom scrollbar styling is one of the most requested UI features. `scrollbar-width` and `scrollbar-color` are the modern, standards-based way to style scrollbars without vendor prefixes. Animating them creates polished, interactive scrolling experiences — perfect for content-heavy interfaces, chat panels, and code editors — aligning with EaseMotion CSS's animation-first philosophy.
