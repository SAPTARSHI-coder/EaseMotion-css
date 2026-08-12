# Wave Floating Action Button (FAB)

An elegant floating action button featuring a fluid concentric water ripple animation, designed for minimal editorial and blog interfaces.

## 1. What does this do?

The Wave FAB provides a fixed action link (such as scroll to top) that propagates smooth, continuous concentric waves behind the button, intensifying when hovered or focused.

## 2. How is it used?

Place the button structure inside the fixed container:

```html
<div class="wave-fab-container-ag">
  <a href="#top" class="wave-fab-btn-ag" aria-label="Scroll to top">
    <span class="wave-ripple-ring-ag wave-ripple-ring-1-ag"></span>
    <span class="wave-ripple-ring-ag wave-ripple-ring-2-ag"></span>
    <span class="wave-ripple-ring-ag wave-ripple-ring-3-ag"></span>
    <span class="wave-fab-icon-box-ag">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </span>
  </a>
</div>
```

## 3. Why is it useful?

It matches the aesthetic philosophy of modern reading platforms (such as Medium, Ghost, and Dev.to) by keeping the button visually calm while introducing an organic, interactive signal. By utilizing GPU-accelerated CSS properties (`transform` and `opacity`) and staggered animation delays, it achieves fluid 60fps wave motion without any JavaScript overhead. It is fully accessible, supporting keyboard focus, contrast standards, and responsive scaling, alongside a `prefers-reduced-motion` mode that scales down and freezes the active waves immediately.
