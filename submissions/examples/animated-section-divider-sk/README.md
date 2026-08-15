# Animated Section Divider

A collection of CSS-only section divider styles to add visual flair between page sections. Includes gradient, wave, angled, and dotted pattern dividers.

## Divider Styles

- **Gradient Line** — A smooth animated gradient line with a shifting color spectrum
- **Wave** — An organic flowing wave shape created with SVG and CSS
- **Angled Clip-Path** — A sharp diagonal transition using CSS `clip-path`
- **Dotted Pattern** — A decorative dotted border pattern with fade edges

## Features

- Pure CSS — no JavaScript required
- SVG-based wave for crisp rendering at any size
- Animated gradient line with continuous color shift
- Responsive by default
- BEM naming convention
- Dark theme by default

## Usage

```html
<link rel="stylesheet" href="style.css" />

<section class="sd-demo__section sd-demo__section--dark">
  <!-- content -->
  <div class="sd-divider sd-divider--gradient-line"></div>
</section>
```

Apply the divider as a child of the section using `position: absolute` so it sits at the bottom of the section.

## Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--sd-section-dark` | `#0f172a` | Dark section background |
| `--sd-section-medium` | `#1e293b` | Medium section background |
| `--sd-section-light` | `#334155` | Light section background |
| `--sd-gradient-start` | `#3b82f6` | Gradient line start color |
| `--sd-gradient-mid` | `#a855f7` | Gradient line mid color |
| `--sd-gradient-end` | `#ec4899` | Gradient line end color |
| `--sd-dot-color` | `#475569` | Dotted pattern dot color |
| `--sd-divider-height` | `80px` | Height of wave/angled dividers |

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 13.1+
- Edge 79+

---

Created by **@saurabhhhcodes**
