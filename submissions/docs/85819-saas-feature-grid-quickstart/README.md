# SaaS Modern Product Feature Grid Quickstart

Use this guide to add a responsive SaaS feature grid with accessible cards, keyboard-friendly links, and themeable CSS custom properties.

## Markup

```html
<section class="em-feature-grid" aria-labelledby="feature-grid-title">
  <div class="em-feature-grid__header">
    <p class="em-feature-grid__eyebrow">Platform</p>
    <h2 id="feature-grid-title">Everything your product team needs</h2>
    <p>
      Ship dashboards, workflows, and customer-facing surfaces with consistent
      motion.
    </p>
  </div>

  <div class="em-feature-grid__list">
    <a class="em-feature-card" href="#analytics">
      <span class="em-feature-card__icon" aria-hidden="true">01</span>
      <span class="em-feature-card__title">Analytics Console</span>
      <span class="em-feature-card__copy"
        >Monitor product usage, funnel changes, and account health.</span
      >
    </a>

    <a class="em-feature-card" href="#automation">
      <span class="em-feature-card__icon" aria-hidden="true">02</span>
      <span class="em-feature-card__title">Workflow Automation</span>
      <span class="em-feature-card__copy"
        >Coordinate reviews, approvals, and follow-up tasks.</span
      >
    </a>

    <a class="em-feature-card" href="#security">
      <span class="em-feature-card__icon" aria-hidden="true">03</span>
      <span class="em-feature-card__title">Security Controls</span>
      <span class="em-feature-card__copy"
        >Expose audit-ready access policies and activity records.</span
      >
    </a>
  </div>
</section>
```

## CSS Variables

```css
.em-feature-grid {
  --em-feature-bg: #f8fafc;
  --em-feature-card: #ffffff;
  --em-feature-text: #0f172a;
  --em-feature-muted: #64748b;
  --em-feature-accent: #2563eb;
  --em-feature-ring: rgba(37, 99, 235, 0.28);
  --em-feature-radius: 1.25rem;
  --em-feature-shadow: 0 24px 80px rgba(15, 23, 42, 0.12);

  background: var(--em-feature-bg);
  color: var(--em-feature-text);
  padding: clamp(2rem, 5vw, 5rem);
}

.em-feature-grid__list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}

.em-feature-card {
  background: var(--em-feature-card);
  border-radius: var(--em-feature-radius);
  box-shadow: var(--em-feature-shadow);
  color: inherit;
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  text-decoration: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.em-feature-card:hover,
.em-feature-card:focus-visible {
  box-shadow: 0 28px 90px rgba(37, 99, 235, 0.2);
  outline: 3px solid var(--em-feature-ring);
  outline-offset: 4px;
  transform: translateY(-4px);
}
```

## Modifiers

- `.em-feature-grid--compact` reduces section padding for dense dashboards.
- `.em-feature-grid--dark` swaps `--em-feature-bg`, `--em-feature-card`, and `--em-feature-text` for dark surfaces.
- `.em-feature-card--highlight` can set `--em-feature-accent` on a single priority card.

## Accessibility

- Use a real heading with `aria-labelledby` so assistive technology can identify the section.
- Make each card an anchor only when it navigates somewhere; otherwise use a `button` or static `article`.
- Keep `:focus-visible` styles at least as clear as hover styles.
- Do not remove outlines unless a visible replacement is provided.
- Respect reduced motion for entrance effects:

```css
@media (prefers-reduced-motion: reduce) {
  .em-feature-card {
    transition: none;
  }

  .em-feature-card:hover,
  .em-feature-card:focus-visible {
    transform: none;
  }
}
```

## Keyboard Test

1. Press `Tab` until the first feature card receives focus.
2. Confirm the focus ring is visible and not clipped.
3. Press `Enter` on each linked card and verify the destination is expected.
4. Resize below `640px` and verify the grid stacks without horizontal scrolling.
