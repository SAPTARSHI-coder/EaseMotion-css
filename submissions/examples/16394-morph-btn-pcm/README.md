# Morphing / Shape-Shifting Button

1. What does this do? Creates a button that smoothly transitions between different states and shapes — Play→Loading→Done cycle, circle↔rectangle morph, expand-to-inline-form, and success/error states — using CSS transitions on width, height, border-radius, and background.

2. How is it used? Apply `.morph-btn` to a `<button>` element with `.morph-btn-content`, `.morph-btn-loading`, `.morph-btn-success`, and/or `.morph-btn-error` children; toggle state classes (`.morph-loading`, `.morph-success`, `.morph-error`, `.morph-circle`, `.morph-expanded`) via JavaScript.

```html
<!-- Play → Loading → Done -->
<button class="morph-btn" onclick="cyclePlay(this)">
  <span class="morph-btn-content">
    <span class="morph-icon">▶</span>
    <span>Play</span>
  </span>
  <span class="morph-btn-loading">
    <span class="morph-spinner"></span>
    <span>Processing...</span>
  </span>
  <span class="morph-btn-success">
    <span class="morph-icon">✓</span>
    <span>Done</span>
  </span>
</button>

<!-- Circle ↔ Rectangle -->
<button class="morph-btn" onclick="toggleCircle(this)">
  <span class="morph-btn-content">
    <span class="morph-icon">⊕</span>
    <span>Add Item</span>
  </span>
</button>

<!-- Expand to form -->
<button class="morph-btn" onclick="toggleExpand(this)">
  <span class="morph-btn-content">
    <span class="morph-icon">✉</span>
    <span>Subscribe</span>
  </span>
  <span class="morph-btn-expanded-content">
    <input class="morph-input" placeholder="your@email.com">
    <button class="morph-input-submit">Go</button>
  </span>
</button>
```

3. Why is it useful? Morphing buttons are a staple of modern UIs — they provide clear state feedback (loading, success, error) and save space by expanding inline, all with smooth, hardware-accelerated CSS transitions that fit EaseMotion CSS's philosophy of composable, performant motion utilities.

Fixes #16394
