<!-- README.md -->
# Desalination Plant — Clean Water Distribution Grid (Phase #1019)

A control-room style dashboard concept built for **EaseMotion CSS**, visualizing how
a modern desalination plant turns seawater into clean, distributed drinking water.
Pure HTML and CSS — no JavaScript, no build step, no dependencies.

## Overview

This showcase imagines what a wall-mounted operations display might look like inside
a coastal desalination facility: glassy panels, soft cyan glow, and a pipeline of
animated nodes tracking water as it moves from the ocean to the city. It's built to
demonstrate EaseMotion CSS-style animation patterns — staggered entrances, pulsing
status indicators, flowing gradients, and progress fills — all running on
`transform` and `opacity` so they stay smooth on real hardware, not just a dev machine.

## Features

- Animated hero with layered ripple rings and a gradient-text headline
- Four plant overview cards (Intake, Reverse Osmosis, Mineral Balancing, Storage)
  with hover-lift interactions and animated capacity bars
- A CSS-only pipeline visualization connecting five treatment stages with
  flowing gradient "water" lines
- A statistics panel with four key metrics in glass cards
- A monitoring section with animated progress bars for quality, pressure,
  flow rate, and reservoir status
- Fully responsive — pipeline reflows from horizontal to vertical on small screens
- Respects `prefers-reduced-motion`
- Zero JavaScript, zero external assets beyond inline SVG icons

## Folder Structure