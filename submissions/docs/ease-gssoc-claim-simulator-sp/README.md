# GSSoC Issue Claim & Cooldown Simulator

An interactive documentation tool that simulates **EaseMotion CSS GSSoC contribution workflow** — 2 active issues max, 24-hour inactivity unassign, valid label selection, and a pre-PR spam-policy checklist.

> Submission track: `submissions/docs/ease-gssoc-claim-simulator-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44491

---

## What does this do?

This repository follows specific GSSoC rules that beginners often violate unknowingly. This simulator lets contributors practice claiming issues, hitting the 2-active limit, watching inactivity countdowns, and completing the checklist before opening a PR.

---

## Simulator features

| Feature | Description |
|---------|-------------|
| Issue claim pool | Mock open issues across examples, docs, scss, react tracks |
| 2-slot limit | Blocks a 3rd claim with an error message |
| 24h countdown | Per-issue timer with safe / warn / danger states |
| Fast-forward demo | Accelerated time + skip-24h button for quick testing |
| Label picker | Practice valid `GSSoC-26` + track label combinations |
| Pre-PR checklist | 8-item pass/fail gate before simulating PR open |
| Comment templates | Copy-ready claim, progress, and PR-ready comments |

---

## How is it used?

1. Open `demo.html` in a browser.
2. Claim up to 2 issues from the pool.
3. Use **Mark progress** to reset the 24-hour timer.
4. Try claiming a 3rd issue to see the limit enforced.
5. Use **Skip 24 hours** to simulate inactivity unassign.
6. Complete the pre-PR checklist and simulate opening a PR.
7. Copy issue comment templates for real contributions.

---

## Features

- Interactive issue claim simulator with 2-active-issues limit enforcement
- Simulated 24-hour cooldown timer with unassign warning states
- Valid label picker (documentation, component, animation, scss, react, etc.)
- Pre-PR spam-policy checklist with pass/fail feedback
- Workflow walkthrough: claim → assignment → work → PR → review
- Common mistake warnings (duplicate claims, inactivity, missing labels)
- Copy-ready issue comment templates for claiming correctly
- Educational notes on GSSoC contribution etiquette for this repo
- Responsive, accessible UI with keyboard-friendly controls

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Simulator UI | `style.css` |
| Claim / timer / checklist logic | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive simulator, checklist, templates |
| `style.css` | Layout, timer states, workflow UI |
| `README.md` | This document |

---

## Rules simulated (from repository policy)

- Maximum **2 active assigned issues** per contributor
- **24-hour inactivity** → issue unassigned and reopened
- Submissions only inside `submissions/examples/`, `docs/`, `scss/`, or `react/`
- No edits to `core/` or `components/`
- Maintainer-only merges — never self-merge

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-gssoc-claim-simulator-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
