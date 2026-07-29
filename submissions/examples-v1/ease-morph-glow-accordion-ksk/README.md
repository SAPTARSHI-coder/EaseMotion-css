# Morph-Glow Accordion (`ease-morph-glow-accordion-ksk`)

1. What does this do?  
An animated accordion component designed for Creative Portfolios. When a panel expands, the container morphs its shape (adjusting border-radius from `14px` to `22px`) and emits a glowing neon purple halo shadow. Uses modern CSS grid rules to transition height from exactly `0` to auto (`0fr` → `1fr`) in pure CSS.

2. How is it used?  
Define radio inputs named `accordion-group` preceding `.ease-accordion-container`. Use `<label>` targets pointing to the radio IDs as accordion headers:

```html
<div class="ease-accordion-item">
  <label for="acc-1" class="accordion-header">
    <span>Header Title</span>
  </label>
  <div class="accordion-content-wrapper">
    <div class="accordion-content">
      <div class="accordion-content-inner">Content text...</div>
    </div>
  </div>
</div>
```

Customize dimensions and glow intensities using CSS variables:
```css
.ease-accordion-container {
  --ease-accordion-duration: 0.4s;
  --ease-accordion-easing:   cubic-bezier(0.25, 1, 0.5, 1);
  --ease-accordion-accent:   #a855f7;        /* active theme color */
  --ease-accordion-glow:     rgba(168, 85, 247, 0.25);
  --ease-accordion-radius:   14px;
}
```

3. Why is it useful?  
Traditional CSS accordions require fixed height values or jumpy `max-height` values that ruin motion design. This component achieves smooth, variable-height grid morphing with no JavaScript, supporting tab focus accessibility, `prefers-reduced-motion` compliance, and Light/Dark themes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54595.*
