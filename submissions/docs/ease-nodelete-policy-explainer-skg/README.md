# ease-nodelete-policy-explainer-skg

> EaseMotion CSS · Docs Track Submission  
> Contributor: karrisanthoshigayatri · Issue #47701

---

## What does this do?

A self-contained, interactive documentation page that teaches first-time
contributors **exactly what makes a Pull Request get auto-closed** — and what
a valid submission looks like. It uses side-by-side fake diff panels, a
policy rules table, track-specific folder structure examples, and a
copy-ready PR checklist.

---

## How is it used?

Open `demo.html` directly in any modern browser — no server or build step
needed:

```
# Windows
start submissions/docs/ease-nodelete-policy-explainer-skg/demo.html

# macOS / Linux
open  submissions/docs/ease-nodelete-policy-explainer-skg/demo.html
```

### Interactive features

| Feature | How to use |
|---|---|
| **Diff Explorer tabs** | Click ❌ Invalid / ✅ Valid tabs to compare diffs side-by-side |
| **Track Cards** | Click Standard / Docs / React / SCSS to expand folder structure |
| **PR Checklist** | Tick boxes to track completion; progress counter updates live |
| **Copy button** | Copies a Markdown checklist to clipboard for pasting into a PR |

---

## Why is it useful?

Many first-time contributors submit invalid PRs by editing core files,
placing folders at the wrong path, or submitting too few files — leading to
auto-closure with no feedback and wasted effort. This guide closes that gap
by showing:

- **Real-looking diff panels** for all three common invalid patterns
  (core edit, wrong path, missing files / thin content)
- **Policy rules table** mapping each rule to its exact threshold and
  consequence
- **Track-specific folder trees** for all four contribution tracks
- **Copy-ready checklist** contributors can paste straight into their PR

It fits EaseMotion's philosophy of teaching by example: every concept is
shown as a concrete, visual diff rather than described in prose.

---

## Sections

| # | Section | Content |
|---|---|---|
| 1 | Why PRs Fail | Four reason cards explaining auto-close triggers |
| 2 | Diff Explorer | Three tabbed diff examples: core edit, wrong path, missing files |
| 3 | Policy Rules | Table of rules with thresholds and consequences; two callout boxes |
| 4 | Track Examples | Click-to-expand cards for all four tracks with folder trees |
| 5 | PR Checklist | 10-item interactive checklist with live progress + clipboard copy |

---

## File structure

```
submissions/docs/ease-nodelete-policy-explainer-skg/
├── demo.html    ← full interactive guide page
├── style.css    ← all layout, diff colors, table, checklist styles
├── script.js    ← tab switching, track cards, checklist, copy logic
└── README.md    ← this file
```

> **Note:** The issue spec asked for `demo.html`, `style.css`, and
> `README.md`. A `script.js` file was added for the interactive features
> described in the issue (diff tabs, copy button, checklist progress). All
> files are within this submission folder only.

---

## Accessibility

- All interactive controls are keyboard-accessible (tabs use `role="tab"`,
  checklist uses native `<input type="checkbox">`)
- `aria-label` and `aria-selected` attributes used on tab buttons
- Toast notification uses `role="status"` and `aria-live="polite"`
- `prefers-reduced-motion: reduce` disables all CSS transitions

---

## Browser compatibility

| Browser | Status |
|---|---|
| Chrome 110+ | ✅ |
| Firefox 110+ | ✅ |
| Safari 16+ | ✅ |
| Edge 110+ | ✅ |

---

## Contribution notes

- No core framework files were modified.
- All files are contained within `submissions/docs/ease-nodelete-policy-explainer-skg/`.
- Maintainer may rename/standardize as needed before integration.
