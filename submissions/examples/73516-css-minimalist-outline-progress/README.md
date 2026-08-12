# CSS Minimalist Outline Progress

## Overview

A clean progress component that uses an outlined track and restrained fill to communicate completion without visual clutter. The design emphasizes hierarchy and spacing rather than heavy decoration.

## Features

- Minimal outline styling
- Semantic progressbar attributes
- Subtle breathing animation
- Responsive milestone cards
- Focus-within feedback
- Higher-contrast support
- Reduced-motion support
- Pure HTML and CSS

## Implementation

The track uses a thin border and the fill provides the only strong visual weight. A small opacity and scale animation gives the indicator life without moving its position. Supporting note cards use a restrained hover elevation so they remain secondary to the main progress indicator.

Custom properties centralize the panel, text, muted, border, accent, and focus colors. This keeps the component easy to customize while preserving the minimalist visual language.

## Responsive Behavior

The main layout uses a fluid container with a desktop maximum. On smaller screens the panel padding is reduced, the heading stacks vertically, and the milestone cards collapse into a single column.

## Accessibility

The progress component exposes its value through ARIA attributes. Focus-within styling provides a visible boundary when the component is used in a keyboard-driven interface. Higher-contrast preferences strengthen important borders, while reduced-motion preferences disable decorative animation and hover transitions.

## Usage

Open `demo.html` in a modern browser. Adjust the progress value and matching accessible value when demonstrating another completion state.

## Files

- `demo.html` — semantic progress layout
- `style.css` — visual treatment, interaction states, responsive rules, and motion preferences
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73516.
