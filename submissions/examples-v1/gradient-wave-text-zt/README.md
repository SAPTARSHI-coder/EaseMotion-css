# Gradient Text Styles

**What does this do?**
Provides reusable gradient text styles for hero headings, banners, landing pages, and marketing content. These styles use only HTML and CSS and are designed to be self-contained and responsive.

**How is it used?**
Wrap your headline or text in one of the three provided classes:

```html
<!-- Default gradient -->
<div class="gradient-wave-default">Default Gradient</div>

<!-- Vibrant gradient -->
<div class="gradient-wave-fast">Vibrant Gradient</div>

<!-- Neon gradient (with glow) -->
<div class="gradient-wave-neon">Neon Gradient</div>
```

Multi-line headings are supported; use standard line breaks or block markup:

```html
<div class="gradient-wave-default">
  Build Something<br>
  Amazing Today
</div>
```

Notes:
- The classes are pure CSS and self-contained inside this submission directory.

**Why is it useful?**
These gradient text styles make it easy to create visually engaging typography without JavaScript. They are ideal for:

- Hero sections and landing page headlines
- Promotional banners and feature callouts
- Marketing and product pages where visual flair is desired

Technical details:
- Implementation: Pure HTML + CSS
- Responsive: Uses `clamp()` and fluid sizing for different viewports
- External deps: None — no Google Fonts or external assets are required

---

Date: 2026-06-13  
Status: Ready for review
