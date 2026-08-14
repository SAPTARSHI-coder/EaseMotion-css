# ease-sr-only + Animated Parent Becomes Announced Twice

A documentation guide explaining why visually hidden text (`ease-sr-only`) inside EaseMotion-animated parents can be announced twice by screen readers, and which markup patterns keep announcements stable.

> Submission track: `submissions/docs/ease-sr-only-motion-bug-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47711

---

## What does this do?

When `ease-sr-only` content lives inside a parent that animates (fade, bounce, pulse, transform loops), assistive tech may re-read the same label — once for the control and again when motion updates the accessibility tree or when `aria-label` duplicates the hidden text. This guide shows the buggy pattern, the safe alternatives, and copy-ready snippets.

## How is it used?

1. Open `demo.html` in a browser.
2. Compare the **Unsafe** vs **Safe** live demo regions.
3. Replay the animation and watch the simulated screen-reader log.
4. Read the “why it happens” section and the pattern checklist.
5. Copy recommended HTML snippets into your project.

## Features

- Side-by-side unsafe vs safe examples for `ease-sr-only` inside animated regions
- Simulated screen-reader announcement log (double-read vs single-read)
- Clear explanation of motion + accessibility-tree interaction
- Accessibility-focused notes and do/don’t checklist
- Copy-ready HTML snippets for safe usage
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Prevents a11y bugs** — duplicate announcements confuse SR users.
- **Teaches layering** — keep motion on decorative siblings, labels on stable controls.
- **Framework-aware** — uses real `ease-sr-only` from EaseMotion utilities.
- **Self-contained** — no edits to `core/`, `components/`, or engine files.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Unsafe/safe demos, SR log simulator, snippets |
| `style.css` | Layout, demo stages, responsive design |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-sr-only-motion-bug-sp/`.
- No modifications to `core/`, `components/`, `easemotion/engine/`, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
