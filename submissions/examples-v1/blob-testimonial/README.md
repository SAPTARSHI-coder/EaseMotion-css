# ease-blob-testimonial — SVG Liquid Morphing Testimonial Card

**Implements:** Issue #6989  
**Type:** Feature — new component  
**Label:** `animation` `type:feature`

---

## What this adds

A testimonial card component with an organic, fluid blob shape morphing
continuously in the background using pure CSS `border-radius` keyframes.
No JavaScript. No SVG filters. No external dependencies.

---

## How it works

### 1. Fluid Morphing Loop

An `@keyframes ease-kf-blob-morph` animation cycles through four
asymmetrical `border-radius` states (e.g. `60% 40% 30% 70% / 60% 30% 70% 40%`)
every 8 seconds on an `ease-in-out infinite` loop, producing a smooth
liquid bubble effect.

### 2. Interactive Hover Shift

On hover, `.ease-blob-bg` translates toward the avatar and scales up via
`transform: translate(-30%, 30%) scale(1.35)` with a
`cubic-bezier(0.16, 1, 0.3, 1)` easing — a spring-like settle that
draws the reader's eye toward the author.

### 3. Graceful Fallback

An `@supports not (border-radius: 60% 40% …)` block freezes the blob
as a static circle on older browsers — clean, no broken layout.

### 4. Accessibility

`@media (prefers-reduced-motion: reduce)` freezes all animation and
transitions instantly — zero motion for users who need it.

---

## Usage

```html
<div class="ease-blob-testimonial">
  <div class="ease-blob-bg"></div>
  <div class="ease-testimonial-content">
    <p class="ease-testimonial-quote">Your quote text here.</p>
    <div class="ease-testimonial-author">
      <div class="ease-author-avatar">AB</div>
      <div class="ease-author-details">
        <h4>Author Name</h4>
        <span>Role, Company</span>
      </div>
    </div>
  </div>
</div>
```

---

## Classes

| Class                       | Purpose                                         |
| --------------------------- | ----------------------------------------------- |
| `.ease-blob-testimonial`    | Card wrapper — positions blob, clips overflow   |
| `.ease-blob-bg`             | The morphing blob element — animated background |
| `.ease-testimonial-content` | Content layer above blob (`z-index: 1`)         |
| `.ease-testimonial-quote`   | Styled italic quote with smart quotes           |
| `.ease-testimonial-author`  | Flex row for avatar + name/role                 |
| `.ease-author-avatar`       | Gradient initials circle                        |
| `.ease-author-details`      | Name and role text stack                        |

---

## Acceptance Criteria

- [x] Fluid morphing loop via `border-radius` keyframes
- [x] Hover shift — blob scales and translates behind avatar
- [x] Graceful fallback for browsers without multi-value border-radius
- [x] `prefers-reduced-motion` freezes all animation
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
