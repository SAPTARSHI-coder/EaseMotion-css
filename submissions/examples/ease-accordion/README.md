# Ease Accordion

**What does this do?**  
Creates a CSS-only accordion that expands to its natural content height without a `max-height` timing hack.

**How is it used?**  
```html
<input class="accordion-toggle" id="faq-1" type="checkbox" />
<label class="accordion-trigger" for="faq-1">How does it animate?</label>
<div class="accordion-panel">
  <div class="accordion-content">Any unknown-height content can live here.</div>
</div>
```

**Why is it useful?**  
Accordions often use oversized `max-height` values that make timing feel uneven. This submission uses modern `interpolate-size: allow-keywords` for real `height: auto` transitions, then falls back to the grid-row technique in older browsers so the motion remains smooth and dependency-free.

---

Submitted by: @saurabhhhcodes  
Issue: #132  
Status: **Pending review**
