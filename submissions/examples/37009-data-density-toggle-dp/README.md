# Animated Data Density Toggle for Tables

## Overview

A dashboard table that smoothly transitions between compact and
comfortable row density using only HTML and CSS. Dashboards often let
users toggle table density, but the switch is usually instant and
jarring. This example animates padding, spacing, and typography
between modes so the change feels continuous, implemented entirely
with radio inputs and CSS.

## Features

- Compact and comfortable density modes
- CSS-only toggle via radio inputs
- Animated row padding, font size, and status badge sizing
- Column alignment preserved during transitions
- Realistic dashboard-style data table
- Fully responsive with horizontal scroll on small screens
- CSS custom properties for spacing and timing

## File Structure

- `demo.html`
- `style.css`
- `README.md`

## How It Works

Two hidden radio inputs represent the two density states. The density
toggle labels target these inputs, and sibling selectors
(`:checked ~`) apply different padding, font size, and badge sizing to
the table cells depending on which radio is checked. Compact mode
tightens vertical padding and reduces font size; comfortable mode
expands both. CSS transitions on `padding` and `font-size` animate the
change smoothly, and because only spacing and type scale change (not
column structure), alignment stays stable throughout.

## Example Use Cases

- Admin dashboards
- Analytics platforms
- CRM systems
- Inventory management tools
- Financial dashboards

## Why This Example?

Instantly snapping between compact and comfortable rows feels abrupt
and can momentarily disorient users scanning a table. Animating the
spacing change keeps context intact and feels more polished. This fits
EaseMotion CSS's CSS-first philosophy by using only radio inputs and
CSS transitions, and it's production-inspired because density toggles
are a common, practical feature in real dashboard products.
