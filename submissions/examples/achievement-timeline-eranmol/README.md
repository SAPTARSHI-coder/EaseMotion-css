# Achievement Timeline — Issue #48620

## What does it do?

A responsive vertical timeline component that showcases milestones, achievements, internships, certifications, hackathons, and open-source contributions with scroll-triggered fade-in animations and color-coded category tags.

## How is it used?

```html
<div class="timeline">
  <div class="timeline-item" data-type="milestone">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <span class="tag">Milestone</span>
      <h3>Title</h3>
      <p class="date">Month Year</p>
      <p>Description of the achievement.</p>
    </div>
  </div>
</div>
```

### Data types (for color coding)

| `data-type` | Color | Use case |
|---|---|---|
| `milestone` | Blue | Project milestones |
| `certification` | Purple | Certifications earned |
| `internship` | Green | Work experience |
| `hackathon` | Orange | Hackathon participation |
| `opensource` | Cyan | Open-source contributions |
| `achievement` | Yellow | Academic/general achievements |

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tl-duration` | `500ms` | Animation duration |
| `--tl-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Timing function |
| `--tl-bg` | `#1e293b` | Card background |
| `--tl-marker` | `#3b82f6` | Timeline dot color |

## Why is it useful?

Portfolios and personal sites need an attractive way to display career milestones. This component provides a dark-themed, animated timeline that's responsive, accessible (respects `prefers-reduced-motion`), and easy to customize via CSS custom properties — no JavaScript required for styling.
