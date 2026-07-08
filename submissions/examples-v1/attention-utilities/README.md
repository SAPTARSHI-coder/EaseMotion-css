# Attention Utilities

Provides four reusable motion utilities for highlighting buttons, badges, alerts, and form controls with accessible attention-seeking animation.

## What does this do?

This feature adds lightweight animations for important UI elements:

- `ease-attention` — a brief scale-and-bounce effect for primary actions.
- `ease-attention-soft` — a gentle looping highlight for subtle emphasis.
- `ease-attention-pulse` — a continuous pulse for badges, labels, and notifications.
- `ease-attention-ring` — an expanding ring effect around form controls or alert surfaces.

## Usage

```html
<button class="ease-btn ease-btn-primary ease-attention">Get Started</button>

<span class="ease-attention-pulse">New</span>

<input class="ease-attention-ring" />

<div class="ease-attention-soft">Action Required</div>
```

## Recommended patterns

### Notification badges
Use `<span class="ease-attention-pulse">New</span>` for status indicators and badge values. The pulse draws attention without overwhelming the surrounding UI.

### Call-to-action buttons
Add `ease-attention` to a primary button to make a single interaction stand out. Avoid applying it to multiple CTAs at once.

### Form validation indicators
Apply `ease-attention-ring` to inputs or form group wrappers when a field requires focus or corrective action. The ring effect is subtle and non-intrusive.

### Alert banners
Use `ease-attention-soft` on alerts, banners, and cards when you want a low-key highlight that remains easy on the eyes.

## Accessibility

- Uses `prefers-reduced-motion: reduce` to disable motion for users who request reduced motion.
- Animations rely on transform and opacity for smooth browser performance.
- Designed to layer on top of existing EaseMotion CSS components without additional markup.
