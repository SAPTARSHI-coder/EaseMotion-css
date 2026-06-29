# Fix: Hardcoded Easing → var(--ease-ease)

1. **What does this do?** Fixes 10 animation classes that used hardcoded `cubic-bezier(0.4, 0, 0.2, 1)` by replacing them with `var(--ease-ease)`, restoring full customizability via CSS design tokens.

2. **How is it used?**
```css
   /* Override easing for ALL animations at once */
   :root {
     --ease-ease: cubic-bezier(0.25, 0, 0.25, 1);
   }
```
```html
   <div class="ease-shake-card-exit">Shake</div>
   <div class="ease-bounce-button-exit">Bounce</div>
   <div class="ease-fade-icon-exit">Fade</div>
   <div class="ease-slide-image-exit">Slide</div>
   <div class="ease-scale-text-exit">Scale</div>
   <div class="ease-rotate-image-exit">Rotate</div>
   <div class="ease-pulse-border-emphasis">Pulse</div>
   <div class="ease-contract-shadow-emphasis">Contract</div>
```

3. **Why is it useful?** Restores EaseMotion CSS's core design token principle — all animation classes should respect user-defined `--ease-ease` overrides for full customizability.