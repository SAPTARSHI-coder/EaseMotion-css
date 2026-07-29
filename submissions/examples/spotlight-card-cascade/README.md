# Spotlight/Flashlight Card Effect

An interactive card effect where a spotlight glow follows the cursor across the card, creating a dramatic lighting effect that reveals content and adds depth.

## What does this do?

This creates cards with a cursor-following spotlight effect using CSS radial gradients and CSS custom properties (`--mouse-x`, `--mouse-y`) that are updated via JavaScript based on cursor position.

## How is it used?

```html
<div class="spotlight-card">
  <div class="spotlight-card-content">
    <h3 class="spotlight-card-title">Card Title</h3>
    <p class="spotlight-card-description">Card description text</p>
  </div>
</div>

<!-- Color variants -->
<div class="spotlight-card spotlight-cyan">...</div>
<div class="spotlight-card spotlight-green">...</div>
<div class="spotlight-card spotlight-pink">...</div>

<!-- Size variants -->
<div class="spotlight-card spotlight-sm">...</div>
<div class="spotlight-card spotlight-lg">...</div>
```

The JavaScript updates CSS custom properties on mousemove:

```javascript
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
});
```

## Why is it useful?

This demonstrates an advanced CSS technique using custom properties and radial gradients to create interactive, cursor-following effects without complex graphics libraries. Spotlight effects add depth and interactivity to cards, making them feel more dynamic and engaging. They're particularly effective for dark-themed portfolios, gaming websites, and premium product showcases. The CSS-first approach keeps the implementation lightweight while the minimal JavaScript only handles mouse position tracking, showcasing how to create sophisticated UI effects with clean separation of concerns.
