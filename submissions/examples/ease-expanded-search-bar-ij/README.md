# Expanded Search Bar

Search bar that expands from a compact icon button to a full-width input on click. Uses a class toggle for smooth width transition with spring-like easing.

## Features

- Icon-only state collapses to a small pill
- Expands to full-width input with smooth transition
- Auto-focus on expand
- Blur collapses when input is empty
- Customizable via `--esb-*` CSS custom properties

## Usage

Toggle `.esb-expanded` class on `.esb-container`. CSS handles the width transition on `.esb-input`. JS manages click toggle, focus, and blur collapse.
