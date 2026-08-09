# Accessibility Motion Report Generator

Related issue: #51880

## What does this do?

A client-side scanner that audits a sample DOM region for common motion and accessibility problems. It checks for missing or empty `alt` text on images, focusable elements with CSS animation, a basic text contrast heuristic (4.5:1), and whether stylesheets include `prefers-reduced-motion: reduce` coverage when animations are present. Results appear as pass/fail cards and can be downloaded as `.txt` or `.json`.

## How is it used?

Open `demo.html` in a browser.

1. Review the **Sample DOM** panel — it deliberately includes an image without `alt`, an empty `alt`, low-contrast text, and an animated submit button.
2. Click **Run accessibility scan**.
3. Read the pass/fail report with per-check details.
4. Click **Download .txt** or **Download .json** to save the report.

The scanner reads inline `<style>` tags and accessible rules from `style.css`. No server or external libraries are required.

## Why is it useful?

Teams shipping motion-heavy UIs need quick sanity checks before manual audits. This generator demonstrates programmatic heuristics — alt attributes, animated controls, contrast sampling, reduced-motion CSS coverage — in one self-contained page suitable for workshops, CI prototypes, or contributor onboarding around accessible animation.

## Accessibility

- Scanner UI buttons have focus rings; the tool’s own chrome respects `prefers-reduced-motion: reduce`.
- The sample animated button stops pulsing under reduced motion in `style.css`; the intentional bad inline style block is flagged by the reduced-motion check.

## Files

```
submissions/examples/feature-accessibility-motion-report-generator-sum/
├── demo.html
├── style.css
└── README.md
```
