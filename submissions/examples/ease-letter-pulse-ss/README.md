# Letter Pulse Animation (`ease-letter-pulse-ss`)

## Abstract

The **Letter Pulse Animation** is a pure CSS text animation designed to create a continuous, rhythmic wave across individual characters in a word or headline. By leveraging hardware-accelerated CSS `transform` and `text-shadow` properties, it produces a dynamic visual effect without introducing JavaScript dependencies or impacting rendering performance.

---

## Usage & Class Mapping

### Structure & HTML Markup

To apply the sequential letter pulse effect, wrap the parent header element with `.ease-pulse-text` and assign `.ease-letter` to each individual character `<span>`:

```html
<h1 class="ease-pulse-text" aria-label="EASEMOTION">
  <span class="ease-letter" aria-hidden="true">E</span>
  <span class="ease-letter" aria-hidden="true">A</span>
  <span class="ease-letter" aria-hidden="true">S</span>
  <span class="ease-letter" aria-hidden="true">E</span>
  <span class="ease-letter" aria-hidden="true">M</span>
  <span class="ease-letter" aria-hidden="true">O</span>
  <span class="ease-letter" aria-hidden="true">T</span>
  <span class="ease-letter" aria-hidden="true">I</span>
  <span class="ease-letter" aria-hidden="true">O</span>
  <span class="ease-letter" aria-hidden="true">N</span>
</h1>
```

### CSS Class Definitions

* `.ease-pulse-text`: Flexbox container configured with `display: inline-flex` and tight character spacing.
* `.ease-letter`: Individual letter unit configured with `display: inline-block`, `transform-origin: center bottom`, and `will-change: transform, color, text-shadow`.
* `.ease-letter:nth-child(n)`: Staggered `animation-delay` increments (0.08s per character) producing the fluid sequential wave action.

---

## Why Letter Pulse Fits EaseMotion

1. **Pure CSS Execution**: Eliminates the requirement for heavy JS string-splitting algorithms or external runtime libraries.
2. **High Performance**: Animates GPU-friendly properties (`transform: scale() translateY()`) ensuring smooth 60fps frame rates.
3. **Versatile UI Application**: Ideal for landing page hero headings, splash screens, brand typography showcases, and interactive hover states.

---

## Technical Considerations & Accessibility

### Display Inline-Block Requirement
Standard inline elements (`display: inline`) do not respect CSS `transform` matrix calculations. Applying `display: inline-block` to `.ease-letter` ensures full support for vertical scaling (`scale(1.22)`) and upward translation (`translateY(-6px)`).

### Screen Reader Accessibility Pattern
Splitting words into separate `<span>` elements can cause screen readers to announce characters individually instead of reading the complete word. To prevent accessibility degradation:
* The parent container utilizes `aria-label="EASEMOTION"` to provide the complete readable word.
* Each character `<span>` is hidden from screen readers using `aria-hidden="true"`.

### Reduced Motion Support
Respects user preferences by enforcing `@media (prefers-reduced-motion: reduce)`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-letter {
    animation: none !important;
    transform: none !important;
    color: #38bdf8 !important;
    text-shadow: none !important;
  }
}
```

---

## Required Submission Answers (CONTRIBUTING.md)

1. **What does this do?**
   Creates a sequential pulse wave across individual characters of a word using CSS transform scaling, translation, and glow effects.

2. **How is it used?**
   Wrap letter spans in a container with `.ease-pulse-text` and apply `.ease-letter` to each character with sequential `nth-child` animation delays.

3. **Why is it useful?**
   Provides an attention-grabbing hero headline animation without requiring heavy text-splitting JavaScript libraries or external runtime overhead.
