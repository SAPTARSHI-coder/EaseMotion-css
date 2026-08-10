# Master–Detail Panel Transition

## Overview

A split-view dashboard where selecting a record smoothly transitions the detail panel instead of swapping it abruptly. This solves the common production problem of losing context when a list-to-detail switch happens instantly. Motion (slide, fade, scale) visually connects the selected record to its detail content, keeping the user oriented. Built entirely with HTML and CSS, no JavaScript.

## Features

- Persistent master list with a single updating detail panel
- Five fully written records
- CSS-only selection via radio inputs and labels
- Slide + fade + scale transition on the detail panel
- Highlighted active list item
- Layout-stable transitions (no reflow/shift)
- Custom properties for spacing, duration, easing, color
- Hover and keyboard focus states
- Fully responsive, single-column on small screens

## File Structure

- demo.html
- style.css
- README.md

## How It Works

- **Master list**: labels linked to hidden radio inputs via `for`/`id`
- **Detail panel**: one article per record, stacked in the same space
- **Selection**: radios share a `name`, so only one is checked at a time; sibling combinators reveal the matching label and article
- **Transition**: inactive articles are translated, scaled down, and transparent; the checked one animates to full opacity, position, and scale
- **Responsive**: grid collapses to one column on smaller screens

## Example Use Cases

- Email clients
- File managers
- CRM systems
- Analytics dashboards
- Project management tools

## Why This Example?

Abrupt content switching breaks the visual link between an action and its result. Motion preserves that link and keeps users oriented as they move between records, which is why this pattern is standard in production software. It fits EaseMotion CSS as a focused example of motion solving a context-preservation problem, and stays HTML/CSS-only to remain lightweight and framework-agnostic.
