# Animation Combination Guide

## 📚 Overview

Chaining animations in sequence creates professional, coordinated UI interactions. This guide explains the mechanics of `animation-delay` and `animation-fill-mode`, shows practical patterns you can use immediately, and identifies common pitfalls.

---

## 🔍 Animation Mechanics Explained

### animation-delay
Delays when an animation starts (after page load or trigger):

```css
.ease-delay-100 { animation-delay: 100ms; }  /* Start 100ms later */
.ease-delay-200 { animation-delay: 200ms; }  /* Start 200ms later */
.ease-delay-300 { animation-delay: 300ms; }  /* Start 300ms later */
```

**Key insight:** Each element starts its animation at different times → creates a staggered cascade effect.

### animation-fill-mode
Controls what the element looks like *before* the animation starts and *after* it ends.

Available options in CSS:
- `none` – Element returns to normal state after animation (default)
- `forwards` – Stays at final animation state (common for entrances)
- `backwards` – Starts at initial animation state before delay (less common)
- `both` – Applies both forwards and backwards behavior

EaseMotion uses `animation-fill-mode: both` by default on entrance animations, so elements instantly jump to the starting state and stay at the ending state.

---

## 📋 Pattern 1: Three Elements Entering with Staggered Delays

The most requested pattern: elements cascade into view one after another.

### Basic Example
```html
<ul class="card-list">
  <li class="ease-fade-in ease-slide-up ease-delay-100">Card 1</li>
  <li class="ease-fade-in ease-slide-up ease-delay-200">Card 2</li>
  <li class="ease-fade-in ease-slide-up ease-delay-300">Card 3</li>
</ul>
```

**What happens:**
- All 3 items start invisible (opacity: 0, translateY: 24px)
- Item 1: animates after 100ms
- Item 2: animates after 200ms (100ms after Item 1)
- Item 3: animates after 300ms (100ms after Item 2)
- Result: smooth cascade effect ✨

### CSS (if you want custom timing)
```css
.card-list li:nth-child(1) { animation-delay: 100ms; }
.card-list li:nth-child(2) { animation-delay: 200ms; }
.card-list li:nth-child(3) { animation-delay: 300ms; }
```

### Dynamic Stagger with JavaScript
For lists with unknown length:
```javascript
document.querySelectorAll('.card').forEach((card, index) => {
  card.style.animationDelay = `${(index + 1) * 100}ms`;
  card.classList.add('ease-fade-in', 'ease-slide-up');
});
```

---

## ⌨️ Pattern 2: Hover + Focus Combined

Interactive states that respond to both mouse and keyboard users.

### Entrance then Hover Animation
```html
<button class="ease-btn ease-fade-in ease-slide-up ease-delay-200 hover-bounce">
  Click Me
</button>

<style>
  .hover-bounce {
    animation: ease-kf-fade-in 0.3s ease both;
  }

  .hover-bounce:hover {
    /* Bounce on hover (one-time) */
    animation: ease-kf-bounce-text 0.5s ease 0.15s forwards;
  }

  .hover-bounce:focus-visible {
    /* Same bounce on keyboard focus */
    animation: ease-kf-bounce-text 0.5s ease 0.15s forwards;
    outline: 2px solid var(--ease-color-primary);
    outline-offset: 3px;
  }
</style>
```

### Unified Hover/Focus with Transitions
For smoother continuous feedback:
```html
<div class="interactive-card ease-fade-in ease-delay-100">
  <h3>Card Title</h3>
  <p>Content here</p>
</div>

<style>
  .interactive-card {
    transition: 
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .interactive-card:hover,
  .interactive-card:focus-within {
    transform: translateY(-4px);
    box-shadow: var(--ease-shadow-lg);
  }
</style>
```

### Complete Example: Button with State Animations
```html
<button class="state-button">
  <span class="button-text">Subscribe</span>
  <span class="button-icon">→</span>
</button>

<style>
  /* Initial entrance */
  .state-button {
    animation: ease-kf-fade-in 0.3s ease both;
    position: relative;
  }

  /* On hover: icon slides in */
  .state-button:hover .button-icon {
    animation: ease-kf-slide-in-right 0.3s ease both;
  }

  /* On focus: outline + subtle pulse */
  .state-button:focus-visible {
    outline: 2px solid var(--ease-color-primary);
    animation: ease-kf-pulse 2s ease infinite;
  }

  .state-button:active {
    animation: none;
    transform: scale(0.97);
  }
</style>
```

---

## 🔄 Pattern 3: Entrance Then Continuous (ease-fade-in + ease-pulse)

**The requested pattern:** Element fades in once, then continuously pulses.

### Two-Stage Animation with CSS
```html
<div class="notification ease-notification">
  🔔 New message!
</div>

<style>
  .ease-notification {
    /* Stage 1: Entrance (runs once) */
    animation: 
      ease-kf-fade-in 0.4s ease forwards,
      ease-kf-pulse 2s ease 0.4s infinite;
    /* 
      Timeline:
      - 0-400ms: Fade in
      - 400ms-onwards: Pulse continuously
    */
  }
</style>
```

### With animation-delay for Stagger
```html
<div class="notification-group">
  <div class="notification ease-notification" style="animation-delay: 0.1s;">Alert 1</div>
  <div class="notification ease-notification" style="animation-delay: 0.2s;">Alert 2</div>
  <div class="notification ease-notification" style="animation-delay: 0.3s;">Alert 3</div>
</div>

<style>
  .ease-notification {
    animation: 
      ease-kf-fade-in 0.4s ease forwards,
      ease-kf-pulse 2s ease 0.4s infinite;
  }
</style>
```

