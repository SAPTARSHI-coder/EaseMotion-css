# ease-accordion-gn

1. **What does this do?**
   A pure CSS accordion/collapse component with smooth max-height transitions and a rotating icon, built using the checkbox hack — two variants included: standard accordion and FAQ style.

2. **How is it used?**

```html
<div class="accordion">
  <div class="accordion-item">
    <input type="checkbox" id="acc1" class="accordion-toggle" />
    <label class="accordion-header" for="acc1">
      <span class="accordion-title">Your Question</span>
      <span class="accordion-icon">+</span>
    </label>
    <div class="accordion-body">
      <p>Your answer content here.</p>
    </div>
  </div>
</div>
```

3. **Why is it useful?**
   Accordions are one of the most requested UI patterns for documentation and FAQ pages. This submission implements them with zero JavaScript using the CSS checkbox hack and max-height transitions — consistent with EaseMotion CSS's animation-first, zero-dependency philosophy. Includes prefers-reduced-motion support and works with any framework.
