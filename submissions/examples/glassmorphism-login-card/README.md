# Glassmorphism Login Card

A modern, fully responsive login card demonstrating a real-world
authentication UI built with EaseMotion CSS animation patterns —
glassmorphism surface, fade-in entrance, hover effects, and animated
input focus states. Pure CSS, zero JavaScript.

## Features

- ✅ Glassmorphism card: `backdrop-filter` blur, translucent surface,
     soft border, layered shadow
- ✅ Animated gradient background that slowly shifts behind the card
- ✅ Fade-in entrance animation on the card, header, and form (staggered)
- ✅ Hover effects on the submit button and social login buttons
- ✅ Animated floating-label input focus states (no JavaScript required —
     driven by `:focus` and `:not(:placeholder-shown)`)
- ✅ Fully responsive layout
- ✅ Respects `prefers-reduced-motion`
- ✅ No external dependencies

## Files

```
glassmorphism-login-card/
├── demo.html   # Standalone login page demo
├── style.css   # Card, form, and animation styles
└── README.md   # This file
```

## Usage

Include `style.css`, then structure the login form as shown in
`demo.html`. The key building blocks:

```html
<div class="glc-card">
  <div class="glc-card__header">
    <h1 class="glc-card__title">Welcome back</h1>
  </div>

  <form class="glc-form">
    <div class="glc-field">
      <input class="glc-field__input" type="email" id="email" placeholder=" " required />
      <label class="glc-field__label" for="email">Email address</label>
    </div>

    <button class="glc-submit" type="submit">Sign in</button>
  </form>
</div>
```

The floating label pattern requires:
- `placeholder=" "` (a single space, not empty) on the input
- The `<label>` placed immediately after the `<input>` as a sibling
- CSS uses `:focus` and `:not(:placeholder-shown)` on the input to
  reposition the adjacent label

## Customization

All motion and surface values are CSS custom properties, overridable
globally on `:root`:

| Variable            | Default                              | Description                          |
|-----------------------|-----------------------------------------|-------------------------------------------|
| `--glc-duration`     | `700ms`                                | Card entrance animation duration           |
| `--glc-easing`       | `cubic-bezier(0.16, 1, 0.3, 1)`         | Card entrance easing curve                 |
| `--glc-blur`         | `18px`                                 | Backdrop blur radius                       |
| `--glc-radius`       | `20px`                                 | Card corner radius                         |
| `--glc-accent`       | `#7c3aed`                              | Primary accent color                       |
| `--glc-accent-2`     | `#ec4899`                              | Secondary accent color (gradients)         |
| `--glc-surface`      | `rgba(255, 255, 255, 0.14)`             | Card background                            |
| `--glc-border`       | `rgba(255, 255, 255, 0.28)`             | Card and input border color                |
| `--glc-text`         | `#ffffff`                              | Primary text color                         |
| `--glc-text-muted`   | `rgba(255, 255, 255, 0.72)`             | Secondary text color                       |

## Accessibility

- All inputs have associated `<label>` elements linked via `for`/`id`.
- The submit button has a visible `:focus-visible` outline.
- All entrance and background animations collapse to a static, fully
  visible state under `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, `backdrop-filter`, and
`:not(:placeholder-shown)`. `backdrop-filter` requires the `-webkit-`
prefix on Safari, which is included in `style.css`.

## Checklist

- [x] Glassmorphism login card
- [x] Fade-in entrance animation
- [x] Hover effects on buttons
- [x] Animated input focus states
- [x] Fully responsive layout