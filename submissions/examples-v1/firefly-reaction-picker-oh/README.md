# Component: Firefly Reaction Picker

This submission implements the Firefly Reaction Picker for GSSoC issue **#41988**.

## Description

Animated reaction buttons with firefly particle burst effects for education platforms.

## Features

- **5 Reaction Types**: Like, Love, Celebrate, Insightful, Curious
- **Firefly Particles**: Burst animation on selection
- **Hover Effects**: Bounce and glow effects
- **Selected State**: Persistent glow and pulse
- **Large Variant**: Expanded view with labels
- **Pure CSS + JS**: Combined for optimal animation

## Usage

```html
<div class="reaction-picker firefly-picker">
  <button class="reaction-btn firefly-btn" onclick="selectReaction(this)">
    <span class="reaction-icon">👍</span>
    <span class="reaction-count">24</span>
    <div class="firefly-particles">
      <span class="particle"></span>
      <span class="particle"></span>
      <span class="particle"></span>
      <span class="particle"></span>
      <span class="particle"></span>
    </div>
  </button>
</div>
```

## Reactions

| Icon | Label | Default Count |
|------|-------|---------------|
| 👍 | Like | 24 |
| ❤️ | Love | 18 |
| 🎉 | Celebrate | 12 |
| 💡 | Insightful | 8 |
| 🤔 | Curious | 5 |

## Animations

| Animation | Element | Effect |
|-----------|---------|--------|
| `iconBounce` | Icon on hover | Scale up/down |
| `iconPulse` | Icon when selected | Continuous pulse |
| `fireflyBurst` | Particles on click | Radial burst outward |
| `glowPulse` | Background glow | Fade in/out |

## JavaScript

```javascript
function selectReaction(btn) {
  // Remove selected from all buttons
  allBtns.forEach(b => b.classList.remove('selected'));
  
  // Add selected to clicked button
  btn.classList.add('selected');
  
  // Trigger particle animation
  particles.forEach(p => {
    p.style.animation = 'none';
    p.offsetHeight; // Trigger reflow
    p.style.animation = 'fireflyBurst 0.6s ease-out forwards';
  });
}
```

## Large Variant

```html
<button class="reaction-btn firefly-btn large">
  <span class="reaction-icon">👍</span>
  <span class="reaction-label">Like</span>
  <span class="reaction-count">24</span>
</button>
```

## Acceptance Criteria

- ✅ Multiple reaction types
- ✅ Firefly particle burst animation
- ✅ Hover and selected states
- ✅ Large expanded variant
- ✅ Glow effects
- ✅ README.md included
