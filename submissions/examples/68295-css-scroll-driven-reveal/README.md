# CSS Scroll-driven Reveal

## Overview

A CSS scroll-driven animation demo that reveals content as each section enters the viewport. The component demonstrates multiple reveal patterns while keeping the implementation dependency-free and focused on modern CSS motion features.

## Features

- Scroll-driven viewport animations
- Fade and upward reveal
- Horizontal left-to-right reveal
- Horizontal right-to-left reveal
- Scale-based reveal
- Modern `animation-timeline: view()` support
- Fallback animation for browsers without scroll timelines
- Responsive layouts for smaller screens
- Visible keyboard focus states
- Reduced-motion support

## Animation Details

The reveal cards use CSS view timelines so their progress is tied to their position in the viewport rather than to a fixed duration. Individual cards use different keyframes to create variation while maintaining a consistent visual language.

When a browser does not support `animation-timeline: view()`, the component falls back to a conventional entrance animation so the content remains visible and usable.

## Files

- `demo.html` — semantic page structure and reveal sequence
- `style.css` — layout, scroll-driven animations, fallback behavior, responsive rules, and accessibility styling
- `README.md` — implementation and usage documentation

## Usage

Open `demo.html` in a modern browser. No JavaScript, package installation, or build process is required.

For the full scroll-driven effect, use a browser with CSS View Timeline support. Browsers without that feature use the included fallback animation.

## Accessibility

The content remains present in the document regardless of animation support. Interactive navigation includes visible focus styling, and `prefers-reduced-motion` disables the animated transitions and restores normal scrolling behavior.

## Responsive Behavior

The reveal cards switch from a two-column layout to a single-column layout on narrow screens. Padding, typography, and the callout section are also reduced to maintain comfortable spacing on mobile devices.

## Issue

EaseMotion CSS issue #68295.
