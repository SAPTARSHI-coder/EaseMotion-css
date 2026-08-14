# CSS-Only Accessible Skip Link

A skip-to-content link that appears on keyboard focus, essential for WCAG 2.1 AA compliance. Pure CSS, no JavaScript.

## What does this do?

Provides a hidden navigation link that becomes visible when focused via keyboard (Tab key), allowing users to bypass repetitive navigation and jump directly to the main content area.

## How is it used?

Add a skip link as the first element in your `<body>`, pointing to your main content area:

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <nav><!-- navigation --></nav>
  
  <main id="main-content">
    <!-- main content -->
  </main>
</body>
```

### Variants

```html
<!-- Success color -->
<a href="#main" class="skip-link skip-link--success">Skip to content</a>

<!-- Danger color -->
<a href="#main" class="skip-link skip-link--danger">Skip to content</a>

<!-- Dark theme -->
<a href="#main" class="skip-link skip-link--dark">Skip to content</a>

<!-- Pill shape -->
<a href="#main" class="skip-link skip-link--pill">Skip to content</a>
```

## Why is it useful?

- **WCAG 2.1 compliant** — satisfies Success Criterion 2.4.1 (Bypass Blocks), Level A
- **Keyboard accessible** — appears only on Tab focus, invisible to mouse users
- **Screen reader friendly** — provides a clear bypass mechanism for assistive technology
- **Reduced motion support** — disables transition animation when `prefers-reduced-motion: reduce` is active
- **Zero JavaScript** — pure CSS show/hide via `:focus` pseudo-class
- **Essential accessibility** — one of the most fundamental accessibility requirements for any website
