# Animated Table Row Insertion

A lightweight table interaction that smoothly communicates when a new row is inserted.

## Overview

New table rows can appear abruptly when data changes dynamically. This example adds a subtle entrance animation and temporary highlight to make the newly inserted content easier to notice.

The animation combines:

- Opacity fade
- Small vertical translation
- Temporary background highlight
- Reduced-motion support

The effect is intentionally subtle so it communicates a change without distracting from the table content.

## Usage

Add the `is-new` class to a newly inserted table row:

```html
<tr class="is-new">
  <td>New item</td>
  <td>Just added</td>
</tr>
```

## How It Works

The new row uses two animation layers: a short entrance animation and a temporary highlight on its cells.

The demo's JavaScript only simulates dynamic row insertion. The animation itself is entirely CSS-based.

## Accessibility

The animation respects `prefers-reduced-motion: reduce`, allowing users who prefer reduced motion to receive the content without the entrance animation.

## Design Goals

- **Human-readable** — the `is-new` state clearly describes the behavior.
- **Animation-first** — motion communicates the insertion event.
- **Composable** — the animation can be applied to an existing table without changing its structure.
- **Lightweight** — no external dependencies are required.

## Demo

Open `demo.html` in a browser and click **Add transaction** to see the interaction.

## Files

```text
animated-table-row-insertion/
├── demo.html
├── style.css
└── README.md
```

## Contribution

This is a proposed EaseMotion CSS example. Final class naming, design tokens, and framework integration can be handled by the EaseMotion CSS maintainer.