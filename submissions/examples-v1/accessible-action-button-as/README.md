# Accessible Action Button (-as)

## What does this do?

An animated button whose hover animation (lift + color change) is mirrored on keyboard focus, with a visible high-contrast focus ring, active and disabled states, and a `prefers-reduced-motion` fallback.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<button type="button" class="aab-button">Primary action</button>
<button type="button" class="aab-button aab-button--subtle">
  Secondary action
</button>
<button type="button" class="aab-button" disabled>Disabled</button>
```

The key detail is that `:hover` and `:focus-visible` share the same rule, so a keyboard user gets the same affordance as a mouse user:

```css
.aab-button:hover,
.aab-button:focus-visible {
  transform: translateY(-2px);
  background-color: var(--aab-bg-hover);
}
```

## Why is it useful?

EaseMotion is animation-first, and the most common interactive control is a button. Many animated buttons style only `:hover`, which leaves keyboard and screen-reader users with no visible feedback (WCAG 2.1 SC 2.4.7, Focus Visible). This submission is an accessible-by-default reference: hover and focus parity, a clear focus ring, and motion that respects `prefers-reduced-motion`. The animations use only `transform`/`opacity`, so they remain GPU-friendly. It fits the framework's stated goals of being beginner-friendly and accessible without adding any dependencies.
