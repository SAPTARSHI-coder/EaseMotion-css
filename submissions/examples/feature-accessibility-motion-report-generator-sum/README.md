# Accessibility Motion Report Generator

## What does this do?

A demo scanner that inspects a sample DOM for common accessibility and motion issues: missing or empty `alt` text, low-contrast text (basic relative luminance), animated focusable elements, and `prefers-reduced-motion` CSS coverage. It outputs a pass/fail/warn report with downloadable TXT and JSON exports.

## How is it used?

Open `demo.html`, review the mixed-quality sample DOM, and click **Run Scan**:

```html
<link rel="stylesheet" href="style.css" />
<main class="a11y-report-sum">…</main>
```

Use **Download TXT** or **Download JSON** to save the generated report.

## Why is it useful?

Teams need a lightweight way to sanity-check motion-heavy UI for accessibility regressions before shipping. This demo illustrates automated checks you can extend into CI or design QA workflows.

## Accessibility

- Scan results use `aria-live="polite"`
- Buttons have visible focus styles
- Sample includes both failing and passing elements for comparison
- Stylesheet includes `prefers-reduced-motion: reduce` to disable demo pulse animation

## Files

```
submissions/examples/feature-accessibility-motion-report-generator-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #51880
