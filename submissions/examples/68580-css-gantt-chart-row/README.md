# CSS Gantt Chart Row

## Overview

A responsive Gantt chart row that maps task bars to a twelve-day timeline using CSS grid and percentage positioning.

## Features

- Twelve-column date timeline
- Multiple task ranges
- Status legend
- Responsive horizontal scrolling
- Semantic headings and labels
- CSS entrance animation
- Reduced-motion support
- No JavaScript dependency

## Files

- `demo.html` — timeline structure, task labels, and legend
- `style.css` — grid, task bars, responsive behavior, and motion styling

## Responsive Behavior

On narrow screens the timeline preserves readable date columns and becomes horizontally scrollable rather than compressing task labels into unusable widths.

## Accessibility

The content uses headings, descriptive labels, and normal document text. Decorative status dots do not carry information by themselves. Reduced-motion preferences disable the bar animation.

## Usage

Open `demo.html` directly in a modern browser.

## Issue

EaseMotion CSS issue #68580.
