# Animated Banking Dashboard

A fintech-style dashboard example combining a 3D interactive credit
card, balance overview, spending visualization, savings goals,
transaction history, and bill payments — all built with EaseMotion CSS
components plus custom dashboard styles.

## Features

- **3D credit card** — tilts toward the cursor on hover with a moving shine sweep
- **Balance overview** — account total with quick action buttons
- **Spending visualization** — animated bar chart by category
- **Savings goals** — color-coded progress bars (low / good / great)
- **Transaction history** — categorized list with icons and +/- amounts
- **Bill payments** — upcoming bills with due dates, overdue highlighting

## Usage

Open `demo.html` in a browser — it's fully self-contained aside from
the EaseMotion CSS CDN link and `style.css`.

To reuse a section in your own project, copy the relevant HTML block
plus its corresponding CSS rules from `style.css` (e.g. `.bank-card*`
for just the credit card, `.bank-goal*` for just savings goals).

## How it works

- The credit card tilt uses a `mousemove` listener that calculates
  rotation based on cursor position relative to the card, applied via
  `transform: rotateX() rotateY()`.
- Bar and goal widths are set with a CSS custom property (`--bar-width`,
  `--goal-width`) and animated from `0` to their target value on load
  using a `transition` on `width`.
- All amounts, categories, and bill data in the demo are static
  placeholders — swap them for real data in your own integration.

## Customization

- Card gradient: edit `background` in `.bank-card`
- Bar/goal colors: edit the inline `style` values or the
  `.bank-goal-fill-*` classes
- Panel spacing/radius: edit `.bank-panel`