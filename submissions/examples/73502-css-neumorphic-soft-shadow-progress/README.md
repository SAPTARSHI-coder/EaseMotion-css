# CSS Neumorphic Soft Shadow Progress

## Overview

A tactile progress component using layered light and dark shadows to create a soft neumorphic surface. The visual depth is built entirely from CSS shadows and gradients, with no image assets or JavaScript.

## Features

- Inset progress track
- Soft outer card shadows
- Semantic progressbar attributes
- Responsive metric cards
- Focus-within feedback
- Subtle hover elevation
- Adjustable progress value
- Reduced-motion support
- Pure CSS implementation

## Implementation

The component relies on paired shadows and an inset track to simulate depth. The progress fill uses a restrained gradient so the value remains clear without relying on motion. Custom properties keep the surface, shadow, text, accent, and focus colors centralized.

Metric cards use a small elevation change on hover. This is deliberately restrained so the neumorphic surface remains coherent instead of turning the supporting cards into separate floating objects.

## Responsive Behavior

The main container uses a fluid width with a desktop maximum. On smaller screens the progress card receives tighter padding, the heading becomes vertical, and the metric grid collapses to one column.

## Accessibility

The progress value is exposed through ARIA attributes. Focus-within styling provides a visible boundary for keyboard interaction, while animation is decorative and is disabled for users who request reduced motion. The component remains meaningful when motion is unavailable.

## Usage

Open `demo.html` in a modern browser. Adjust the fill value and matching ARIA value when demonstrating a different completion percentage.

## Files

- `demo.html` — semantic progress example
- `style.css` — neumorphic surfaces, interaction states, responsive rules, and motion preferences
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73502.
