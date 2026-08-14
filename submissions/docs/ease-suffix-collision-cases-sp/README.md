# Contribution Suffix Collision When Two People Use Same Initials

A documentation guide focused on **suffix collision cases and naming policy** — what happens when two contributors both use short initials like `ak`, why `ease-card-ak` clashes, and safer patterns (longer suffix, date, GitHub username).

> Submission track: `submissions/docs/ease-suffix-collision-cases-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47725  
> Note: Different from `ease-suffix-generator-sp` — this guide is about **collision cases / policy**, not generating a suffix.

---

## What does this do?

`CONTRIBUTING.md` asks contributors to append a unique identifier (e.g. `ease-tabs-ak`, `ease-card-pr`). Short 2-letter initials feel convenient but collide often when many people share `ak`, `as`, `js`, etc. This page walks through concrete clash scenarios, risk levels, and recommended unique folder names across docs / examples / react / scss tracks.

## How is it used?

1. Open `demo.html` in a browser.
2. Read the `ease-card-ak` collision case study.
3. Use the risk checker to score a proposed suffix.
4. Compare unsafe vs safe naming examples.
5. Copy recommended folder names for your track.

## Features

- Side-by-side collision vs safe name examples
- Case study of same-initial clashes (`ease-card-ak`)
- Policy recommendations (longer token, date, GitHub username)
- Interactive collision-risk checker
- Copy-ready safe folder names per submission track
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Prevents rejected / conflicting PRs** from duplicate folder paths.
- **Policy clarity** — goes beyond “add a suffix” to “make it unique enough.”
- **Complements the generator** — teach *why* collisions happen.
- **Self-contained** — no edits to `core/` or `components/`.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Case studies, risk checker, safe-name gallery |
| `style.css` | Layout, panels, responsive design |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-suffix-collision-cases-sp/`.
- No modifications to `core/`, `components/`, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
