# Keyboard Accessibility Audit (`ease-a11y-keyboard-audit-hr18`)

An audit of EaseMotion's documented interactive patterns against keyboard and
screen-reader expectations, with a working accessible reference
implementation of each, built for issue
[#47369](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47369).

## A note on scope

The issue asks to "verify every button, modal, dropdown, tooltip, accordion,
etc." — which, taken literally, means editing the framework's actual
components in `core/`/`components/`. The repository's own README currently
states that **PRs modifying core files, workflows, configs, or shared
framework code are temporarily restricted** while the project stabilizes,
and that only self-contained submissions inside `submissions/` are being
reviewed. So instead of touching restricted files, this submission audits
the patterns as EaseMotion's own documentation demonstrates them, and
provides corrected, accessible reference markup/CSS/JS for each — something
the maintainer (or any contributor, once core access reopens) can use
directly to patch the real components.

## What it covers

Five patterns, each with a **common-issues list** and a **live, working
reference implementation**:

- **Button** — native `<button>` usage and `:focus-visible` styling instead
  of a clickable `<div>` with focus suppressed
- **Modal / Dialog** — focus moves into the dialog on open, `Tab` is trapped
  inside it, `Escape` closes it, and focus returns to the trigger afterward
- **Dropdown menu** — opens via keyboard, `↓`/`↑` move between items,
  `Escape` closes and returns focus to the trigger, `aria-expanded` stays in
  sync
- **Accordion** — real `<button>` headers with `aria-expanded` /
  `aria-controls` wired to their panels
- **Tooltip** — shows on `:focus-visible` as well as `:hover`, dismissible
  with `Escape`, connected to its trigger via `aria-describedby`

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Open `demo.html` and try each pattern with the keyboard only — `Tab` through
the page, open the dialog and try `Tab`/`Escape`, open the menu with `Enter`
and navigate with arrow keys, toggle the accordion headers with `Enter` or
`Space`, and tab to the tooltip trigger to see it appear without hovering.
Each pattern's "common issues" list explains what typically breaks these
interactions and why the reference fixes it.

## Accessibility notes (this is the whole submission, but a few specifics)

- `:focus-visible` is used everywhere instead of `outline: none`, so the
  focus ring only shows for keyboard users and never for mouse clicks.
- The modal implements a real focus trap (`Tab`/`Shift+Tab` wrap within it)
  and restores focus to whatever triggered it on close — both frequently
  missed in ad-hoc modal implementations.
- The dropdown menu follows the WAI-ARIA APG menu-button pattern closely
  enough for this scope: `aria-haspopup`, `aria-expanded`, `role="menu"` /
  `role="menuitem"`, arrow-key navigation, and `Escape`-to-close-with-
  focus-return.
- No element anywhere uses a `tabindex` greater than `0` — natural DOM order
  matches visual order throughout.
- The tooltip is reachable and dismissible by keyboard alone, not just by
  hovering with a mouse.

## Responsiveness

Each pattern's body collapses from a two-column (issues list + demo) layout
to a single column under a `760px` viewport width.

## Why this fits EaseMotion CSS

It directly serves the issue's goal — verifying and fixing keyboard
accessibility across the framework's interactive patterns — while
respecting the repository's current restriction on `core/`/`components/`
edits. The reference implementations are pure CSS plus minimal, framework-
free JavaScript, consistent with EaseMotion's zero-dependency philosophy,
and can be lifted directly into the real components once core contributions
reopen.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/docs/`.
