# Elastic Command Palette with Staggered Shortcut Motion

## What does this do?

This submission creates a pure-CSS command palette that expands from a compact launcher with elastic motion and reveals command items through staggered transitions.

## How is it used?

```html
<details class="palette-controller-jp" open>
  <summary class="palette-launcher-jp">
    Open command palette
  </summary>

  <div class="palette-backdrop-jp">
    <section class="command-palette-jp">
      <label class="search-field-jp">
        <span class="sr-only-jp">Search commands</span>
        <input type="search" placeholder="Search commands…" />
      </label>

      <button class="command-item-jp" type="button">
        <span class="command-copy-jp">
          <strong>Open dashboard</strong>
          <small>View your workspace overview</small>
        </span>
        <kbd>D</kbd>
      </button>
    </section>
  </div>
</details>
```

Customize the motion system through CSS variables:

```css
:root {
  --palette-duration-jp: 640ms;
  --palette-easing-jp: cubic-bezier(0.34, 1.56, 0.64, 1);
  --palette-stagger-jp: 65ms;
  --palette-width-jp: 38rem;
  --palette-accent-jp: #8b7cff;
}
```

The open and closed state is handled by native `details` and `summary` elements. Each command receives a staggered animation delay.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Command palettes are common in admin dashboards, developer tools, productivity apps, documentation sites, and SaaS interfaces.

This example fits EaseMotion CSS because it:

- uses elastic motion to explain palette expansion;
- stages commands in a clear visual sequence;
- displays readable command names and shortcut badges;
- uses keyboard-reachable native controls;
- includes visible focus states;
- adapts to mobile layouts;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
