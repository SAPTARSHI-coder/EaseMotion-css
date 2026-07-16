# GSSoC Issue Claim & Cooldown Simulator

An interactive documentation tool that lets contributors **practice this repository's GSSoC workflow** before participating — claim limits, 24-hour inactivity cooldown, valid labels, and the pre-PR spam checklist.

> Submission track: `submissions/docs/ease-gssoc-claim-simulator-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44491

---

## What does this do?

Beginners often violate GSSoC contribution rules unknowingly:

- Claiming too many issues at once
- Going inactive and losing assignments
- Using wrong labels or submission tracks
- Opening PRs without following the spam-policy checklist

This simulator lets you practice safely in the browser — no GitHub account required.

## How is it used?

1. Open `demo.html` in a browser.
2. **Claim simulator** — click "Simulate /claim" on sample issues (max 2 active).
3. **Cooldown timer** — start the demo 24h timer (30 seconds = 24 hours) and watch unassign warnings.
4. **Label picker** — select your issue type and see recommended labels.
5. **Spam checklist** — complete all 8 items for PR-ready feedback.
6. **Templates** — copy `/claim`, `/unclaim`, and progress comment text.

## Features

- Interactive issue claim simulator with 2-active-issues limit
- Simulated 24-hour cooldown timer with warning and unassign states
- Valid label picker (documentation, component, animation, scss, react, enhancement)
- Pre-PR spam-policy checklist with pass/fail feedback
- Workflow walkthrough: find → claim → work → PR → review
- Common mistake warnings
- Copy-ready issue comment templates
- GSSoC contribution etiquette notes
- Responsive layout with keyboard-friendly controls
- Uses EaseMotion CSS CDN (`easemotion.min.css`)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Simulator UI and interaction logic |
| `style.css` | Layout and presentation using `--ease-*` tokens |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- No edits to `core/`, `components/`, or existing project files.
- Self-contained — no backend, no build step.
