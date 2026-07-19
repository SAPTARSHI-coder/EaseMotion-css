# Open Source Contribution Card (EaseMotion Brand)

## What does this do?

Generates an EaseMotion-branded share card from repo metadata and exports it as PNG.

## How is it used?

Open `demo.html` in a browser, edit the form (or fetch from GitHub), then click **Export PNG**.

```html
<article class="osc-card-sum">…</article>
```

## Why is it useful?

Gives contributors a project-identity share card with motion and export — not a generic heatmap tool.

## Accessibility

- Form labels and live status region
- Focus-visible styles on actions
- Motion pulse disabled under `prefers-reduced-motion: reduce`

## Files

```
submissions/examples/feature-open-source-contribution-card-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #51884
