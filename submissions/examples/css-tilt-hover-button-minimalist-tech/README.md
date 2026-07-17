# CSS Submissions Examples: Minimalist Tech Layout Tilt-Hover Button

A zero-dependency pure CSS button component engineered for high-performance minimalist tech portfolios and clean control deck panels. Employs CSS 3D perspective transformations and nested transform-style scaling matrices to mimic mechanical tilt motions smoothly upon user interaction.

## Property Parameter Variables API

Developers can customize global operational properties inside the document root scope:

| CSS Custom Variable Name   | Default Baseline Setting | Purpose                                                      |
| :------------------------- | :----------------------- | :----------------------------------------------------------- |
| `--ease-tilt-bg`           | `#ffffff`                | Core structural background hex fill color.                   |
| `--ease-tilt-text`         | `#000000`                | Monotone high-contrast typography typeface ink.               |
| `--ease-tilt-accent`       | `#6366f1`                | Shadow projection boundary accent color tracking node.       |
| `--ease-tilt-duration`     | `0.3s`                   | Speed matrix timeline duration for transition loops.        |
| `--ease-tilt-deg`          | `6deg`                   | Spatial axis offset rotation depth limits over X and Y logs. |

---

## Technical Integration Blueprint

```html
<link rel="stylesheet" href="style.css">

<div class="ease-tilt-container">
  <button class="ease-tilt-btn">Access Deck</button>
</div>
```
---
Made with 💜 by [pari-dubey1](https://github.com/pari-dubey1)