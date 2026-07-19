# ScrollSpy IntersectionObserver Fix

**Fixes:** [#5007](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5007)  
**File affected:** `docs/index.html` (inline `<script>`)

---

## Problem

The scrollspy script in `docs/index.html` uses `threshold: 0.4` in its
`IntersectionObserver`. This means 40% of a section's height must be
simultaneously visible before the sidebar active link updates.

For tall sections like **Utilities** or **Animations**, 40% of the section
height is often larger than the entire viewport — so the threshold is
**never reached** and the active sidebar link never fires.

This is especially bad on:
- Mobile viewports (short screen height)
- Laptop screens with browser devtools open
- Any section taller than ~2× the viewport

---

## Fix

Replace `threshold: 0.4` with `threshold: 0.1` and add a `rootMargin`
that creates a trigger zone near the top of the viewport.

**Before (buggy):**
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.4, // ← breaks for tall sections
  }
);
```

**After (fixed):**
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.1,                   // only 10% needed to trigger
    rootMargin: "-10% 0px -80% 0px"  // fires when section hits top 10% of viewport
  }
);
```

---

## Why this works

| Setting | What it does |
|---|---|
| `threshold: 0.1` | Fires when just 10% of the section is visible — works even for very tall sections |
| `rootMargin: '-10% 0px -80% 0px'` | Shrinks the detection zone to the top portion of the viewport, so the active link updates as soon as the user scrolls into a section |

---

## Demo

Open `demo.html` in a browser. Use the **BEFORE / AFTER** toggle buttons
in the top-right corner and scroll through the tall sections to see the
difference live.

---

## Checklist

- [x] No new dependencies
- [x] No breaking changes — same observer pattern, better config
- [x] Works on all viewport sizes including mobile
- [x] Includes `demo.html`, `style.css`, `README.md`