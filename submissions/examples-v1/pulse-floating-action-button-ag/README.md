# Pulse Floating Action Button (Neon)

A premium, accessible, and high-performance Floating Action Button component featuring a subtle neon glow pulse.

## Core Questions

### 1. What does this do?

It creates a Floating Action Button (FAB) with concentric, loop-optimized neon pulse rings and rich interactive states that scale, fill, and pulse.

### 2. How is it used?

Integrate the button by placing a wrapper with a native `<button>` and the pulse rings:

```html
<div class="ease-pulse-fab-wrapper-ag">
  <button class="ease-pulse-fab-ag" aria-label="Contact Support">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      ></path>
    </svg>
    <span class="ease-sr-only">Contact Support</span>
  </button>
  <div class="ease-pulse-ring-ag ease-pulse-ring-1-ag"></div>
  <div class="ease-pulse-ring-ag ease-pulse-ring-2-ag"></div>
</div>
```

### 3. Why is it useful?

It provides a zero-JavaScript neon button design that leverages the EaseMotion design system. It is fully accessible (keyboard outline, screen-reader text support) and includes standard overrides for user-agent settings (`prefers-reduced-motion`).

---

## File Structure

- `demo.html` - Minimal interactive showcase displaying the centered live FAB.
- `style.css` - Component-scoped tokens, animations, hover, active, focus, and reduced-motion controls.
- `README.md` - Usage guidelines.
