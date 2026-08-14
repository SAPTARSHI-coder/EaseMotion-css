# Contributor Suffix & Folder Name Generator

An interactive documentation tool that helps GSSoC contributors **generate valid suffixes and folder names** from their name or initials, then outputs the correct submission path and checklist for their chosen track.

> Submission track: `submissions/docs/ease-suffix-generator-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43640

---

## What does this do?

EaseMotion CSS requires every contributor to append a **unique suffix** to folder and feature names (e.g. `ease-hover-card-lift-sp`) to avoid naming collisions across thousands of submissions.

Many beginners are unsure:
- How to pick a valid suffix
- How to format the folder name correctly
- Which track folder to use (`examples/`, `docs/`, `react/`, `scss/`)
- Which files are required per track

This generator solves that in one page — enter your name, pick a track, and get instant suffix suggestions plus copy-ready paths.

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Enter your **name or initials** (e.g. `Suman Patel` or `SP`).
3. Review auto-generated **suffix suggestions** and click one to apply it.
4. Enter your **feature name** in kebab-case (e.g. `hover-card-lift`).
5. Select your **contribution track** (examples, docs, react, or scss).
6. Copy the **folder name** or **folder structure** from the output panel.
7. Complete the **submission checklist** before opening your PR.

---

## Features

- Name/initials input with auto-generated suffix suggestions
- Suffix strategies: initials, first/last letters, shorthand handles
- Valid folder name generator (`ease-{feature}-{suffix}` format)
- Contribution track selector (examples / react / scss / docs)
- Full submission path output (`submissions/{track}/ease-.../`)
- Example class name and SCSS partial name preview
- Track-specific submission checklist with checkboxes
- Required files reminder per track
- Policy reminders (250+ lines, no core edits, unique suffix)
- Copy-to-clipboard for folder name and folder tree
- Instant client-side generation — no backend required
- Responsive layout and keyboard-friendly controls
- `prefers-reduced-motion` respected

---

## Suffix examples

| Name entered | Generated suffixes |
|--------------|-------------------|
| `Suman Patel` | `sp`, `spa`, `sum`, `pat`, `sumanp` |
| `Alex Kumar` | `ak`, `alk`, `kum`, `alexku` |
| `Priya` | `pr`, `pri`, `piya`, `py` |

---

## Why is it useful?

- **Prevents invalid PRs** — contributors get policy-compliant names before coding.
- **Reduces naming collisions** — suffix derivation encourages unique identifiers.
- **Onboards GSSoC beginners** — no need to guess folder structure from README alone.
- **Complements the PR checklist tool** — focused specifically on suffix + naming workflow.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Generator UI | `style.css` (uses `--ease-*` tokens) |
| Suffix logic | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Generator UI, suffix logic, copy buttons |
| `style.css` | Layout, track cards, suffix chips, checklist |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-suffix-generator-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
