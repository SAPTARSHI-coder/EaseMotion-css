# Multi-Stage Filter Chip Layout with Animated Reflow

## Overview

A filter toolbar where chips smoothly reposition, scale, and change
color as they're toggled, built entirely with HTML and CSS. Filter
interfaces often update abruptly when selections change, making the
interface feel disconnected. This example animates chip state and
reflow so selection feels continuous, implemented using only
checkboxes and CSS.

## Features

- Three filter groups with 10 total chips
- Active/inactive chip states via hidden checkboxes
- Animated color, scale, and reorder transition on toggle
- Active chips shift to the front of their group
- Simulated results grid that responds visually to filtering
- Fully responsive layout
- CSS custom properties for timing and radius

## File Structure

- `demo.html`
- `style.css`
- `README.md`

## How It Works

Each chip is a `<label>` paired with a hidden checkbox. Checking a
chip applies `:checked + .chip` styles — background color, border,
scale, and a negative `order` value that reflows the chip to the front
of its flex row, all animated with CSS transitions including `order`.

The results grid is a simulated representation of filtered output: a
`:has()` selector on the filter toolbar detects whether any chip is
active and applies a subtle lift and shadow to the result cards,
illustrating that the results have responded to the current filter
state. All interaction — checking, unchecking, and reflow — happens
through native checkboxes and CSS selectors, with no JavaScript
involved.

## Example Use Cases

- E-commerce filtering
- Analytics dashboards
- Search interfaces
- Admin panels
- Content management systems

## Why This Example?

Filters that snap instantly between states with no transition feel
disconnected from the content they affect. Animated reflow keeps chips
and their surrounding layout feeling like one continuous system rather
than a series of abrupt UI updates. This fits EaseMotion CSS's
CSS-first philosophy by using only checkboxes, labels, and CSS
selectors, and it's production-inspired because filter chip toolbars
are a standard pattern across e-commerce and dashboard interfaces.
