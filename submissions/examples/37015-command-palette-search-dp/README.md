# Animated Command Palette Search

## Overview

A command palette dialog, in the style of modern developer tools, that opens with layered motion: a fading backdrop, a scaling and sliding panel, and staggered command groups. It solves the production problem of surfacing many actions without cluttering the UI, letting users search and jump to commands from one focused overlay. Layered motion helps users track what just appeared and where their focus should go, improving discoverability and orientation. Implemented entirely with HTML and CSS, no JavaScript.

## Features

- Centered, backdrop-covered command palette
- CSS-only open and close via a checkbox toggle
- Search field with icon
- Three grouped command sections, twelve command items total
- Icons and keyboard shortcut badges on every command
- Layered entrance: backdrop fade, palette scale/translate, staggered group fade-in
- Hover and focus-visible states on every command item
- Clearly highlighted selected command
- CSS custom properties for spacing, radius, duration, easing, color
- Fully responsive with mobile-adjusted spacing and stacked shortcuts

## File Structure

- demo.html
- style.css
- README.md

## How It Works

- **Command palette**: a fixed-position dialog centered over a backdrop, containing a search field, grouped commands, and a shortcut footer
- **CSS-only interaction**: a hidden checkbox is toggled by the "Open Command Palette" button and closed via the backdrop or the Esc label, both pointing to the same checkbox `id`
- **Grouped commands**: three `section` elements ("Navigation", "Actions", "Settings") each list four commands with an icon, label, and shortcut keys
- **Layered transitions**: `:checked` drives the backdrop opacity, the palette's scale/translate entrance, and per-group transition delays so groups appear in sequence rather than all at once
- **Responsive layout**: the palette width, padding, and shortcut layout adapt at smaller breakpoints, and command items stack their shortcut badges below the label on narrow screens

## Example Use Cases

- Developer tools
- Code editors
- Productivity applications
- Admin dashboards
- Project management platforms

## Why This Example?

Command palettes surface a large number of actions in a small space, so layered motion, rather than an instant snap, helps users register the backdrop, the panel, and the grouped content as separate steps instead of a jarring flash. Staged transitions improve orientation by giving each layer its own moment to register, making the whole interaction feel intentional. This fits EaseMotion CSS as a focused example of layered, staggered motion solving a real discoverability problem, and it is production-inspired because command palettes are now standard in modern developer and productivity tools.
