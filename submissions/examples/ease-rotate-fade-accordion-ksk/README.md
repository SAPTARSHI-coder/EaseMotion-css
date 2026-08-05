# Rotate-Fade Accordion (`ease-rotate-fade-accordion-ksk`)

1. What does this do?  
An animated accordion component designed for Gaming Hub layouts. Active panels morph in height using standard CSS grid rows (`0fr` → `1fr`) while the child block enters from a 3D tilted, scaled state (`rotateX(-12deg) scale(0.97)`) to flat alignment using a spring transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Define radio inputs named `acc-group` preceding the `.ease-accordion` block. Use `<label>` targets pointing to the radio IDs to toggle active panels:

```html
<input type="radio" name="acc-group" id="acc-1" class="accordion-radio">
<div class="ease-accordion">
  <div class="accordion-item">
    <label for="acc-1" class="accordion-header">Header</label>
    <div class="accordion-content-wrapper">
      <div class="accordion-content">
        <div class="accordion-content-inner">Text content...</div>
      </div>
    </div>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.ease-accordion {
  --ease-accordion-duration: 0.45s;
  --ease-accordion-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-accordion-rotate:   -12deg;        /* initial tilt rotation */
  --ease-accordion-accent:   #06b6d4;       /* active theme color */
}
```

3. Why is it useful?  
Standard accordions expand flatly. This component uses CSS grid height morphing combined with 3D rotate-fade entry transitions for a premium spatial interactive feel. Operates without JS, fully keyboard focusable, prefers-reduced-motion compatible, and supports both Light and Dark modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #56522 / #56590.*