### Entrance + Bounce (Alternative)
```html
<div class="badge ease-entrance-then-bounce">
  3
</div>

<style>
  .ease-entrance-then-bounce {
    animation:
      ease-kf-slide-in-right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
      ease-kf-bounce 1s ease-in-out 0.4s infinite;
  }
</style>
```

### Real-World: Toast Notification
```html
<div class="toast ease-toast-notification">
  ✓ Changes saved successfully
</div>

<style>
  .ease-toast-notification {
    animation:
      /* Slide up entrance */
      ease-kf-slide-up 0.3s ease forwards,
      /* Then subtle pulse for emphasis */
      ease-kf-pulse 1.5s ease 0.3s,
      /* Then fade out (auto-dismiss after 4s) */
      ease-kf-fade-out 0.3s ease 4s forwards;
  }
</style>
```

---

## 🎯 Available Delay Classes

Use these with any animation:

| Class | Delay |
|-------|-------|
| `ease-delay-75` | 75ms |
| `ease-delay-100` | 100ms |
| `ease-delay-150` | 150ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-500` | 500ms |
| `ease-delay-700` | 700ms |

**Pro tip:** For lists, use 100ms increments. Feels natural. Anything faster feels frantic; anything slower feels dead.

---

## ⚠️ Common Pitfalls & How to Avoid Them

### ❌ Pitfall 1: Conflicting Directional Animations
```html
<!-- DON'T: These cancel each other out -->
<div class="ease-slide-up ease-slide-down">Broken!</div>

<!-- WHY: Both animations run simultaneously, causing jitter -->
```

**Fix:**
```html
<!-- DO: Pick ONE direction -->
<div class="ease-fade-in ease-slide-up">Correct!</div>
```

### ❌ Pitfall 2: Multiple Looping Animations
```html
<!-- DON'T: Too much motion = distraction/seizure risk -->
<div class="ease-bounce ease-pulse ease-rotate">Overwhelming!</div>

<!-- WHY: Too many infinite animations = chaos + accessibility issues -->
```

**Fix:**
```html
<!-- DO: Use ONE looping animation -->
<div class="ease-pulse">Clean!</div>

<!-- If you need multiple effects, stagger them: -->
<div class="ease-pulse" style="animation: 
  ease-kf-pulse 2s ease infinite,
  ease-kf-zoom-in 0.4s ease forwards;">
</div>
```

### ❌ Pitfall 3: Long animation-delay with No Content Visible
```html
<!-- DON'T: User sees blank space for 1 second -->
<div class="ease-fade-in" style="animation-delay: 1s;">
  Content
</div>

<!-- WHY: animation-fill-mode: both makes the element invisible until animation starts -->
```

**Fix:**
```html
<!-- DO: Use animation-fill-mode or start content visible -->
<div class="ease-fade-in ease-delay-300">
  <!-- Visible immediately, animates after 300ms -->
</div>

<!-- OR: For content that should be hidden initially -->
<div style="animation: ease-kf-fade-in 0.3s ease 1s forwards;">
  <!-- Hidden for 1s, then fades in -->
</div>
```

### ❌ Pitfall 4: Forgetting animation-fill-mode: both
```css
/* DON'T: Without 'both', element pops back to normal after animation */
.card {
  animation: ease-kf-fade-in 0.3s ease;
}
```

**Fix:**
```css
/* DO: Use 'both' (or 'forwards') to stay at final state */
.card {
  animation: ease-kf-fade-in 0.3s ease both;
}

/* OR use EaseMotion classes which include this */
<div class="ease-fade-in">...</div>
```

### ❌ Pitfall 5: Chaining Animations Without Proper Timing
```html
<!-- DON'T: Both animations run at the same time -->
<div class="ease-fade-in ease-slide-up">
  <!-- They compete for the same properties -->
</div>
```

**When to worry:** If animations modify the same CSS properties (like `opacity`), they may conflict. However, EaseMotion's entrance animations are designed to be composable:
- `ease-fade-in` controls `opacity`
- `ease-slide-up` controls `transform`
- They work great together!

### ❌ Pitfall 6: animation-delay Doesn't Work on :hover
```html
<!-- DON'T: This doesn't delay the hover animation -->
<button class="ease-delay-200">
  Button
</button>

<style>
  button:hover {
    animation: ease-kf-bounce-text 0.3s ease;
    /* animation-delay on :hover triggers DURING the hover, not when entering */
  }
</style>
```

**Fix:**
```html
<!-- DO: Use animation-delay in the hover animation itself -->
<button>Button</button>

<style>
  button:hover {
    animation: ease-kf-bounce-text 0.3s ease 0.1s forwards;
    /* The 0.1s is baked into the animation syntax */
  }
</style>
```

### ❌ Pitfall 7: Testing in Slow Networks / Reduced Motion
```html
<!-- DON'T: Forget to test with prefers-reduced-motion -->
<div class="ease-fade-in ease-slide-up">...</div>
```

**Fix:** See [Accessibility & Reduced Motion](./accessibility-reduced-motion.md) for full guidance.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-fade-in,
  .ease-slide-up,
  .ease-pulse {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## ✅ Best Practices

1. **Use 100ms stagger increments** for list items (feels natural)
2. **Keep entrance animations under 500ms** (feels snappy, not slow)
3. **Max 1-2 looping animations per page** (respects motion preferences)
4. **Always test with `prefers-reduced-motion`** (accessibility)
5. **Combine entrance + continuous** using multiple animations (separate with commas)
6. **Use animation-fill-mode: both** for entrances so elements start hidden
7. **Avoid animating expensive properties** like `width`/`height` (use `transform` instead)

---

## 📖 See Also

- [Class Naming Conventions](./class-naming-conventions.md)
- [Accessibility & Reduced Motion](./accessibility-reduced-motion.md)
- [EaseMotion CSS Main Docs](./index.html)