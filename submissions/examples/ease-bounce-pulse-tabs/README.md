# Bounce-Pulse Tabs for SaaS Showcase Layouts

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![JavaScript](https://img.shields.io/badge/JavaScript-None-orange)

A reusable, lightweight, and accessible CSS-only tabs component featuring smooth bounce animations and pulse feedback for modern SaaS showcase layouts. Built entirely with HTML and CSS—no JavaScript required.

---

## Files

```text
bounce-pulse-tabs/
├── demo.html   Interactive SaaS showcase page
├── style.css   Animations, styling, and responsive behavior
└── README.md   Documentation
```

## Features

- **Pure HTML & CSS** — no build step or framework required
- **Zero JavaScript** — powered by the native radio-input `:checked` technique
- **Responsive layout** — optimized for desktop, tablet, and mobile
- **Keyboard accessible** — native radio-group interaction
- **CSS custom properties** — easily customize colors, spacing, and animation timings
- **Reduced motion support** — respects `prefers-reduced-motion`

## How it Works

Each tab is implemented using a native `<input type="radio">` sharing the same `name`. The radio inputs are visually hidden but remain fully focusable. Their associated `<label>` elements act as the visible tab buttons.

CSS uses the `:checked` state together with the general sibling combinator (`~`) to activate the corresponding label and reveal the matching content panel.

```css
#tab-features:checked ~ .ease-tab-panels #panel-features{
    display:block;
    animation:bounce var(--bounce-duration) ease;
}
```

Because the component relies on native form controls, clicking, tapping, keyboard navigation, and focus management are handled by the browser without JavaScript.

## Usage

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The component consists of:

- a `<fieldset>` containing the radio group
- one hidden radio input for each tab
- matching `<label>` elements
- corresponding `<section>` content panels

To add another tab:

1. Add a new radio input.
2. Add its matching label.
3. Add the corresponding content panel.
4. Duplicate the required state selector in the CSS.

## Accessibility

- Native keyboard navigation using radio-group behavior
- Visible keyboard focus via `:focus-visible`
- Semantic `<fieldset>` and `<legend>` structure
- `<section>` panels labelled using `aria-labelledby`
- Supports `prefers-reduced-motion`

### Why not `role="tablist"`?

The ARIA Tabs pattern requires dynamically updating `aria-selected`, which cannot be done without JavaScript. Since this component is intentionally JavaScript-free, it instead relies on native radio-group semantics that are already correctly exposed to assistive technologies.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bg1` | `#0f172a` | Background gradient start |
| `--bg2` | `#1e293b` | Background gradient end |
| `--primary` | `#7c3aed` | Primary accent color |
| `--secondary` | `#06b6d4` | Secondary accent color |
| `--card` | `rgba(255,255,255,.08)` | Container background |
| `--text` | `#f8fafc` | Primary text |
| `--muted` | `#cbd5e1` | Secondary text |
| `--shadow` | `0 20px 45px rgba(0,0,0,.35)` | Container shadow |
| `--radius` | `22px` | Container radius |
| `--panel-radius` | `20px` | Panel radius |
| `--tab-radius` | `16px` | Tab radius |
| `--transition` | `.35s ease` | Transition timing |
| `--bounce-duration` | `.6s` | Bounce animation duration |
| `--pulse-duration` | `1.8s` | Active tab pulse duration |

## Browser Support

Compatible with all modern versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Verification Checklist

- [ ] Keyboard-only navigation works correctly
- [ ] Responsive on desktop, tablet, and mobile
- [ ] `prefers-reduced-motion` disables animations
- [ ] No console errors
- [ ] Cross-browser testing completed

## Contribution

Created as part of **GirlScript Summer of Code (GSSoC) 2026** for the **EaseMotion CSS** project.

## License

Distributed under the same license as the EaseMotion CSS repository.

## Author

**Mayank Verma**

GitHub: [https://github.com/vermamayank0412-lgtm](https://github.com/vermamayank0412-lgtm)