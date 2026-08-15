# CSS Submissions Examples: Medical Layout Parallax Accordion

A lightweight, zero-dependency pure CSS accordion component engineered for medical dashboards, analytical portals, and diagnostic interface decks. Combines CSS checkbox state tracking layers with hardware-accelerated 3D parallax background shifts (`translate3d`) to render fluid layer animations entirely within browser rendering threads without JavaScript footprint.

## Custom Token Property Configuration API

Downstream dashboard systems can customize token values directly within the root scope context:

| CSS Custom Variable Property Name | Default Baseline Target | Component Operational Purpose                               |
| :-------------------------------- | :---------------------- | :---------------------------------------------------------- |
| `--pax-surface`                   | `#0c141d`               | Main backing accordion deck panel background hex fill code. |
| `--pax-accent`                    | `#0ea5e9`               | Clinical sky blue identifier mapping the active state nodes. |
| `--pax-duration`                  | `0.5s`                  | Timing window mapping the panels expansion sequences.       |

---

## Technical Integration Blueprint

```html
<link rel="stylesheet" href="style.css">

<div class="pax-item">
  <input type="checkbox" class="pax-input-trigger" aria-label="Toggle Node" />
  <div class="pax-label-bar">
    <div class="pax-title-node">Data Unit</div>
  </div>
  <div class="pax-content-panel">
    <div class="pax-parallax-bg"></div>
    <p class="pax-text-body">Context metrics values here.</p>
  </div>
</div>
```
---
Made with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**