# Kanban Column Focus Transition

## Overview

A four-column sprint board where focusing one column, Backlog, In Progress, Review or Done, smoothly expands it while the others compress, dim and settle back. It solves the production problem of reviewing one workflow stage in depth without losing sight of the rest of the board. Focus transitions improve readability by giving the active column more room and visual weight while keeping every other column present, just quieter. Implemented entirely with HTML and CSS, no JavaScript.

## Features

- Responsive Kanban board with Backlog, In Progress, Review and Done columns
- Realistic task cards with priority tags, owner and due date metadata
- CSS-only column focus using radio inputs and labels
- Animated width, scale, brightness, opacity and elevation on focus change
- Expanding active column paired with compressed, de-emphasized inactive columns
- All columns remain visible at every focus state
- Subtle lift and shadow animation on task card hover
- CSS custom properties for spacing, duration, easing and color
- Fully responsive, wrapping to a grid and then a single column on smaller screens

## File Structure

- demo.html
- style.css
- README.md

## How It Works

- **Kanban board layout**: a flex row of four equal-width columns, each with a header, count badge, and a scrollable list of task cards
- **Column focus controls**: five hidden radio inputs sharing a `name`, `All Columns` plus one per column, paired with labels styled as a control bar
- **Animated emphasis transitions**: `:checked` combined with sibling combinators grows the matching column's `flex-grow` and scale while shrinking, dimming and desaturating the rest via `filter` and `opacity`
- **CSS-only interaction**: radios and labels alone drive every focus change, no scripting involved
- **Responsive behavior**: columns wrap into a two-column grid on medium screens and stack into a single column on small screens, where focus scaling and dimming are relaxed so all content stays legible

## Example Use Cases

- Project management platforms
- Agile boards
- Issue trackers
- Sprint planning tools
- Workflow dashboards

## Why This Example?

Highlighting one workflow stage at a time makes it easier to scan a busy column's cards without the rest of the board competing for attention. Motion preserves awareness of the surrounding columns by shrinking and dimming them instead of hiding them, so the overall workflow stays visible even while one stage is emphasized. This fits EaseMotion CSS as a focused example of proportional, board-wide motion driven by a single interaction, and it is production-inspired because focus-driven Kanban and sprint boards are a standard pattern in agile project tooling.
