# Floating Action Button (FAB)

## What does this do?
A circular button fixed to the bottom-right of the viewport — the standard mobile UI pattern for primary actions. Includes a Material-style ripple effect on click (pure CSS, no JS), color variants, sizes, and an extended (labeled) variant.

## How to use it
```html
<!-- Basic FAB — fixed to bottom-right of viewport -->
<button class="ease-fab">
  <span>+</span>
</button>

<!-- Color variants -->
<button class="ease-fab ease-fab--green"><span>✓</span></button>
<button class="ease-fab ease-fab--pink"><span>♥</span></button>
<button class="ease-fab ease-fab--dark"><span>⚙</span></button>

<!-- Sizes -->
<button class="ease-fab ease-fab--sm"><span>+</span></button>
<button class="ease-fab ease-fab--lg"><span>+</span></button>

<!-- Extended FAB with label -->
<button class="ease-fab ease-fab--extended">
  <span class="ease-fab-icon">✦</span>
  <span class="ease-fab-label">Create New</span>
</button>
```

## Ripple effect
Implemented with a pure CSS `::after` pseudo-element that scales from 0 to 12x on `:active`, fading out — no JavaScript required for the core effect. An optional tiny JS snippet (in the demo) allows the ripple to restart on rapid repeated clicks.

## Variants
- `.ease-fab` — base, fixed bottom-right, circular
- `.ease-fab--green/pink/dark` — color variants
- `.ease-fab--sm/lg` — size variants (40px / 72px, default 56px)
- `.ease-fab--extended` — pill-shaped with icon + label
- `--fab-color` / `--fab-size` — full customization via CSS variables

## Why it fits EaseMotion CSS
Mobile UIs commonly use a Floating Action Button fixed to the bottom-right, and EaseMotion has no such component. The ripple interaction is satisfying, animation-first, and composable with existing color/size conventions. `prefers-reduced-motion` removes the ripple animation and hover lift while keeping the button fully functional.
