# Expand on Hover Card

**Category:** Component — Interactions  
**Type:** Pure CSS  
**Folder:** `submissions/examples/ease-card-expand-on-hover-ij/`

---

## Overview

The Expand on Hover Card component reveals additional content when the user hovers over a card. The card smoothly scales up while hidden text and lists slide into view using a `max-height` transition, providing a clean progressive disclosure pattern without JavaScript.

---

## Features

- **Pure CSS interaction** — no JavaScript required for hover expansion
- **Scale transform** — card subtly enlarges on hover for tactile feedback
- **Progressive disclosure** — extra content slides in via `max-height` animation
- **Background shift** — card background subtly lightens on hover
- **Customizable tokens** — all visual parameters exposed as CSS custom properties
- **Responsive grid** — three-column layout collapses on mobile
- **Reduced motion support** — respects `prefers-reduced-motion: reduce`

---

## Usage

### HTML Structure

```html
<article class="ex-card">
  <span class="card-icon">☁️</span>
  <h2 class="card-title">Cloud Sync</h2>
  <p class="card-desc">Short description visible at all times.</p>
  <div class="card-extra">
    <p>Additional content revealed on hover.</p>
    <ul>
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
  </div>
</article>
```

Add the `.ex-card` class to the container and place expandable content inside `.card-extra`.

---

## Customization

| CSS Custom Property | Default | Description |
|---|---|---|
| `--card-ex-duration` | `0.35s` | Transition duration for scale and reveal |
| `--card-ex-bg` | `#ffffff` | Default card background |
| `--card-ex-hover-bg` | `#f8f9ff` | Card background on hover |
| `--card-ex-text-color` | `#1a1a2e` | Card text color |
| `--card-ex-scale` | `1.04` | Scale factor applied on hover |
| `--card-ex-shadow` | `0 10px 40px rgba(0,0,0,0.1)` | Card box shadow |

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 49+ | Full support |
| Firefox | 52+ | Full support |
| Safari | 10+ | Full support |
| iOS Safari | 10+ | Full support |

---

## License

Submitted under the same license as the EaseMotion CSS repository.
