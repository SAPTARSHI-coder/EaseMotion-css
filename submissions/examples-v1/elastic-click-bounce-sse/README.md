# Elastic Click Bounce

> Issue: [#20874](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20874)

## 1. What does this do?

A reusable, pure-CSS click animation that gives any interactive element an **elastic bounce effect** — the element briefly compresses, expands slightly past its original size, then smoothly settles back, providing satisfying tactile feedback.

## 2. How is it used?

Add the `elastic-click` class to any interactive element (button, card, icon, nav item, etc.):

```html
<!-- Default elastic bounce -->
<button class="elastic-click">Save Changes</button>

<!-- Subtle variant (gentler bounce) -->
<button class="elastic-click elastic-click--subtle">Subscribe</button>

<!-- Strong variant (more pronounced bounce) -->
<button class="elastic-click elastic-click--strong">Get Started</button>

<!-- Works on cards, icons, nav items, and any clickable element -->
<div class="elastic-click card">...</div>
<span class="elastic-click icon">★</span>
```

### Available Modifiers

| Class                    | Effect                          |
| ------------------------ | ------------------------------- |
| `.elastic-click`         | Default elastic bounce          |
| `.elastic-click--subtle` | A gentler, smaller bounce       |
| `.elastic-click--strong` | A larger, more dramatic bounce  |

### Customizing with CSS Variables

You can override these CSS variables in your own stylesheet to fine-tune the animation:

```css
.elastic-click {
  --elastic-duration: 0.45s;
  --elastic-timing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --elastic-compress: 0.88;
  --elastic-expand: 1.08;
  --elastic-settle: 0.97;
}
```

## 3. Why is it useful?

This feature fits EaseMotion CSS's **animation-first and composable design philosophy** perfectly:

- **Improves perceived responsiveness** — users get instant visual confirmation of their click.
- **Pure CSS, no JavaScript** — lightweight and easy to drop into any project.
- **Reusable across components** — works on buttons, cards, icons, navigation items, and more.
- **Easily customizable** via CSS variables (`--elastic-duration`, `--elastic-compress`, etc.).
- **Accessibility-friendly** — respects the `prefers-reduced-motion` user preference.
- **Modern micro-interaction** — adds a satisfying, tactile feel often seen in polished mobile apps and design systems.

It enhances user feedback without requiring JavaScript, fitting EaseMotion's goal of being a composable, animation-first utility framework.

## Demo

Open `demo.html` directly in any modern browser to see the effect in action on buttons, cards, icons, and nav items.

---

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)