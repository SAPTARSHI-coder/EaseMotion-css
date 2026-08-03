# NPS / CSAT Feedback Widget with Motion

An interactive **NPS / CSAT feedback widget** with a 0–10 score selector, staggered hover effects, submit success animation, and thank-you state — using EaseMotion CSS animation classes.

> Submission track: `submissions/examples/ease-nps-feedback-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44490

---

## What does this do?

EaseMotion CSS includes animation utilities well suited to interactive UI, but beginners building SaaS feedback flows lack a practical example combining NPS score selection, staggered motion, and post-submit thank-you states. This widget demonstrates the full flow in one self-contained page.

---

## Widget flow

| Step | State | EaseMotion classes |
|------|-------|-------------------|
| 1 | Score selection | `ease-hover-grow`, `ease-fade-in`, `ease-delay-*` |
| 2 | Submit | Button enables after score selected |
| 3 | Success | `ease-zoom-in` checkmark + `ease-fade-in` text |
| 4 | Thank you | `ease-slide-up` + delayed `ease-fade-in` |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Select a score from 0–10 — notice staggered button entrances and hover grow.
3. Optionally add a comment and click **Submit feedback**.
4. Watch the success animation, then the thank-you state.
5. Toggle **NPS labels** vs **CSAT labels** to swap question copy.
6. Copy the HTML snippet for your own SaaS feedback flow.

---

## Features

- 0–10 NPS score selector UI
- Staggered hover animations on score buttons (`ease-hover-grow`, `ease-delay-*`)
- Active/selected score state styling
- Submit success animation (`ease-fade-in`, `ease-zoom-in`)
- Thank-you state with entrance animation after submit
- Optional CSAT-style label variants (“Very dissatisfied” / “Very satisfied”)
- Copy-ready HTML snippet for the feedback widget
- Responsive, accessible demo with keyboard-friendly score selection

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Widget layout + states | `style.css` |
| Selection + submit flow | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive NPS/CSAT widget, variant toggle |
| `style.css` | Widget styling, selected states, motion resets |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-nps-feedback-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
