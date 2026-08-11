# timeline-pal

> Animated scroll-reveal timeline component for the **EaseMotion** CSS project.

A polished, self-contained vertical timeline with alternating left/right cards,
a pulsing center line, and smooth per-item scroll-reveal animations.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full working demo with 7 sample timeline items |
| `style.css` | All component styles, tokens, animations, responsive rules |
| `README.md` | This file |

---

## Usage

### Drop-in (copy/paste)

1. Copy `style.css` into your project.
2. Link it from your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="timeline-pal/style.css" />
   ```
3. Copy the markup structure from `demo.html` — the `.tl-page`, `.tl-track`, and `.tl-item` hierarchy.
4. Paste the `<script>` block at the bottom of `demo.html` into your page.

### Minimal HTML structure

```html
<section class="tl-track">

  <!-- Right-side card -->
  <article class="tl-item tl-item--right" data-reveal="right">
    <div class="tl-item__dot"></div>
    <div class="tl-item__card">
      <p class="tl-item__date">Jan 2024</p>
      <h2 class="tl-item__title">Role or Event Title</h2>
      <p class="tl-item__body">Description text goes here.</p>
      <ul class="tl-item__tags">
        <li class="tl-item__tag">Tag</li>
      </ul>
    </div>
  </article>

  <!-- Left-side card -->
  <article class="tl-item tl-item--left" data-reveal="left">
    <div class="tl-item__dot"></div>
    <div class="tl-item__card">
      ...
    </div>
  </article>

</section>
```

### Milestone items

Add the `is-milestone` class to any `.tl-item` to render it with the green accent:

```html
<article class="tl-item tl-item--left is-milestone" data-reveal="left">
  ...
</article>
```

---

## Animation

- **Mechanism:** `IntersectionObserver` adds `.revealed` when an item enters the viewport.
- **Effect:** Cards slide in from their respective side (left cards from right, right cards from left) while fading up.
- **Stagger:** Each card gets a small `transitionDelay` proportional to its index.
- **Fallback:** Items with no `IntersectionObserver` support are revealed immediately.
- **Reduced motion:** All animations are disabled when the user has `prefers-reduced-motion: reduce` set.

---

## Design tokens (CSS custom properties)

Override any of these on `:root` or a parent element to retheme the component:

```css
:root {
  --bg:           #0D1117;   /* page background */
  --surface:      #161B22;   /* card background */
  --border:       #30363D;   /* card border */
  --text:         #E6EDF3;   /* primary text */
  --text-muted:   #7D8590;   /* secondary text */
  --accent:       #3B82F6;   /* blue accent */
  --accent-alt:   #10B981;   /* green (milestones) */
  --radius:       12px;      /* card corner radius */
  --gap:          2.5rem;    /* space between items */
  --card-max:     420px;     /* max card width on desktop */
}
```

---

## Responsive behaviour

| Viewport | Layout |
|----------|--------|
| `> 640px` | Alternating left/right cards around a center line |
| `≤ 640px` | Single-column, line on the left, all cards right-aligned |

---

## Dependencies

**None.** Pure HTML + CSS + ~25 lines of vanilla JS. No frameworks, no build step.
